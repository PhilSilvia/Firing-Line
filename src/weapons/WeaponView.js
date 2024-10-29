import React from "react";

// Component that displays the statistics for a single weapon, along with its radio button for selecting the current weapon
function WeaponView({ weapon, weaponId, clickHandler }){
    // Returns the JSX for the weapons table entry
    return (
        <tr>
            <input className="form-check-input me-1" type="radio" name="activeWeaponRadio" value={weaponId} id={weaponId} onClick={clickHandler}/>
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