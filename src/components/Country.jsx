import { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";


const Country = ({ match }) => {

  const [allCountry,setAllCountry]=useState(null);
  const history = useHistory()
  let parentCountry,bounryCountries
  const getData= async ()=>{
    const res = await fetch("https://restcountries.eu/rest/v2/all");
    const data =await res.json();
    setAllCountry(data);
  }

  useEffect(()=>{
    getData();
  },[])

  if(allCountry){

    const codeToCountry =(c)=>{
      const Countryobject  = allCountry.filter(e=>{
             return e["alpha3Code"] ===c;
         })
         return Countryobject;
     }


      parentCountry = codeToCountry(match.params.id)[0];

      bounryCountries = parentCountry.borders.map(e=>{
      return codeToCountry(e);
     })
  }


  return (
    <>
      {(allCountry) &&(
    <div className="container mb-5">
    <div className="row my-5">
      <div className="col">
        <button className="btn px-4 back-button" onClick={()=>history.goBack()}>
          <i class="fas fa-long-arrow-alt-left mr-3"></i>
          <span>Back</span>
        </button>
      </div>
    </div>
    <div className="row country-info">
      <div className="col-12 col-lg-6">
        <img
          className="img-fluid w-100 country-info-flag"
          src={parentCountry.flag}
          alt="Country flag of demo"
        />
      </div>
      <div className="col-12 col-lg-6 d-flex flex-column justify-content-center mt-5 mt-lg-0 country-info">
        <h1 className="font-weight-bold mb-3 mb-md-5">{parentCountry.name}</h1>
        <div className="row">
          <div className="col-12 col-md-6 ">
            <p className="font-weight-bold">
              Native Name:{" "}
              <span className="font-weight-light">
                {parentCountry.nativeName}
              </span>
            </p>
            <p className="font-weight-bold">
              Population:{" "}
              <span className="font-weight-light">
                {parentCountry.population}
              </span>
            </p>
            <p className="font-weight-bold">
              Region:{" "}
              <span className="font-weight-light">
                {parentCountry.region}
              </span>
            </p>
            <p className="font-weight-bold">
              Sub Region:{" "}
              <span className="font-weight-light">
                {parentCountry.subregion}
              </span>
            </p>
            <p className="font-weight-bold">
              Capital:{" "}
              <span className="font-weight-light">
                {parentCountry.capital}
              </span>
            </p>
          </div>
          <div className="col-12 12 col-md-6 mt-4 mt-md-0 ">
            <p className="font-weight-bold">
              Top level Domain:{" "}
              <span className="font-weight-light">
                {parentCountry.topLevelDomain}
              </span>
            </p>
            <p className="font-weight-bold">
              Currencies:{" "}
              <span className="font-weight-light">
                {parentCountry.currencies[0].name}
              </span>
            </p>
            <p className="font-weight-bold">
              Languages:{" "}
              <span className="font-weight-light">
                {parentCountry.languages[0].name}
              </span>
            </p>
          </div>
        </div>
        {(!bounryCountries.length)? "" : <div className="row mt-5">
          <div className="col-12 col-md-4 pr-0 mb-2">
            <h4 className="d-md-none d-block font-weight-bold">
              Border Countries:
            </h4>
            <p className="d-md-block d-none font-weight-bold">
              Border Countries:
            </p>
          </div>
          <div className="col-12 col-md-8 neighbour-button">
            {bounryCountries.map((e)=>{
              return <Link exact to={`/country/${e[0].alpha3Code}`}><button className="btn mr-3 mb-2">{e[0].name}</button></Link>
              
            })}
          </div>
        </div>}
      </div>
    </div>
  </div>
  )}
    </>
  );
};

export default Country;
