
// import { useEffect, useState } from 'react';
import './App.css';
import Countries from './Components/Countries/Countries';

function App() {

  return (
    <div className="App">
  <Countries></Countries>
    </div>
  );
}












// function RestCountries() {
//   const [countries, setCountries] = useState([])
//   useEffect(() => {
//     fetch('https://restcountries.com/v3.1/all')
//       .then(res => res.json())
//     .then(data => setCountries(data))
//   }, [])
//   return (
//     <div>
//       <h1>Visiting Every Countries in the world!!</h1>
//       <p>Length :{countries.length}</p>
//       {
//         countries.map(country => <Country name={country.name.common}></Country>)
//       }
//     </div>
//   )
// }
// function Country(props) {
//   return (
//     <div>
//       <h1>{props.name}</h1>
//     </div>
//   )
// }

export default App;
