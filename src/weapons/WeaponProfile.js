const { roll, compareStrengthToToughness } = require("./utils");
//const Target = require("./Target");

class WeaponProfile {
    constructor(name = "", accuracy = 4, attacks = 2, strength = 4, ap = 0, damage = 1) {
        this.name = name;
        this.accuracy = accuracy;
        this.attacks = attacks;
        this.strength = strength;
        this.AP = ap;
        this.damage = damage;
    }

    shootAt(target){
        const chanceToWound = compareStrengthToToughness(this.strength, target.toughness);
        let chanceToSave = target.save - this.AP;
        chanceToSave = chanceToSave < target.invul ? chanceToSave : target.invul;
        let wounds = 0;
        let hitRoll = 0, woundRoll = 0, saveRoll = 0;
        console.log(`Chance to wound is ${chanceToWound}+ and modified save is ${chanceToSave}+`);
        // For each attack
        for (let i = 0; i < this.attacks; i++){

            hitRoll = roll();
            woundRoll = roll();
            saveRoll = roll();
            console.log(`Shot #${i+1}: `)
            console.log(hitRoll, woundRoll, saveRoll);
            // Did we hit?
            if (hitRoll >= this.accuracy){
                // Did we wound?
                console.log("hit and ")
                if (woundRoll >= chanceToWound){
                    // Did the target save?
                    console.log("wounded, ");
                    if (saveRoll < chanceToSave){
                        wounds++;
                        console.log("no save!\n");
                    } else {
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
        const kills = Math.floor(wounds / woundPerKill);
        const leftover = (wounds % woundPerKill) * this.damage;
        const damagedTarget = leftover > 0 ? target.wounds - leftover : 0;
        return {kills, damagedTarget};
    }
}

/*const boltgun8 = new WeaponProfile("eight Boltguns", 3, 16, 4, 0, 1);
const boltrifle8 = new WeaponProfile("eight Bolt Rifles", 3, 16, 4, -1, 1);
const meltagun2 = new WeaponProfile("two Meltaguns", 3, 2, 9, -4, 4);
const overchargePlasma2 = new WeaponProfile("two overcharged Plasma Rifles", 3, 4, 8, -3, 2);
const spaceMarine = new Target("Space Marine", 4, 3, 2);
const terminator = new Target("Terminator", 5, 2, 3, 4);
const termagant = new Target("Termagant", 3, 5, 1);

const weapon = boltrifle8;
const target = termagant;
const results = weapon.shootAt(target);
console.log(`After firing ${weapon.name} at a unit of ${target.name}s,\n we got ${results.kills} kills${results.damagedTarget > 0 ? ` and one ${target.name} is left with ${results.damagedTarget} wounds` : ""}`);*/

module.exports = WeaponProfile;