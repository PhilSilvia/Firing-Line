import React from "react";
import { useState } from "react";
import Results from "./results";
import WeaponList from "../weapons/WeaponList";
import TargetList from "../targets/TargetList";

/**
 * Defines the homepage and its layout
 * @returns {JSX.Element}
 */
function Homepage() {
    const [ weapons, setWeapons ] = useState([]);
    const [ targets, setTargets ] = useState([]);
    const [ results, setResults ] = useState([]);

    const fireButtonHandler = (e) => {
        e.preventDefault();
    };

    return (
        <main>
            <h1>Welcome to the Firing Line!</h1>
            <div className="row">
                <div className="col-5">
                    <WeaponList weapons={weapons} setWeapons={setWeapons} />   
                </div>
                <div className="col-1">
                    <div className="row">
                        <img src="../../bolter.png" alt="A boltgun facing right" />
                    </div>
                    <div className="row">
                        <button onClick={fireButtonHandler}>Fire!</button>
                    </div>
                </div>
                <div className="col-5">
                    <TargetList targets={targets} setTargets={setTargets} />   
                </div>
            </div>
            <div className="row">
                <div className="container border mx-2 my-2 border-primary">
                    {results.length > 0? <Results results={results} /> : <></>}
                </div>
            </div>
        </main>
    )
}

export default Homepage;