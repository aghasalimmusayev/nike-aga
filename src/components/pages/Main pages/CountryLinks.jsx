import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCountryLinks } from '../../../redux/CountrySlice'
import { IoLocationOutline } from "react-icons/io5";
import { Link } from 'react-router-dom'
function CountryLinks() {

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

    return (
        <div className="container">
            <section>
                <h1>Select your Location</h1>
                <div className="countries">
                    {regions &&
                        regions?.map((item, index) => (
                            <>
                                <h3 key={index}>{item}</h3>
                                {countryData?.filter(element => element.continent === item)
                                    .map(country => (
                                        <Link>
                                            <IoLocationOutline />
                                            <span>{country.name}</span>
                                            <span>{country.officialLanguage}</span>
                                        </Link>
                                    ))}
                            </>
                        ))}
                </div>
            </section>
        </div>
    )
}

export default CountryLinks
