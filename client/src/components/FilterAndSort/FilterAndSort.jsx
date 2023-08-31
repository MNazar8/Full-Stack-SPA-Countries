import React, { useEffect, useState } from "react";
import {
  filterByContinents,
  filterByActivities,
  orderByName,
  orderByPopulation,
  getCountries,
  getActivities,
} from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import styles from "../FilterAndSort/FilterAndSort.module.css";

const FilterAndSort = () => {
  const dispatch = useDispatch();  

  useEffect(() => {
    dispatch(getCountries()), dispatch(getActivities());
  }, []);
  const allActivities = useSelector((state) => state.activities);

  const handleFilter = (event) => {
    const continents = event.target.value;
    dispatch(filterByContinents(continents));
  };

  const handleSelectChange = (event) => {
    const selectedActivity = event.target.value;
    dispatch(filterByActivities(selectedActivity));
  };

  const handleOrderByName = (event) => {
    const orderBy = event.target.value;
    dispatch(orderByName(orderBy));
  };

  const handleOrderByPopulation = (event) => {
    const orderByNumber = event.target.value;
    dispatch(orderByPopulation(orderByNumber));
  };

  const ShowBar = () =>{
    var div = document.getElementById("showDiv");
    var filter = document.getElementById("hideButton");
    var x = document.getElementById("xButton");
    if (div.style.display === "none") {
      div.style.display = "block"; 
      filter.style.display = "none";
      x.style.display = "block";      
    } else {
      div.style.display = "none";
      filter.style.display = "block"
      x.style.display = "none";
    }
  }

  return (
    <div className={styles.filters_container}>
      <button id="hideButton" className={styles.filter_button} onClick={ShowBar}>Filters</button>
      <div id="showDiv" hidden className={styles.select_container}>
        <button id="xButton" onClick={ShowBar}>X</button>
        <div>
          <select onChange={handleOrderByName}>
            <option value="" >
              Order By Name
            </option>
            <option value="OrderAZ">Order A-Z </option>
            <option value="OrderZA">Order Z-A</option>
          </select>
        </div>

        <div>
          <select onChange={handleSelectChange}>
            <option value="" hidden>
              Show By Activity
            </option>

            <option value="All">All</option>

            {Array.isArray(allActivities) &&
              allActivities.map((activity) => (
                <option key={activity.id} value={activity.name}>
                  {activity.name}
                </option>
              ))}
          </select>
        </div>

        <div>
          <select onChange={handleFilter}>
            <option value="" hidden>
              Show By Continent
            </option>
            <option value="All">All</option>
            <option value="North America">North America</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
            <option value="Asia">Asia</option>
            <option value="Antarctica">Antarctica</option>
            <option value="Africa">Africa</option>
            <option value="South America">South America</option>
          </select>
        </div>

        <div>
          <select onChange={handleOrderByPopulation}>
            <option value="" hidden>
              Order By Population
            </option>
            <option value="Minortomajor">Order Minor To Major</option>
            <option value="MajortoMinor">Order Major To Minor</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default FilterAndSort;