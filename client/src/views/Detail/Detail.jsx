import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getDetail } from "../../redux/actions";
import styles from "../Detail/Detail.module.css";

function Detail() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const countryDetail = useSelector((state) => state.detail);

  useEffect(() => {
    dispatch(getDetail(id));
  }, [dispatch, id]);

  return (
    <div className={styles.detail_container}>
      <div>
        <button>
          <Link to="/home">HOME</Link>
        </button>
      </div>
      <div className={styles.right_wrap}>
        <div className={styles.data_div}>
          <h4>Name: {countryDetail.name}</h4>
          <div>Country code: {countryDetail.id}</div>
          <div>Continents: {countryDetail.continent}</div>
          <div>Capital: {countryDetail.capital}</div>
          <div>Subregion: {countryDetail.subregion && countryDetail.subregion}</div>
          <div>Area: {countryDetail.area && countryDetail.area} Km²</div>
          <div>Population: {countryDetail.population}</div>
        </div>          
        <div className={styles.activity_div}>
          <div>
            {" "}
            {countryDetail.Activities &&
              countryDetail.Activities.map((activity) => (
                <ul>
                  <h4 key={countryDetail.id}>{activity.name}</h4>
                  <div key={countryDetail.id}>
                    Difficulty: {activity.difficulty}
                  </div>
                  <div key={countryDetail.id}>
                    Duration: {activity.duration}{" "} (hr:min:sec)
                  </div>
                  <div key={countryDetail.id}>Season: {activity.season}</div>
                </ul>
              ))}
          </div>
        </div>
        <div className={styles.flag_div}>
          <img className={styles.flag_size} src={countryDetail.imgFlag} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Detail;