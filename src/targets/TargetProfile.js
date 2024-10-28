class TargetProfile {
    constructor(name = "", toughness = 4, save = 3, wounds = 2, invul = 7){
        this.name = name;
        this.toughness = toughness;
        this.save = save;
        this.wounds = wounds;
        this.invul = invul;
    }
}

module.exports = TargetProfile;