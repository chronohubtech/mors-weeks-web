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
    <main className={"container mx-auto max-w-[700px] py-10"}>
      <h1 className="text-xl text-white pb-10 text-center">I'm {weeksAlive} Weeks Alive</h1>
      <div className={"flex gap-4 flex-wrap"}>
        {range(1, minWeeksOfLife).map((week) => {
          const weeksFilled = weeksAliveArray[week] !== undefined;

          return weeksFilled ? <span className={"filled"}></span> : null;
        })}

        {range(parseInt(weeksAlive), minWeeksOfLife).map((week) => {
          const weeksFilled = weeksAliveArray[week] !== undefined;

          return !weeksFilled ? <span className={"unfilled"}></span> : null;
        })}
      </div>
    </main>
  );
}
