const currentDate = new Date();

const options = { timeZone: 'America/New_York', timeStyle: 'medium' };

const currentTimeInEST = currentDate.toLocaleString('en-US', options);
const currentHour = currentTimeInEST.split(":")[0]
const currentMinute = currentTimeInEST.split(":")[1]
const currentMeridiem = currentTimeInEST.slice(-2);

const time = currentHour+":"+currentMinute+" "+currentMeridiem
console.log(time);