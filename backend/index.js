const express = require("express");
const cors = require("cors");
const { google } = require("googleapis");
const fs = require("fs");
const https = require("https");

require("dotenv").config();

const app = express();
app.use(cors());

const sheetId = "1UVDsv9Fc9aQq2Ffz1nFiK9P0AvhIfRUniq-4jSTUINg";
const range = "Sheet1!A:E";



async function main() {



    // Initialise google APIs
    const auth = new google.auth.GoogleAuth({
        keyFile: "credentials.json",
        scopes: "https://www.googleapis.com/auth/spreadsheets"
    });
    
    const client = await auth.getClient();
    const googleSheets = google.sheets({ version: "v4", auth: client });
    
    
    
    // Express server routes
    
    app.get("/", (req, res) => {
        res.send("Hello")
    })

    app.get("/members", async (req, res) => {
    
        // Read rows from spreadsheet
        const getRows = await googleSheets.spreadsheets.values.get({
            auth: auth,
            spreadsheetId: sheetId,
            range: range
        })

        let returnData = {}
    
        if(getRows.data.values) {

            for(const row of getRows.data.values.slice(1)) {
                const [ name, revealed, role, pole, resp ] = row;

                if(returnData[pole] == undefined) returnData[pole] = [];
                returnData[pole].push({
                    name: name,
                    role: role,
                    resp: resp != undefined && resp != "",
                    revealed: revealed != undefined && revealed != ""
                })
            }
        }

        res.json(returnData);
    });
    
    const port = process.env.PORT || 4000

    if(process.env.PROD) {
        const certificate = fs.readFileSync(process.env.SSL_CRT, 'utf-8')
        const privateKey = fs.readFileSync(process.env.SSL_KEY, 'utf-8')
        const credentials = {key: privateKey, cert: certificate}

        https.createServer(credentials, app).listen(port, console.log('Running HTTPS on port ' + port))
    } else
    app.listen(port, console.log('Running HTTP on port ' + port))

}



main();