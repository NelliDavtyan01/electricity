export default class HouseHold {
    constructor() {
        this.connections = [];
    }

    assign(electricity) {
        let own = this;

        function connected(electricity) {
            return own.connections.filter(item => {
                return item === electricity;
            }).length > 0;
        }

        if (!connected(electricity)) {
            this.connections.push(electricity);
            if (electricity instanceof HouseHold) {
                electricity.assign(this)
            }
        }

    }

    unAssign(electricity) {
        this.connections = this.connections.filter(item => item !== electricity);
        return true;
    }

    hasElectricity(source) {
        for (const connection of this.connections) {
            if (connection !== source && connection.hasElectricity(this)) {
                return true;
            }
        }
        return false;
    }
}