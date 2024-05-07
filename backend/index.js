const express = require('express');
const app = express();
const port = 5100;
const cors = require('cors');

app.use(cors());

app.get('/upload_file',(req,res) =>{
    res.send('Hello World');
});

app.listen(port,()=>{
    console.log(`App listening on port ${port}`);
});