import React from "react";

// Component the displays the view for a single target, along with a radio button to select the current target
function TargetView({ target, targetId, clickHandler }){
    // Returns the JSX for the individual target entry
    return (
        <tr>
            <input className="form-check-input me-1" type="radio" name="activeTargetRadio" value={targetId} id={targetId} onClick={clickHandler}/>
            <td>{target.name}</td>
            <td>{target.toughness}</td>
            <td>{target.save}+</td>
            <td>{target.wounds}</td>
            <td>{target.invul < 7? `${target.invul}+` : "-"}</td>
        </tr>
    );
}

export default TargetView;