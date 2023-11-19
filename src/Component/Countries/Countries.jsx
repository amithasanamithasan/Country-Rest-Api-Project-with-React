import { useEffect } from "react";
import { useState } from "react";
import Country from "../../Country";

const Countries = () => {
const[countrys, setCountry]=useState([]);

useEffect(()=>{
fetch('https://restcountries.com/v3.1/all/')
.then(res=> res.json())
.then(data=> setCountry(data))


}, [])


    return (
        <div>
            <h2>Countries World wide:{countrys.length}</h2>
            {
              countrys.map(country=> <Country country={country}></Country>)  
            }
            
        </div>
    );
};

export default Countries;