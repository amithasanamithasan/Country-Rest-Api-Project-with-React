
import './Countries.css'
const Country = ({country}) => {
    console.log(country);
const{flags, capital ,population}=country;
    return (
        <div className="Box">
            <img className='image' src={flags.png} alt="" />
            <p>Name:{capital}</p>
            <p>Population:{population}</p>
         
            <p></p>
            
        </div>
    );
};

export default Country;
