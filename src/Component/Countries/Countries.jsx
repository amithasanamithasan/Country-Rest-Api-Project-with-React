import { useEffect } from "react";
import { useState } from "react";
import Country from "../../Country";
import './Countries.css'
const Countries = () => {
const[countrys, setCountry]=useState([]);

useEffect(()=>{
fetch('https://restcountries.com/v3.1/all/')
.then(res=> res.json())
.then(data=> setCountry(data))


}, [])


    return (
        <div >
            <h2>Countries World wide:{countrys.length}</h2>
            <div className="country-container">
            {
              countrys.map(country=> <Country key={country.cca3} country={country}></Country>)  
            }
            </div>
            
           
            
        </div>
    );
};

export default Countries;