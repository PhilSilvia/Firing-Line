import React from "react";
import WeaponProfile from "./WeaponProfile";
import WeaponView from "./WeaponView";

// JSX Component that displays the list of available weapons
function WeaponList({ weapons, setWeapons, weaponClickHandler }) {
    // Static set of weapons for initial testing purposes. 
    // This will later be populated by the user's input
    const staticWeapons = [
        new WeaponProfile("Boltgun", 3, 2, 4, 0, 1),
        new WeaponProfile("Shoota", 5, 2, 4, 0, 1)
    ];
    // Create an array of WeaponView components from the array of weapons
    //const weaponList = staticWeapons.map((weapon, index) =>
    const weaponList = weapons.map((weapon, index) =>
        <WeaponView weapon={weapon} weaponId={index} clickHandler={weaponClickHandler}/>
    );

    // Returns the JSX for the component, which is a table featuring the WeaponView for each weapon in the list
    return (
        <div className="container border mx-2 my-2 border-primary">
            <h2>Weapons</h2>
            <table className="table table-bordered">
                <thead>
                    <th></th>
                    <th>Name</th>
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