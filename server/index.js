const express = require('express');

const utilRouter = require('./routers/utils')
const userRouter = require('./routers/userRouter')





const cors = require('cors');
const app = express();
const port = 5000;



app.use(cors({
    origin: ['http://localhost:3000']
}));

app.use(express.json());

app.use('/user', userRouter);
app.use('/utils', utilRouter);
app.use(express.static('./static/uploads'))







app.listen(port, () => {
    console.log("Server Activated")
})