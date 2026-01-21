class UserControl {


    constructor(dataStart, dateEnd, pokeName, damageDoneTrainer, damageReceivedTrainer, image, shiny, caught)  {
        this.dataStart = dataStart;
        this.image = image;
        this.pokeName = pokeName;
        this.damageDoneTrainer = damageDoneTrainer;
        this.damageReceivedTrainer = damageReceivedTrainer;
        this.image = image;
        this.shiny = shiny;
        this.caught = caught;
    }

}

module.exports = UserControl;