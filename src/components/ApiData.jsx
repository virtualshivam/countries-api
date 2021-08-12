import { useEffect, useState } from "react";

const GetDatafromApi = ()=>{

    const [country,setCountry] =useState([]);

    const apiData = async() =>{
    const res = await fetch("https://restcountries.eu/rest/v2/all");
    const data =await res.json();
    setCountry(data);
}

useEffect(()=>{
    apiData()
},[])


    return country

    
}

export default GetDatafromApi;