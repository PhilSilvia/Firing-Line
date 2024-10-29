import React from "react";
import TargetProfile from "./TargetProfile";
import TargetView from "./TargetView";

// Component that displays the current list of available targets
function TargetList({ targets, setTargets, targetClickHandler }) {
    // Currently using a static list of targets for testing purposes.
    // Later this will be populated by the user's input
    const staticTargets = [
        new TargetProfile("Space Marine", 4, 3, 2)
    ];
    // Creates an array of TargetView components from the array of targets
    const targetList = staticTargets.map((target, index) => 
        <TargetView target={target} targetId={index} clickHandler={targetClickHandler}/>
    );

    // Returns the JSX for the component, which is a table populated with TargetViews
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