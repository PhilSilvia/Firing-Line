import React from "react";

const dice = {
    1: 0x2680,
    2: 0x2681,
    3: 0x2682,
    4: 0x2683,
    5: 0x2684,
    6: 0x2685,
};

function makeSkullCount(kills){
    const killCount = [];
    for (let i = 0; i < 10; i++)//kills; i++)
        killCount.push(String.fromCharCode(0xD83D, 0xDC80));
    const killString = killCount.join("");
    return killString;
}

function makeDice(rolls){
    const diceList = [];
    for (let i = 0; i < rolls.length; i++)
        diceList.push(String.fromCharCode(dice[rolls[i]]));
    const diceString = diceList.join("");
    return diceString;
}

function ResultsView({ results }) {
    const killString = makeSkullCount(results.kills);
    const leftover = results.damagedTarget > 0 ? ` and one is left with ${results.damagedTarget} wound${results.damagedTarget > 1 ? 's' : ''}` : "";
    const hits = makeDice(results.hitRolls);
    const wounds = makeDice(results.woundRolls);
    const saves = makeDice(results.saveRolls);
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
                    <h5 className="card-subtitle">Hits: {hits.length}</h5>
                    <p className="card-text">{hits}</p>
                    <h5 className="card-subtitle">Wounds: {wounds.length}</h5>
                    <p className="card-text">{wounds}</p>
                    <h5 className="card-subtitle">Saves: {saves.length}</h5>
                    <p className="card-text">{saves}</p>
                </div>
            </div>
        </div>
    );
}

export default ResultsView;