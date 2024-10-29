import React from "react";
import WeaponProfile from "./WeaponProfile";
import WeaponView from "./WeaponView";

// JSX Component that displays the list of available weapons
function WeaponList({ weapons, setWeapons, weaponClickHandler, weaponChangeHandler }) {
    // Create an array of WeaponView components from the array of weapons
    const weaponList = weapons.map((weapon, index) =>
        <WeaponView weapon={weapon} weaponId={index} clickHandler={weaponClickHandler} changeHandler={weaponChangeHandler} />
    );

    // Returns the JSX for the component, which is a table featuring the WeaponView for each weapon in the list
    return (
        <div className="container border mx-2 my-2 border-primary">
            <h2>Weapons</h2>
            <table className="table table-bordered">
                <thead>
                    <th></th>
                    <th>Name</th>
                    <th>Number</th>
                    <th>WS/BS</th>
                    <th>A</th>
                    <th>S</th>
                    <th>AP</th>
                    <th>D</th>
                </thead>
                <tbody>
                    {weaponList}
                </tbody>
            </table>
        </div>
    );
}

export default WeaponList;