import React from "react";

// Component that displays the statistics for a single weapon, along with its radio button for selecting the current weapon
function WeaponView(){
    // Returns the JSX for the weapons table entry
    return (
        <tr>
            <td>
                <input type="text" className="form-control" id="name" name="name"></input>
                </td>
            <td>
                <input type="text" className="form-control" id="quantity" name="quantity"></input>
                </td>
            <td>
                <select className="form-select" id="accuracy" name="accuracy">
                    <option value="2">2+</option>
                    <option value="3">3+</option>
                    <option value="4">4+</option>
                    <option value="5">5+</option>
                    <option value="6">6+</option>
                </select>
            </td>
            <td>
                <input type="text" className="form-control" id="attacks" name="attacks"></input>
                </td>
            <td>
                <input type="text" className="form-control" id="strength" name="strength"></input>
                </td>
            <td>
                <select className="form-select" id="AP" name="AP">
                    <option value="0">0</option>
                    <option value="1">-1</option>
                    <option value="2">-2</option>
                    <option value="3">-3</option>
                    <option value="4">-4</option>
                </select>
            </td>
            <td>
                <select className="form-select" id="damage" name="damage">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                </select>
            </td>
        </tr>
    );
}

export default WeaponView;