const Person = require('./person');
const { Appointment, BloodPressureAppointment, BloodSugarLevelAppointment } = require('./lab-appointment-types');

const logger = require('./logger');

class Doctor extends Person {
  constructor(firstName, lastName, specialty, patients = []) {
    super(firstName, lastName);
    
    this.specialty = specialty;
    this.patientList = patients;

    logger.logDoctorCreation(this);
  }

  appointPatient(patient, appointment) {
    if (!(appointment instanceof Appointment)) { return; }

    if (this.patientList.includes(patient)) {
      patient.appointmentList.push(appointment);

      logger.logAppointmentAssignment(appointment, patient, this);
    }
  }

  resolveAppointment(patient, typeOfAppointment) {
    if (!(typeOfAppointment.prototype instanceof Appointment)) { return; }
    const appointment = patient.appointmentList.find(appointment => appointment instanceof typeOfAppointment);
    
    const appointmentIndex = patient.appointmentList.findIndex(appointment => appointment instanceof typeOfAppointment);
    patient.appointmentList = patient.appointmentList
      .slice(0, appointmentIndex)
      .concat(patient.appointmentList.slice(appointmentIndex + 1));

    switch (typeOfAppointment.prototype) {
      case BloodPressureAppointment.prototype: {
        this.resolveBloodPressureAppointment(patient, appointment);
        break;
      }
      case BloodSugarLevelAppointment.prototype: {
        this.resolveBloodSugarLevelAppointment(patient, appointment);
        break;
      }
    }
  }

  resolveBloodPressureAppointment(patient, appointment) {
    appointment.resolve({
      highest: 120,
      lowest: 80,
      puls: 70,
    });

    logger.logBloodPressureAppointmentResolve(appointment, patient, this);
  }

  resolveBloodSugarLevelAppointment(patient, appointment) {
    appointment.resolve({
      value: 4,
    });

    logger.logBloodSugarAppointmentResolve(appointment, patient, this);
  }
}

module.exports = Doctor;