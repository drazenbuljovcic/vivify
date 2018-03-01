const Patient = require('./patient');
const Doctor = require('./doctor');
const { BloodPressureAppointment, BloodSugarLevelAppointment } = require('./lab-appointment-types');

const patient1 = new Patient('Dragan');
const doctor1 = new Doctor('Milan');

patient1.chooseDoctor(doctor1);

doctor1.appointPatient(patient1, new BloodPressureAppointment());
doctor1.appointPatient(patient1, new BloodSugarLevelAppointment());

doctor1.resolveAppointment(patient1, BloodSugarLevelAppointment);
doctor1.resolveAppointment(patient1, BloodPressureAppointment);