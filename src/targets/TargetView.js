import React from "react";

// Component the displays the view for a single target, along with a radio button to select the current target
function TargetView(){
    // Returns the JSX for the individual target entry
    return (
        <tr>
            <td>
                <input type="text" className="form-control" name="name" id="name"></input>
            </td>
            <td>
                <input type="text" className="form-control" name="toughness" id="toughness"></input>
            </td>
            <td>
                <select className="form-select" id="save" name="save">
                    <option value="2">2+</option>
                    <option value="3">3+</option>
                    <option value="4">4+</option>
                    <option value="5">5+</option>
                    <option value="6">6+</option>
                    <option value="7">7+</option>
                </select>
            </td>
            <td>
                <input type="text" className="form-control" name="wounds" id="wounds"></input>
            </td>
            <td>
                <select className="form-select" id="invul" name="invul">
                    <option value="7">-</option>
                    <option value="2">2+</option>
                    <option value="3">3+</option>
                    <option value="4">4+</option>
                    <option value="5">5+</option>
                    <option value="6">6+</option>
                </select>
            </td>
        </tr>
    );
}

export default TargetView;