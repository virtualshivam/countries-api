import { useState } from "react";
import CardContainer from "./CardContainer";
import FilterData from './FilterAndSearch'


const SearchAndCardsSection = () => {
 

  //State for searches
  const [searchInput,setSearchInput] = useState('');
  const [filterList,setFilterList] = useState('all');

  const dataToBeDisplayed = FilterData(searchInput,filterList)

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const optionSelectionHandler = (e) => {
    document.querySelector(".selected span").innerHTML = capitalizeFirstLetter(
      e.currentTarget.querySelector("label").htmlFor
    );
    setFilterList(e.currentTarget.querySelector("label").htmlFor)
    document.querySelector(".options-container").classList.remove("active");

  };


  return (
    <>

      <div className="container">
        <div className="row justify-content-between mt-5 mx-0">
          <div className="col-md-6 search-box d-flex align-items-center py-3 col-12 mb-4 mb-md-0">
            <div className="search-icon d-flex align-items-center px-md-4 px-2 ">
              <i className="fas fa-search"></i>
            </div>
            <div className="search-input  w-100">
              <input
                type="text"
                placeholder="Search for a country..."
                spellCheck="false"
                className="w-100"
                value={searchInput}
                onChange={e=>setSearchInput(e.target.value)}
              />
            </div>
          </div>
          <div className="col select-box d-flex">
            <div className="options-container">
              {["all", "africa", "americas", "asia", "europe", "oceania"].map(
                (country) => {
                  return (
                    <div
                      className="option"
                      key={country}
                      onClick={optionSelectionHandler}
                    >
                      <input
                        type="radio"
                        className="radio"
                        name="continent"
                        id={country}
                      />
                      <label htmlFor={country}>{country}</label>
                    </div>
                  );
                }
              )}
            </div>
            <div
              className="selected d-flex justify-content-between align-items-center"
              onClick={() =>
                document
                  .querySelector(".options-container")
                  .classList.toggle("active")
              }
              
            >
              <span>Filter by Region</span>
              <i className="fas fa-chevron-down"></i>
            </div>
          </div>
        </div>
      </div>
      <CardContainer countries={dataToBeDisplayed} />
    </>
  );
};

export default SearchAndCardsSection;
