import React from "react";

/**
 * Defines the homepage and its layout
 * @returns {JSX.Element}
 */
function Homepage() {
    return (
        <main>
            <h1>Welcome to the Firing Line!</h1>
            <div className="row">
                <div className="col-5">
                    <h2>Weapons</h2>
                </div>
                <div className="col-2">
                    <button>Fire!</button>
                </div>
                <div className="col-5">
                    <h2>Targets</h2>
                </div>
            </div>
        </main>
    )
}

export default Homepage;