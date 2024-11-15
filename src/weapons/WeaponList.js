import React from "react";
import WeaponView from "./WeaponView";

// JSX Component that displays the list of available weapons
function WeaponList({ weapons, setWeapons, fireButtonHandler }) {
    // Create an array of WeaponView components from the array of weapons
    /*const weaponList = weapons.map((weapon, index) =>
        <WeaponView weapon={weapon} weaponId={index} clickHandler={weaponClickHandler} changeHandler={weaponChangeHandler} />
    );*/

    const addNewWeaponHandler = (e) => {
        e.preventDefault();
        setWeapons([
            ...weapons,
            <WeaponView />
        ]);
    }; 

    // Returns the JSX for the component, which is a table featuring the WeaponView for each weapon in the list
    return (
        <div className="container border mx-2 my-2 border-primary">
            <h2>Weapons</h2>
            <form onSubmit={fireButtonHandler}>
                <table className="table table-bordered table-striped table-responsive">
                    <thead>
                        <th>Name</th>
                        <th style={{width: "10%"}}>Qty</th>
                        <th style={{width: "15%"}}>WS / BS</th>
                        <th style={{width: "10%"}}>A</th>
                        <th style={{width: "10%"}}>S</th>
                        <th style={{width: "15%"}}>AP</th>
                        <th style={{width: "15%"}}>D</th>
                    </thead>
                    <tbody>
                        {weapons}
                    </tbody>
                </table>
                <button className="btn btn-primary" onClick={addNewWeaponHandler}>New</button>
            </form>
        </div>
    );
}

export default WeaponList;