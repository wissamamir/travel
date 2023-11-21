import React, { Fragment } from 'react'

const Weather = ({ temperature, city, country, humidity, description, error }) => {
  return (
    <Fragment>

      <div className='weather'>
        {
          temperature && <p> Temperature : {temperature}</p>
        }

        {
          city && <p>City : {city}</p>
        }

        {
          country && <p>Country : {country}</p>
        }

        {
          humidity && <p>Humidity : {humidity}</p>
        }

        {
          description && <p>Description : {description}</p>
        }


      </div>
      {
        error && <p className='error'> {error}</p>
      }
    </Fragment>
  )
}

export default Weather
