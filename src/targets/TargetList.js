import React from "react";
import TargetView from "./TargetView";

// Component that displays the current list of available targets
function TargetList({ targets, setTargets, fireButtonHandler }) {

    const addTargetHandler = (e) => {
        e.preventDefault();
        setTargets([
            ...targets,
            <TargetView />
        ])
    }

    // Returns the JSX for the component, which is a form with a table of TargetViews
    return (
        <div className="container border mx-2 my-2 border-primary">
            <h2>Targets</h2>
            <form onSubmit={fireButtonHandler}>
                <table className="table table-bordered table-striped">
                    <thead>
                        <th>Name</th>
                        <th style={{width: "10%"}}>T</th>
                        <th style={{width: "15%"}}>Sv</th>
                        <th style={{width: "10%"}}>W</th>
                        <th style={{width: "15%"}}>Invul</th>
                    </thead>
                    <tbody>
                        {targets}
                        <button className="btn btn-primary" onClick={addTargetHandler}>New</button>
                    </tbody>
                </table>
            </form>
        </div>
    );
}

export default TargetList;