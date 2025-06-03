import React, { useEffect, useState, useTransition } from 'react'
import getCountryData from '../API/postAPI.jsx'
import Loader from '../components/UI/loader.jsx'

export const Country = () => {
  const [ispending, startTransition] = useTransition();
  const [countries, setcountries] = useState([])

  useEffect(() => {
    startTransition(async () => {
      const res = await getCountryData();
      setcountries(res.data);
    })
  }, [])

  if (ispending) return <Loader />;
  return (
    <>
      <section className="country">
        <ul className="grid-four-cols grid">
          {
            countries.map((curcountry,index)=>{
              return <CountryCard country={curcountry} key={index}/>
            })
          }
        </ul>
      </section>
    </>
  )
}