import React from "react";
import { useState } from "react";
import Results from "./results";
import WeaponList from "../weapons/WeaponList";
import TargetList from "../targets/TargetList";
import ErrorAlert from "./ErrorAlert";

/**
 * Defines the homepage and its layout
 * @returns {JSX.Element}
 */
function Homepage() {
    // State variables to track out lists of weapons and targets
    const [ weapons, setWeapons ] = useState([]);
    const [ targets, setTargets ] = useState([]);
    // State variable to track the results of the most recent attack simulation
    const [ results, setResults ] = useState([]);
    // State variables to track the currently selected weapon and target
    const [ currentWeaponNumber, setCurrentWeaponNumber ] = useState(-1);
    const [ currentTargetNumber, setCurrentTargetNumber ] = useState(-1);
    // State variables to keep track of the most recent error, if any
    const [ error, setError ] = useState(null);

    // Event handler for when the 'Fire!' button is clicked to initiate a simulation
    const fireButtonHandler = (e) => {
        // Prevent the default action
        e.preventDefault();
        // Make sure we have a currently-selected weapon and target
        if (currentWeaponNumber < 0 || currentTargetNumber < 0){
            // Display an error if not weapons or targets are currently selected
            setError(new Error("Please select both a weapon and a target"));
        } 
        // If we're good, let's go!
        else {
            // Right now, we just clear the error
            setError(null);
        }
    };

    // Handler for when the radio buttons for the weapons are clicked, to track the currently selected weapon
    // Passed down to the components for the weapon list display
    const weaponClickHandler = (e) => {
        setCurrentWeaponNumber(e.target.value);
    }

    // Handler for when the radio buttons for the targets are clicked, to track the currently selected target
    // Passed down to the components for the target list display
    const targetClickHandler = (e) => {
        setCurrentTargetNumber(e.target.value);
    }

    // Returns the JSX for the home page component
    return (
        <main>
            <h1>Welcome to the Firing Line!</h1>
            <div className="row">
                <div className="col-5">
                    <WeaponList weapons={weapons} setWeapons={setWeapons} weaponClickHandler={weaponClickHandler} />   
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
                    <TargetList targets={targets} setTargets={setTargets} targetClickHandler={targetClickHandler}/>   
                </div>
            </div>
            <div className="row">
                {error? <ErrorAlert error={error}/> : <></>}
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