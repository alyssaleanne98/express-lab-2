// Greetings 

// const express = require("express")

// called the express function, and storing the return in app
// const app = express()

// the root route 
// app.get("/", (req, res) => {
//     // console log "hello stranger"
//     res.send("hi there!");
// });

// add route 
// app.get("/greeting/:Alyssa?", (req, res) => {
//     // console.log("You did it!")
//     // if (req.params.name) {
//         res.send(
//             "<h> Alyssa! It's so great to see you! <h/>"
//         );
// });

// app.listen(3000)

// Tip calculator 

// const express = require("express")
// const app = express()

// app.get("/", (req, res) => {
//     res.send("hi there!");
// });

// // multiply route 
// // : means that it is looking for the "total" and "tipPercentage"
// app.get("/tip/:total/:tipPercentage", (req, res) => {
//     res.send(`${ parseInt(req.params.tipPercentage) * parseInt(req.params.total) / 100 }`)
// }); 
// app.listen(3000)

// Magic 8 Ball 

const express = require("express")
const app = express()

app.get("/", (req, res) => {
    res.send("hi there");
});

const answer = [
    "It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"
]
const randomAnswer = answer[Math.floor(Math.random() * answer.length)];
// we can't use spaces in url, so we use %20 to express a space in the url. 
app.get("/magic/Will%20I%20Be%20A%20Millionaire", (req, res) => {

    res.send("Will I be a millionaire?" + randomAnswer );
});

app.listen(3000)