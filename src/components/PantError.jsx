import React from 'react'
import './styles/errorScreen.css'

const PantError = () => {
  return (
    <div className='errorMsj'>
        <h2 className='errorMsj__item'>Debes permitir el acceso a tu ubicación para que
            podamos darte los datos meteorológicos de tu área.
        </h2>
        <h2 className='errorMsj__item'>In order to provide meteorological data near you, 
            please allow us to access your location.</h2>
    </div>
  )
}

export default PantError