
import { useState } from 'react';
import './Countries.css'

const Country = ({country ,handelvisitedCountry,handelvisitedflags}) => {

    // console.log(country);

const{name, area, flags, capital ,population}=country;

const [visited, setVisited] = useState(false);

const handel1=()=>{
setVisited(!visited);
}
// const passWithParams=()=>handelvisitedCountry(country)

// console.log(handelvisitedCountry);


    return (
<div className={`Box ${visited ? 'visited' :'nonvisited'}`} >
<h2 style={{color: visited? 'black' :'purple'}} >Name: {name.common}</h2>
<img src={flags.png} alt="" />
<h4>Capital:{capital}</h4>
<h5>Population:{population}</h5>
<h5>Area:{area}</h5>
<button onClick={()=>handelvisitedCountry(country)} >Mark Visited</button>
<br />
<button onClick={()=>handelvisitedflags(country.flags.png)}>Add Flags</button>
<br />
<button onClick={handel1}>{!visited?'Going':'visited'}</button>
{visited ?'I have visited this Country': 
'I want to visited'}
<p></p>

</div>
    );
};

export default Country;
