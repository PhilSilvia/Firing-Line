const { roll, compareStrengthToToughness } = require("../utils/utils");
//const TargetProfile = require("./TargetProfile");

class WeaponProfile {
    constructor(name = "", quantity = 1, accuracy = 4, attacks = 2, strength = 4, ap = 0, damage = 1) {
        this.name = name;
        this.quantity = quantity;
        this.accuracy = accuracy;
        this.attacks = attacks;
        this.strength = strength;
        this.AP = ap;
        this.damage = damage;
    }

    shootAt(target){
        const chanceToWound = compareStrengthToToughness(this.strength, target.toughness);
        const hitRolls = [];
        const woundRolls = [];
        const saveRolls = [];
        let chanceToSave = target.save - this.AP;
        chanceToSave = chanceToSave < target.invul ? chanceToSave : target.invul;
        let woundsInflicted = 0;
        let hitRoll = 0, woundRoll = 0, saveRoll = 0;
        let hits = 0, wounds = 0, saves = 0;
        console.log(`Chance to wound is ${chanceToWound}+ and modified save is ${chanceToSave}+`);
        // For each attack
        for (let i = 0; i < this.attacks*this.quantity; i++){
            hitRoll = roll();
            woundRoll = roll();
            saveRoll = roll();
            console.log(`Shot #${i+1}: `)
            console.log(hitRoll, woundRoll, saveRoll);
            // Did we hit?
            hitRolls.push(hitRoll);
            if (hitRoll >= this.accuracy){
                hits++;
                // Did we wound?
                console.log("hit and ")
                woundRolls.push(woundRoll);
                if (woundRoll >= chanceToWound){
                    wounds++;
                    // Did the target save?
                    console.log("wounded, ");
                    saveRolls.push(saveRoll);
                    if (saveRoll < chanceToSave){
                        woundsInflicted++;
                        console.log("no save!\n");
                    } else {
                        saves++;
                        console.log("but saved.\n");
                    }
                } else {
                    console.log("failed to wound.\n");
                }
            } else {
                console.log("missed.\n");
            }
        }
        const woundPerKill = Math.ceil(target.wounds / this.damage);
        const kills = Math.floor(woundsInflicted / woundPerKill);
        const leftover = (woundsInflicted % woundPerKill) * this.damage;
        const damagedTarget = leftover > 0 ? target.wounds - leftover : 0;
        return {
            hitRolls, 
            hits,
            woundRolls, 
            wounds,
            saveRolls,
            saves, 
            kills, 
            chanceToWound,
            chanceToSave,
            damagedTarget
        };
    }
}

/*const boltgun8 = new WeaponProfile("eight Boltguns", 3, 16, 4, 0, 1);
const boltrifle8 = new WeaponProfile("eight Bolt Rifles", 3, 16, 4, -1, 1);
const meltagun2 = new WeaponProfile("two Meltaguns", 3, 2, 9, -4, 4);
const overchargePlasma2 = new WeaponProfile("two overcharged Plasma Rifles", 3, 4, 8, -3, 2);
const spaceMarine = new TargetProfile("Space Marine", 4, 3, 2);
const terminator = new TargetProfile("Terminator", 5, 2, 3, 4);
const termagant = new TargetProfile("Termagant", 3, 5, 1);

const weapon = boltrifle8;
const target = termagant;
const results = weapon.shootAt(target);
console.log(`After firing ${weapon.name} at a unit of ${target.name}s,\n we got ${results.kills} kills${results.damagedTarget > 0 ? ` and one ${target.name} is left with ${results.damagedTarget} wounds` : ""}`);*/

module.exports = WeaponProfile;