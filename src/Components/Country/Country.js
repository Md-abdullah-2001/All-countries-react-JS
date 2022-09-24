import React from 'react';
import './Country.css'
const Country = (props) => {

          const {name , population , region , flags} = props.country
          return (
                    <div className='country'>
                              <img src={flags.png} alt=''></img>
                              <h2>Country Name: {name.common}</h2>
                              <h4>region: {region}</h4>
                              <p>Population : {population}</p>
                    </div>
          );
};

export default Country;