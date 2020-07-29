const birthday = new Date(process.argv[2]);
console.log(`So your birthday was ${birthday.toLocaleDateString("de")}`);

const milliseconds = Date.now() - birthday.getTime();
const seconds = Math.round(milliseconds / 1000);
const minutes = Math.round(seconds / 60);
const hours = Math.round(minutes / 60);
const days = Math.round(hours / 24);

const timeOfDeath = 80.99 * 365 * 24 * 3600 * 1000 + birthday.getTime();
const millisecondsToLive = (timeOfDeath - Date.now()) * Math.random() ** 2;

const daysToLive = Math.round(millisecondsToLive / (1000 * 3600 * 24));

console.log(`You have lived ${seconds} seconds`);
console.log(`That's ${hours} hours`);
console.log(`Or ${days} days`);

const message = `You have ${daysToLive} days left, ${Math.round(
  (days / (days + daysToLive)) * 100
)} % is over`;

const bubbleWidth = message.length + 2;

const cow = `       \\   ^__^   _|_
         \\  (--)\\___|___
            (__)\\       )\\/\\
                ||----w |
                ||     ||`;

const output = ` ${"_".repeat(bubbleWidth)} 
< ${message} >
 ${"-".repeat(bubbleWidth)}
 ${cow}`;

console.log(output);
