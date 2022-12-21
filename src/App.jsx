import moment from "moment";
import { range } from "range";

const birthDate = new Date("July 26, 2002");
const dateToday = new Date();

const birthDateMoment = moment(birthDate);
const dateTodayMoment = moment(dateToday);

const intervalTime = moment.duration(dateTodayMoment.diff(birthDateMoment));

const weeksAlive = intervalTime.asWeeks().toFixed(0);
const minWeeksOfLife = 4500;
const weeksLeftInYourLife = minWeeksOfLife - weeksAlive;

const weeksAliveArray = range(1, weeksAlive);

export default function App() {
  return (
    <h1 className="text-3xl font-bold underline">{weeksAlive} weeks alive</h1>
  );
}
