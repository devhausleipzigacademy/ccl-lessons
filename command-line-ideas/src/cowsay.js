let message = process.argv[2];

const bubbleWidth = message.length + 2;

const cow = `       \\   ^__^
         \\  (oo)\\_______
            (__)\\       )\\/\\
                ||----w |
                ||     ||`;

const output = ` ${"_".repeat(bubbleWidth)} 
< ${message} >
 ${"-".repeat(bubbleWidth)}
 ${cow}`;

console.log(output);
