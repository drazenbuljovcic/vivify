class Appointment {
  constructor(timestamp = new Date()) {
    this.timestamp = timestamp;
  }

  resolve() {
    this.resolveTimestamp = new Date();
  }
}

class BloodPressureAppointment extends Appointment {
  constructor(timestamp) {
    super(timestamp);

    this.highest;
    this.lowest;
    this.puls;
  }

  resolve({ highest, lowest, puls}) {
    super.resolve();

    this.highest = highest;
    this.lowest = lowest;
    this.puls = puls;
  }

  toString() {
    return 'Merenje krvnog pritiska';
  }
}

class BloodSugarLevelAppointment extends Appointment {
  constructor(timestamp) {
    super(timestamp);

    this.value;
    this.lastMealTime;
  }

  resolve({ value, lastMealTime = new Date() }) {
    super.resolve();

    this.value = value;
    this.lastMealTime = lastMealTime;
  }
  toString() {
    return 'Merenje nivoa šećera u krvi';
  }
}

class CholesterolLevelAppointment extends Appointment {
  constructor(timestamp) {
    super(timestamp);
    
    this.value;
    this.lastMealTime;
  }

  toString() {
    return 'Merenje nivoa holesterola u krvi';
  }
}

module.exports = {
  Appointment,
  BloodPressureAppointment,
  BloodSugarLevelAppointment,
  CholesterolLevelAppointment,
};
