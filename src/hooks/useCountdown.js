import { useEffect, useState } from "react";
import moment from "moment";

const countdownSchema = {
  years: 0,
  months: 0,
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0,
};

const useCountdown = (date = countdownSchema) => {
  const [state, setState] = useState(countdownSchema);
  useEffect(() => {
    let dur = moment.duration({
      years: date.years,
      months: date.months,
      days: date.days,
      hours: date.hours,
      minutes: date.minutes,
      seconds: date.seconds,
    });
    let timestamp = new Date();
    let interval = 1;
    let timer = setInterval(function () {
      timestamp = new Date(timestamp.getTime() + interval * 1000);
      dur = moment.duration(dur.asSeconds() - interval, "seconds");
      let y = dur.years();
      let m = dur.months();
      let day = dur.days();
      let hs = dur.hours();
      let min = dur.minutes();
      let sec = dur.seconds();
      if (y <= 0 && m <= 0 && day <= 0 && hs <= 0 && min <= 0 && sec < 0)
        return clearInterval(timer);
      setState((prev) => ({
        ...prev,
        years: y,
        months: m,
        days: day,
        hours: hs,
        minutes: min,
        seconds: sec,
      }));
      return () => {
        clearInterval(timer);
      };
    }, 1000);
  }, []);
  return { state };
};

export default useCountdown;
