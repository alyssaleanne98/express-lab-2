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

const express = require("express")
const app = express()

app.get("/", (req, res) => {
    res.send("hi there!");
});

// multiply route 
app.get("/tip/:total/:tipPercentage", (req, res) => {
    res.send(`${ parseInt(req.params.tipPercentage) * parseInt(req.params.total) / 100 }`)
}); 
app.listen(3000)