import moment from "moment";
import { motion, useScroll } from "framer-motion";
import { range } from "range";

export default function App() {
  const { scrollYProgress } = useScroll();

  const birthDate = new Date("September 9, 2009");
  const dateToday = new Date();

  const birthDateMoment = moment(birthDate);
  const dateTodayMoment = moment(dateToday);

  const intervalTime = moment.duration(dateTodayMoment.diff(birthDateMoment));

  const weeksAlive = intervalTime.asWeeks().toFixed(0);
  const minWeeksOfLife = 4500;
  const weeksLeftInYourLife = minWeeksOfLife - weeksAlive;

  const weeksInYear = 52;
  const weeksInYearsArray = range(weeksInYear, minWeeksOfLife, weeksInYear);

  return (
    <main className={"container mx-auto max-w-[1200px] py-10"}>
      <motion.div
        style={{ scaleX: scrollYProgress }}
        transition={{ duration: 1 }}
        className={
          "fixed top-0 left-0 right-0 origin-[0%] w-full h-1 bg-green-500 glow z-50 rounded-md"
        }
      />

      <div className="fixed h-screen w-full top-0 pointer-events-none left-0 z-50 bg-gradient-to-t from-black/60 via-black/10"></div>

      <h1 className="text-xl text-white pb-10 text-center">
        You're {weeksAlive} weeks alive, {weeksLeftInYourLife} weeks left.
      </h1>
      <div className={"flex gap-4 flex-wrap items-center"}>
        {range(0, parseInt(weeksAlive)).map((week) => {
          // week = week + 1;
          const currentWeek = week + 1 === parseInt(weeksAlive);
          const weeksInYear = 52;

          if (currentWeek) {
            return (
              <span
                className={"live animate-pulse"}
                data-week={`You are ${
                  week + 1
                } weeks alive, you have ${weeksLeftInYourLife} weeks left.`}
              ></span>
            );
          } else if (weeksInYearsArray.includes(week)) {
            const yearsOld = week / weeksInYear;

            return (
              <span
                className={"filled !bg-green-500/70"}
                data-week={`You are ${yearsOld} ${
                  yearsOld === 1 ? "year" : "years"
                } old here, ${week + 1} weeks`}
              ></span>
            );
          } else {
            return (
              <span
                className={"filled"}
                data-week={`${week + 1} ${
                  week + 1 === 1
                    ? "week, this is your first week on Earth."
                    : "weeks"
                }`}
              ></span>
            );
          }
        })}

        {range(parseInt(weeksAlive), minWeeksOfLife).map(() => {
          return <span className={"unfilled"}></span>;
        })}
      </div>
    </main>
  );
}
