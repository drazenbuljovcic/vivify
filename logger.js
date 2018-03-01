const fs = require('fs');
const path = require('path');

class Logger {
  constructor() {
    this.path = path.join(__dirname, 'logs/log.txt');

    fs.truncateSync(this.path, 0);
  }
  
  get dateTimeString() {
    const date = new Date();
    return `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`;
  }

  logPatientCreation(patient) {
    const content = `[${this.dateTimeString}] Kreiran pacijent ${patient.firstName}\n`

    this.appendContentToLogFile(content);
  }

  logDoctorCreation(doctor) {
    const content = `[${this.dateTimeString}] Kreiran doktor ${doctor.firstName}\n`;

    this.appendContentToLogFile(content);
  }

  logPatientChoseDoctor(patient, doctor) {
    const content = `[${this.dateTimeString}] Pacijent ${patient.firstName} odabrao doktora ${doctor.firstName}\n`;
    
    this.appendContentToLogFile(content);
  }

  logAppointmentAssignment(appointment, patient, doctor) {
    const content = `[${this.dateTimeString}] Doktor ${doctor.firstName} zakazuje pregled za ${appointment.toString().toLowerCase()} za pacijenta ${patient.firstName}\n`;
    
    this.appendContentToLogFile(content);
  }
  
  logBloodPressureAppointmentResolve(appointment, patient, doctor) {
    const content = `[${this.dateTimeString}] Pacijent ${patient.firstName} obavlja laboratorijski pregled za ${appointment.toString().toLowerCase()} kod doktora ${doctor.firstName}
      Najviša vrednost: ${appointment.highest}
      Najniža vrednost: ${appointment.lowest}
      Puls: ${appointment.puls}
    \n`;
    
    this.appendContentToLogFile(content);
  }

  logBloodSugarAppointmentResolve(appointment, patient, doctor) {
    const content = `[${this.dateTimeString}] Pacijent ${patient.firstName} obavlja laboratorijski pregled za ${appointment.toString().toLowerCase()} kod doktora ${doctor.firstName}
    \tVrednost: ${appointment.value} mmol/l
    \n`;
    
    this.appendContentToLogFile(content); 
  }

  appendContentToLogFile(content = '') {
    if(typeof content !== 'string') { return; }
    
    try {
      fs.appendFileSync(this.path, content, 'utf8')
    } catch (error) {
      console.trace(error.stack);
    }
  }
}

module.exports = new Logger();
