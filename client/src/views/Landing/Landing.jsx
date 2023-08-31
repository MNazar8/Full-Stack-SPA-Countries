import React from "react";
import styles from "./Landing.module.css";
import { NavLink } from "react-router-dom";

function Landing() {
  return (
    <div className={styles.container}>
      <div className={styles.one_half}>
        <a className={styles.circle}/>
        <h1>
          It's time to start <br />
          your adventure!
        </h1>
        <p className={styles.description}>
          If you want to look for new experiences <br />
          around the world stop wasting your time <br /> and find a
          country to visit in this web.
        </p>
        <NavLink to="/home" className={styles.start}>
          CLICK HERE
        </NavLink>
      </div>
      <div className={styles.second_half}>
        <div>
          <div className={styles.map}></div>
          <a className={styles.circle2}/>
        </div>
      </div>
    </div>
  );
}

export default Landing;
