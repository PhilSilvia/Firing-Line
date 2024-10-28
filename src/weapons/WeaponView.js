import React from "react";

function WeaponView({ weapon }){
    return (
        <tr>
            <td>{weapon.name}</td>
            <td>{weapon.accuracy}+</td>
            <td>{weapon.attacks}</td>
            <td>{weapon.strength}</td>
            <td>{weapon.AP}</td>
            <td>{weapon.damage}</td>
        </tr>
    );
}

export default WeaponView;