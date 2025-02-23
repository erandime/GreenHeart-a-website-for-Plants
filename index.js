import express from "express";
import axios from "axios";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

const API_URL = "https://permapeople.org/api";
const appType = "application/json";

// Get access to the https://permapeople.org/knowledgebase/api-docs.html#getting-access.
// Enter your APi keys below.
const yourKey = "";
const yourSecretKey = "";

const config = {
    headers: {
        "x-permapeople-key-id": yourKey, 
        "x-permapeople-key-secret": yourSecretKey, 
        "Content-Type": appType
    },
};

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => { 
    res.render("index.ejs");
});

app.post("/result", async (req, res) => {
    const query = req.body.query;
    
    try {
        const result = await axios.post(API_URL + "/search", 
            {q: query},
            config);
        res.render("index.ejs", {content: result.data.plants[0].name});
    } catch (error) {
        res.render("index.ejs", {content: JSON.stringify(error.response.data)});
    }
});

app.listen(port, () => { 
    console.log(`Listening on port ${port}`);
});