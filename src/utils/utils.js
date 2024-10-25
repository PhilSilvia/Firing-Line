function roll() {
    return Math.floor(Math.random() * 6) + 1;
}

function compareStrengthToToughness(strength, toughness) {
    if (toughness * 2 <= strength)
        return 2;
    if (toughness < strength)
        return 3;
    if (toughness === strength)
        return 4;
    if (toughness >= strength * 2)
        return 6
    return 5;
}

module.exports = { roll, compareStrengthToToughness };