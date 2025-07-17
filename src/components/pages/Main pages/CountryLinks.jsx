import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCountryLinks } from '../../../redux/CountrySlice'
import { IoLocationOutline } from "react-icons/io5";
import { Link } from 'react-router-dom'
import { createPortal } from 'react-dom';
import { HiXMark } from "react-icons/hi2";
import '../pageCss/modal.css'

function CountryLinks({ closeCModal }) {

    const [regions, setRegions] = useState([])
    const { countryData } = useSelector(state => state.countries)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getCountryLinks())
    }, [])
    useEffect(() => {
        const reg = new Set([...countryData?.map(region => region.continent)])
        setRegions([...reg])
    }, [countryData])

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
                                <h3>{item}</h3>
                                <div className='region_countries'>
                                    {countryData?.filter(element => element.continent === item)
                                        .map(country => (
                                            <Link to={'/'} key={country.id}>
                                                <IoLocationOutline style={{ color: "#CACACB", fontSize:"24px" }} />
                                                <div className="country_info">
                                                    <span>{country.name}</span>
                                                    <span>{country.officialLanguage}</span>
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

export default CountryLinks
