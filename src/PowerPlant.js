export default class PowerPlant {

    constructor(){
        this.alive = true;
    }

    hasElectricity() {
        return this.alive;
    }

    kill() {
        this.alive = false;
    }

    restore() {
        this.alive = true;
    }
}
