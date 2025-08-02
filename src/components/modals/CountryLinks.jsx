import React, { memo, useEffect, useMemo, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCountryLinks } from '../../redux/CountrySlice'
import { setCountryName } from '../../redux/CountryNameSlice';
import { IoLocationOutline } from "react-icons/io5";
import { Link } from 'react-router-dom'
import { createPortal } from 'react-dom';
import { HiXMark } from "react-icons/hi2";
import { IoIosArrowDown } from "react-icons/io";
import './modal.css'

function CountryLinks({ closeCModal }) {

    const { countryData } = useSelector(state => state.countries)
    const dispatch = useDispatch()
    const [contr, setContr] = useState(false)
    const contrRef = useRef([])
    const contrIconRef = useRef([])

    useEffect(() => {
        dispatch(getCountryLinks())
    }, [dispatch])
    const regions = useMemo(() => {
        return [...new Set(countryData?.map(region => region.continent))];
    }, [countryData]);

    const toggleContr = (index) => {
        const content = contrRef.current[index];
        const icon = contrIconRef.current[index];
        if (!content || !icon) return;
        if (contr === index) {
            content.style.height = '0px';
            icon.style.transform = 'rotate(0deg)';
            setContr(null);
        } else {
            if (contr !== null && contrRef.current[contr]) {
                contrRef.current[contr].style.height = '0px';
                contrIconRef.current[contr].style.transform = 'rotate(0deg)';
            }
            content.style.height = content.scrollHeight + 'px';
            icon.style.transform = 'rotate(180deg)';
            setContr(index);
        }
    }

    const countryModal = (
        <section className='country_modal'>
            <div className="container">
                <button className='cModal_close_btn'
                    onClick={closeCModal}>
                    <HiXMark style={{ color: "#fff", fontSize: "28px" }} />
                </button>
                <h1>Select your Location</h1>
                <div className="countries">
                    {regions &&
                        regions?.map((item, index) => (
                            <div className='regions' key={index}>
                                <h3 onClick={() => toggleContr(index)}>
                                    <span>{item}</span>
                                    <div className="region_icon">
                                        <IoIosArrowDown ref={el => contrIconRef.current[index] = el}
                                            style={{ transition: '0.3s' }} />
                                    </div>
                                </h3>
                                <div
                                    className='region_countries'
                                    ref={el => contrRef.current[index] = el}>
                                    {countryData?.filter(element => element.continent === item)
                                        .map(country => (
                                            <Link
                                                to={`/${country.code}`}
                                                key={country.id}
                                                onClick={() => {
                                                    closeCModal();
                                                    dispatch(setCountryName(country.name));
                                                }}>
                                                <IoLocationOutline style={{ color: "#CACACB", fontSize: "24px" }} />
                                                <div className="country_info">
                                                    <span className='country_name'>{country.name}</span>
                                                    <span className='country_lang'>{country.officialLanguage}</span>
                                                </div>
                                            </Link>
                                        ))}
                                </div>
                            </div>
                        ))}
                </div>
            </div>
        </section>
    )
    return createPortal(countryModal, document.getElementById("modal_root"));
}

export default memo(CountryLinks)
