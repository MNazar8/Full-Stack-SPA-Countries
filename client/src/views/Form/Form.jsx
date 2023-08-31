import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { getActivities, getCountries, postActivity } from "../../redux/actions";
import styles from "../Form/Form.module.css";

function createActivity() {
  const dispatch = useDispatch();
  const allCountries = useSelector((state) => state.countries);  
  allCountries.every((c) => c.name != "--") &&
    allCountries.unshift({ name: "--" });
  const sortedCountries = allCountries.sort((a, b) =>
    a.name > b.name ? 1 : b.name > a.name ? -1 : 0
  );
  // const existingActivities = useSelector((state) => state.activities);
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});
  const [active, setActive] = useState(false);
  const seasons = ["--", "Summer", "Spring", "Winter", "Auttumn"];
  const difficulties = ["--", 1, 2, 3, 4, 5];
  const [input, setInput] = useState({
    name: "",
    difficulty: "",
    duration: "",
    season: [],
    countries: [],
  });

  useEffect(() => {
    dispatch(getCountries());
    dispatch(getActivities());
  }, []);

  function handlerChange(event) {
    setInput({ ...input, [event.target.name]: event.target.value }); //llena el state del input
    setErrors( // llena el state del error
      validate({
        ...input,
        [event.target.name]: event.target.value,
      })
    );
  }

  function handlerSelectDifficulty(event) {
    setInput({
      ...input,
      difficulty: event.target.value,
    });
    setErrors(
      validate({
        ...input,
        [event.target.name]: event.target.value,
      })
    );
  }

  function handlerSelectSeason(event) {
    setInput({
      ...input,
      season: input.season.includes(event.target.value)
        ? [...input.season]
        : [...input.season, event.target.value],
    });
    setErrors(
      validate({
        ...input,
        season: [...input.season, event.target.value],
      })
    );
  }

  function handlerSelectCountries(event) {
    setInput({
      ...input,
      countries: input.countries.includes(event.target.value)
      ? [...input.countries]
      : [...input.countries, event.target.value],
    });
    setErrors(
      validate({
        ...input,
        countries: [...input.countries, event.target.value],
      })
      );    
  }

  function handleDeleteSeason(event) {
    setInput({
      ...input,
      season: input.season.filter((season) => season !== event),
    });
  }
  function handleDeleteCountry(event) {
    setInput({
      ...input,
      countries: input.countries.filter((country) => country !== event),
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (!input.name) return alert("Name is required");
    if (!input.difficulty) return alert("Difficulty is required");
    if (
      input.difficulty != "1" &&
      input.difficulty != "2" &&
      input.difficulty != "3" &&
      input.difficulty != "4" &&
      input.difficulty != "5" 
    ) return alert("Pick a number");
    if (!input.duration) return alert("Duration is required");
    if (input.season=="--") return alert("Pick a season");
    if (input.season.length<1) return alert("Season is required");
    if (input.countries=="--") return alert("Pick a country");
    if (input.countries.length<1) return alert("Country is required");
    else dispatch(postActivity(input));
    setInput({
      name: "",
      difficulty: "",
      duration: "",
      season: [],
      countries: [],
    });
    navigate("/home");
  }

  function validate(input) {
    let errors = {};
    if (!input.name) {
      errors.name = "*Insert Name";
    } else if (
      typeof input.name !== "string" ||
      input.name.length < 2 ||
      input.name.length > 35 ||
      input.name.includes("1") ||
      input.name.includes("2") ||
      input.name.includes("3") ||
      input.name.includes("4") ||
      input.name.includes("5") ||
      input.name.includes("6") ||
      input.name.includes("7") ||
      input.name.includes("8") ||
      input.name.includes("9") ||
      input.name.includes("0")
    ) {
      errors.name = "*Write without numbers";
    } 
    // else if (
    //   existingActivities.find(
    //     (activity) => activity.name.toLowerCase() === input.name.toLowerCase()
    //   )
    // ) {
    //   errors.name = `*Activity named -${input.name}- already exists`;
    // } 
    else if (!input.difficulty) {
      errors.difficulty = "Difficulty is required";
    } else if (
      input.difficulty!=1 &&
      input.difficulty!=2 &&
      input.difficulty!=3 &&
      input.difficulty!=4 &&
      input.difficulty!=5 
      ) {
      errors.difficulty = "Difficulty must be a number";
    } else if (!input.duration) {
      errors.duration = "Duration is required";
    } else if (input.season.length < 1) {
      errors.season = "You have to choose a season";
    } else if (input.countries.length < 1) {
      errors.countries = "You have to choose a country";
    }else if (errors.name || errors.difficulty) {
      setActive(false);
    }else if (!errors.name || !errors.difficulty) {
      setActive(true);
    }

    return errors;
  }

  return (
    <div className={styles.form_container}>
      <button className={styles.to_home}>
        <Link className={styles.home_linl} to="/home">
          HOME
        </Link>
      </button>
      <form
        className={styles.form_head}
        onSubmit={(event) => handleSubmit(event)}
      >
        <h1>Create a new activity</h1>
        <label>Name</label>
        <input
          className={styles.input_name}
          type="text"
          placeholder="Name your activity"
          value={input.name}
          name="name"
          onChange={(event) => handlerChange(event)}
        />
        {errors.name && <p className="error">{errors.name}</p>}
        <label>Difficulty</label>
        <select
          name="difficulty"
          onChange={(event) => handlerSelectDifficulty(event)}
        >
          {difficulties.map((diff) => (
            <option value={Number(diff)} key={diff}>
              {diff}
            </option>
          ))}
        </select>
        {errors.difficulty && <p className="error">{errors.difficulty}</p>}
        <label>Duration</label>
        <input
          type="time"
          min="00:00"
          max="24:00"
          value={input.duration}
          name="duration"
          onChange={(event) => handlerChange(event)}
        />
        {errors.duration && <p className="error">{errors.duration}</p>}
        <label>Season</label>
        <select name="season" onChange={(event) => handlerSelectSeason(event)}>
          {seasons.map((season) => (
            <option value={
              season == "--"
                  ? input.season.length < 1
                    ? "Summer"
                    : input.season[0]
                  : season
            } key={season}>
              {season}
            </option>
          ))}
        </select>
        {input.season.map((season) => (
          <div key={season}>
            <p>{season}</p>
            <button value={season} onClick={() => handleDeleteSeason(season)}>
              x
            </button>
          </div>
        ))}
        {errors.season && <p className="error">{errors.season}</p>}
        <label>Countries</label>
        <select
          name="countries"
          onChange={(event) => handlerSelectCountries(event)}
        >
          {sortedCountries.map((country) => (
            <option
              value={
                country.name == "--"
                  ? input.countries.length < 1
                    ? "Argentina"
                    : input.countries[0]
                  : country.name
              }
              key={country.id}
            >
              {country.name}
            </option>
          ))}
        </select>
        {input.countries.map((country) => (
          <div key={country}>
            <p>{country}</p>
            <button
              value={country}
              onClick={() => handleDeleteCountry(country)}
            >
              x
            </button>
          </div>
        ))}
        {errors.countries && <p className="error">{errors.countries}</p>}
         <button className={styles.create_button} type="submit" disabled={!active}> Create Activity </button>
      </form>
    </div>
  );
}

export default createActivity;