import React from 'react'

export const CountryCard = ({ country,index }) => {
    return (
        <>
            <li key={index} >
            {country.name.common}
            </li>
        </>
    )
}