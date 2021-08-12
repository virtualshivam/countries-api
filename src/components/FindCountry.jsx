import  ApiData from './ApiData';

const FindCountry = (code)=>{


    const codeToCountry =(c)=>{
     const Countryobject  = ApiData().filter(e=>{
            return e["alpha3Code"] ==c;
        })
        return Countryobject;
    }

const parentCountry = codeToCountry(code);
    return parentCountry
}

export default FindCountry;