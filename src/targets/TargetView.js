import React from "react";

function TargetView({ target }){
    return (
        <tr>
            <td>{target.name}</td>
            <td>{target.toughness}</td>
            <td>{target.save}+</td>
            <td>{target.wounds}</td>
            <td>{target.invul < 7? `${target.invul}+` : "-"}</td>
        </tr>
    );
}

export default TargetView;