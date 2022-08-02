import DP1 from './Images/femaleDP.jpg';
import DP2 from './Images/maleDP1.png';
import DP3 from './Images/maleDP2.png';
import moment from 'moment';

const today = moment().format('DD MMM');

const dummy = [
  {
    userId: 1,
    image: DP1,
    name: 'Mahak Raju',
    email: 'mahak.raju@gmail.com',
    stepsWalked: 3547,
    stepsTarget: 4000,
    performedDate: '29 Jul',
    scheduledDate: '01 Aug',
    calorieIntake: 2547,
    calorieTarget: 2500,
    proteinIntake: 45,
    proteinTarget: 70,
    carbConsumed: 50,
    cardTarget: 70,
    fatConsumed: 30,
    fatTarget: 70,
    feedback: true,
  },
  {
    userId: 2,
    image: DP2,
    name: 'Apoorv Dwivedi',
    email: 'apoorv.dwivedi@gmail.com',
    stepsWalked: 2547,
    stepsTarget: 4000,
    performedDate: '29 Jul',
    scheduledDate: today,
    calorieIntake: 2547,
    calorieTarget: 2500,
    proteinIntake: 45,
    proteinTarget: 70,
    carbConsumed: 50,
    cardTarget: 70,
    fatConsumed: 30,
    fatTarget: 70,
    feedback: true,
  },
  {
    userId: 3,
    image: DP3,
    name: 'Ankit Goel',
    email: 'ankit.goel@gmail.com',
    stepsWalked: 2147,
    stepsTarget: 4000,
    performedDate: '29 Jul',
    scheduledDate: '31 Jul',
    calorieIntake: 2547,
    calorieTarget: 2500,
    proteinIntake: 45,
    proteinTarget: 70,
    carbConsumed: 50,
    carbTarget: 70,
    fatConsumed: 30,
    fatTarget: 70,
    feedback: false,
  },
];

export default dummy;
