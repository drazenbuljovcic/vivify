const Person = require('./person');
const Doctor = require('./doctor');

const logger = require('./logger');

class Patient extends Person {
  constructor(firstName, lastName, jmbg, historyNumber, chosenDoctor) {
    super(firstName, lastName);

    this.idNumber = jmbg;
    this.historyNumber = historyNumber;
    this.appointmentList = [];

    this.chosenDoctor = chosenDoctor instanceof Doctor ? chosenDoctor : null;
    
    logger.logPatientCreation(this);
  }

  chooseDoctor(doctor) {
    if(this.chosenDoctor) { return; }
    if(!(doctor instanceof Doctor)) { return; }

    this.chosenDoctor = doctor;
    doctor.patientList.push(this);
  }
}

module.exports = Patient;