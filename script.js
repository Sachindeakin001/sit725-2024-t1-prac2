// // Import required modules
// const express = require('express');
// const bodyParser = require('body-parser');

// // Create an Express application
// const app = express();

// // Set up middleware to parse JSON requests
// app.use(bodyParser.json());

// // Define route for addition
// app.post('/add', (req, res) => {
//     // Extract the numbers from the request body
//     const { num1, num2 } = req.body;

//     // Check if both numbers are provided
//     if (!num1 || !num2) {
//         return res.status(400).json({ error: 'Both numbers are required.' });
//     }

//     // Check if both inputs are valid numbers
//     if (isNaN(num1) || isNaN(num2)) {
//         return res.status(400).json({ error: 'Invalid input. Please provide valid numbers.' });
//     }

//     // Perform addition
//     const result = parseFloat(num1) + parseFloat(num2);

//     // Send the result as JSON
//     res.json({ result });
// });
// // app.get('/', (req, res) => {
// //     res.send('Welcome to my Express server!');
// // });

// // Set up server to listen on port 3000
// const port = 3000;
// app.listen(port, () => {
//     console.log(`Server is running on port ${port}`);
// });
let express =require('express');
let app = express();
let port = process.env.port || 3000;

app.use(express.static(__dirname +'/'));

app.get('/', function (req,res){
    res.render('index.html');
})

app.get('/addTwoNumbers', function (req, res){
    let num1 =req.query.num1;
    let num2 = req.query.num2;
    let result = parseInt (num1) + parseInt(num2);
    let response = {data:result , message:'sucess', statusCode:200}
    res.json(response);
});

app.listen(port, ()=>{
    console.log('express server started');
})