import React from "react";

// Quick dice code lookup table
const dice = {
    1: 0x2680,
    2: 0x2681,
    3: 0x2682,
    4: 0x2683,
    5: 0x2684,
    6: 0x2685,
};

// Helper function to create a string of skulls, one per kill
function makeSkullCount(kills){
    // Initialize an empty array
    const killCount = [];
    // Add a skull to the array for each kill
    for (let i = 0; i < kills; i++)
        killCount.push(String.fromCharCode(0xD83D, 0xDC80));
    // Joins the array of skulls together into a contiguous string
    const killString = killCount.join("");
    // Return the string
    return killString;
}

// Helper function that makes a string of dice for the rolls generated
function makeDice(rolls){
    // Initialize an empty array
    const diceList = [];
    // Add the appropriate die to the array for each roll
    for (let i = 0; i < rolls.length; i++)
        diceList.push(String.fromCharCode(dice[rolls[i]]));
    // Join the array into a contigueous string
    const diceString = diceList.join("");
    // Return the string
    return diceString;
}

// This component displays the results of the firing attempt
function ResultsView({ results }) {
    // Create a string of skulls for the kills scored
    const killString = makeSkullCount(results.kills);
    // Create a string describing any leftover damage, if any
    const leftover = results.damagedTarget > 0 ? ` and one is left with ${results.damagedTarget} wound${results.damagedTarget > 1 ? 's' : ''}` : "";
    // Make a string of dice rolls for the hits, wounds, and saves
    const hitDice = makeDice(results.hitRolls);
    const woundDice = makeDice(results.woundRolls);
    const saveDice = makeDice(results.saveRolls);

    // Return the JSX for the component
    return (
        <div className="container border mx-2 my-2 border-primary">
            <div className="card">
                <div className="card-body">
                    <h2 className="card-title">Results</h2>
                    <h4 className="card-subtitle">{killString}</h4>
                    <p className="card-text">You have killed {results.kills} {leftover}</p>
                </div>
            </div>
            <div className="card">
                <div className="card-body">
                    <h4 className="card-title">Chances</h4>
                    <p className="card-text">Chance to wound: {results.chanceToWound}+</p>
                    <p className="card-text">Chance to save: {results.chanceToSave}+</p>
                </div>
            </div>
            <div className="card">
                <div className="card-body">
                    <h4 className="card-title">Rolls</h4>
                    <h5 className="card-subtitle">Hits: {results.hits}</h5>
                    <p className="card-text">{hitDice}</p>
                    <h5 className="card-subtitle">Wounds: {results.wounds}</h5>
                    <p className="card-text">{woundDice}</p>
                    <h5 className="card-subtitle">Saves: {results.saves}</h5>
                    <p className="card-text">{saveDice}</p>
                </div>
            </div>
        </div>
    );
}

export default ResultsView;