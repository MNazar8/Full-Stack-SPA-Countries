import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCountries } from "../../redux/actions";
import Card from "../Card/Card";
import FilterAndSort from "../FilterAndSort/FilterAndSort";
import styles from "../Cards/Cards.module.css";

const Cards = () => {
  const dispatch = useDispatch();
  const allCountries = useSelector((state) => state.filteredCountries);

  const countriesPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const prevPage = currentPage - 1;
  const nextPag = currentPage + 1;

  const handlePrevPage = () => {
    setCurrentPage((currentPage) => Math.max(currentPage - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage((currentPage) => Math.min(currentPage + 1, totalPages));
  };

  const handleFirstPage = () => {
    setCurrentPage((currentPage) => currentPage - (currentPage - 1));
  };

  const handleLastPage = () => {
    setCurrentPage((currentPage) => totalPages);
  };

  const indexOfLastCountry = currentPage * countriesPerPage;
  const indexOfFirstCountry = indexOfLastCountry - countriesPerPage;
  const currentCountries = allCountries.slice(
    indexOfFirstCountry,
    indexOfLastCountry
  );

  const totalPages = Math.ceil(
    (allCountries.length ? allCountries.length : 0) / countriesPerPage
  );
  console.log(totalPages);

  useEffect(() => {
    //cada vez que modifico allCountries setea la current page en 1
    setCurrentPage(1);
  }, [allCountries]);

  useEffect(() => {
    dispatch(getCountries());
  }, []);

  return (
    <div className={styles.cards_container}>
      <div className={styles.card_filters}>
        <FilterAndSort />
      </div>
      <div className={styles.cards}>
        {currentCountries.map((individualCountry) => (
          <Card
            key={individualCountry.id}
            id={individualCountry.id}
            name={individualCountry.name}
            imgFlag={individualCountry.imgFlag}
            continent={individualCountry.continent}
            // population  = {individualCountry.population}
          />
        ))}
      </div>
      <div className={styles.paginationContainer}>
        <div className={styles.pagination}>
          {totalPages < 1 ? (
            <button>0</button>
          ) : (
            <div className={styles.paginationChildren}>
              <button onClick={handleFirstPage}>First</button>
              <button onClick={handlePrevPage} hidden={currentPage === 1}>
                {prevPage}
              </button>
              <button className={styles.selected}>{currentPage}</button>
              <button
                onClick={handleNextPage}
                hidden={currentPage === totalPages}
              >
                {nextPag}
              </button>
              <button onClick={handleLastPage}>Last</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cards;
