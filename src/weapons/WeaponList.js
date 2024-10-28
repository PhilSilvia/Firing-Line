import React from "react";
import WeaponProfile from "./WeaponProfile";
import WeaponView from "./WeaponView";

function WeaponList({ weapons, setWeapons }) {
    const staticWeapons = [
        new WeaponProfile("Boltgun", 3, 2, 4, 0, 1)
    ];
    const weaponList = staticWeapons.map((weapon) =>
        <WeaponView weapon={weapon} />
    );

    return (
        <div className="container border mx-2 my-2 border-primary">
            <h2>Weapons</h2>
            <table className="table table-bordered">
                <thead>
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