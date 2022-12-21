import moment from "moment";
import { motion, AnimatePresence } from "framer-motion";
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
      <div
        className={
          "fixed h-screen w-full top-0 pointer-events-none left-0 z-50 bg-gradient-to-t from-black/60 via-black/10"
        }
      ></div>

      <h1 className="text-xl text-white pb-10 text-center">
        I'm {weeksAlive} Weeks Alive
      </h1>
      <div className={"flex gap-4 flex-wrap items-center"}>
        {range(0, parseInt(weeksAlive)).map((week) => {
          const currentWeek = week + 1 === parseInt(weeksAlive);
          return currentWeek ? (
            <span
              className={"live animate-pulse"}
              data-week={`You are ${week + 1} weeks alive`}
            ></span>
          ) : (
            <span
              className={"filled"}
              data-week={`${week + 1} ${week + 1 === 1 ? "week" : "weeks"}`}
            ></span>
          );
        })}

        {range(parseInt(weeksAlive), minWeeksOfLife).map(() => {
          return <span className={"unfilled"}></span>;
        })}
      </div>
    </main>
  );
}
