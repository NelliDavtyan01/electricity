import HouseHold from './HouseHold.js'
import PowerPlant from "./PowerPlant.js";

/**
 * This class is just a facade for your implementation, the tests below are using the `World` class only.
 * Feel free to add the data and behavior, but don't change the public interface.
 */

export class World {

  constructor() {}

  createPowerPlant() {
    return new PowerPlant();
  }

  createHousehold() {
    return new HouseHold();
  }

  connectHouseholdToPowerPlant(household, powerPlant) {
    household.assign(powerPlant)
  }

  connectHouseholdToHousehold(household1, household2) {
    household1.assign(household2)
  }

  disconnectHouseholdFromPowerPlant(household, powerPlant) {
    household.unAssign(powerPlant)
  }

  killPowerPlant(powerPlant) {
    powerPlant.kill()
  }

  repairPowerPlant(powerPlant) {
    powerPlant.restore()
  }

  householdHasElectricity(household) {
    return household.hasElectricity();
  }
}