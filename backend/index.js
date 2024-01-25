const express = require("express");
const { exec } = require('child_process')
const { inputSearch } = require("./types");
const { userInput } = require("./db");
const cors = require("cors")
const fs = require('fs');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json())
app.use(cors())

app.post("/search", async (req,res)=>{
    const createPayload = req.body;
    const parsedPayload = inputSearch.safeParse(createPayload);

    if(!parsedPayload.success)
    {
        res.status(411).json({
            msg: "You sent the wrong inputs",
        })
        return;
    }

    const pythonScript = 'search.py';
    const tempFile = 'temp_output.txt';
    exec(`python3 ${pythonScript} "${createPayload.input}" > ${tempFile}`, 
    async (error, stdout, stderr) => {
        if (error) {
            console.error(`Error executing Python script: ${error}`);
            res.status(500).send('Internal Server Error');
            return;
        }
        const pythonOutput = fs.readFileSync(tempFile, 'utf-8').trim();
        fs.unlinkSync(tempFile);

        await userInput.create({
            input : createPayload.input,
            data : pythonOutput
        })
    });

    res.json({
        msg : "Input and Data recieved"
    })
})




app.listen(PORT, ()=>{
    console.log(`Server listening on ${PORT}`);
})