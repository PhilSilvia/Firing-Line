import React from "react";
import { useState } from "react";
import TargetProfile from "./TargetProfile";
import TargetView from "./TargetView";

function TargetList({ targets, setTargets }) {
    const staticTargets = [
        new TargetProfile("Space Marine", 4, 3, 2)
    ];
    const targetList = staticTargets.map((target) => 
        <TargetView target={target} />
    );

    return (
        <div className="container border mx-2 my-2 border-primary">
            <h2>Targets</h2>
            <table className="table table-bordered">
                <thead>
                    <th>Name</th>
                    <th>T</th>
                    <th>Sv</th>
                    <th>W</th>
                    <th>Invul</th>
                </thead>
                <tbody>
                    {targetList}
                </tbody>
            </table>
        </div>
    );
}

export default TargetList;