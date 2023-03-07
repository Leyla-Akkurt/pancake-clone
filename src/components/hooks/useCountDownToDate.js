import { useEffect, useState } from 'react';

// generate a random timing between 0 and 4 hours
const randTiming = () => {
  const randomHour = Math.floor(Math.random() * 4 * 3600000);
  const randomMin = Math.floor(Math.random() * 60 * 60000);
  const randomSecs = Math.floor(Math.random() * 60 * 6000);
  return randomHour + randomMin + randomSecs;
};
// get the current date
const date = new Date();
// make the future countDownTo date using the randTiming
date.setTime(date.getTime() + randTiming());

// countdown timer for the fake lottery draw
function useCountDownToDate() {
  // assign the future countDownTo date to countDownToDate
  const countDownToDate = date.getTime();
  const [countDown, setCountDown] = useState(
    countDownToDate - new Date().getTime()
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCountDown(countDownToDate - new Date().getTime());
    }, 1000);

    return () => clearInterval(interval);
  }, [countDownToDate]);

  return getReturnValues(countDown);
}

function getReturnValues(countDown) {
  // calculate the time left
  const remHours = Math.floor((countDown / (1000 * 60 * 60)) % 24);
  const remMins = Math.floor((countDown / 1000 / 60) % 60);
  const remSecs = Math.floor((countDown / 1000) % 60);

  return {
    hours: remHours,
    mins: ('0' + remMins).slice(-2), // Add a leading zero to the mins value
    secs: ('0' + remSecs).slice(-2), // Add a leading zero to the mins value
  };
}

export default useCountDownToDate;
