import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { getCountries, getCountriesByName } from '../../redux/actions';
import styles from '../SearchBar/SearchBar.module.css'
import { useNavigate } from 'react-router-dom';

export default function SearchBar() {
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const [country, setCountry] = useState('');

    function handleSubmit (event){
        event.preventDefault();
        if (country.length > 0){dispatch(getCountriesByName(country))
        setCountry('');
        event.target.reset();}
        else{
            alert('Write a country name', window.location.reload())
            
        }
    }

    function handleSearch(event){
        event.preventDefault();
        setCountry(event.target.value)
    }

  return (
    <div className={styles.div_input}>
        <form onSubmit={(event)=>handleSubmit(event)} className={styles.search_form}>
            <input className={styles.input_search} type="text" placeholder='Search a country' onChange={(event)=> handleSearch(event)}/>
            <button className={styles.search_button}type='submit'>🔍 </button>
        </form>
    </div>
  )
}