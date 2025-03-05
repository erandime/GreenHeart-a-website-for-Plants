import express from "express";
import axios from "axios";
import bodyParser from "body-parser";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = 3000;

const API_URL = "https://permapeople.org/api";
const appType = "application/json";

app.locals.year = new Date().getFullYear();

const config = {
    headers: {
        "x-permapeople-key-id": process.env.PERMAPEOPLE_KEY, 
        "x-permapeople-key-secret": process.env.PERMAPEOPLE_SECRET, 
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
        const plants = result.data.plants;
        
        if (!plants || plants.length === 0) {
            return res.render("index.ejs", { error: "Plant not found. Try another name!" });
        }

        const plant = {
            name: plants[0].name,
            scientificName: plants[0].scientific_name,
            image: plants[0].images.thumb,      
            water: getValueForKey(plants[0].data, 'Water requirement'),
            light: getValueForKey(plants[0].data, 'Light requirement'),
            soil: getValueForKey(plants[0].data, 'Soil type'),
            description: plants[0].description,
        };


        function getValueForKey(data, key) {
        const info = data.find(item => item.key === key);
        return info ? info.value : 'Not available';  
        }

        res.render("index.ejs", { content: plant });
        
    } catch (error) {
        res.render("index.ejs", {error: JSON.stringify(error.response.data)});
    }
});

app.listen(port, () => { 
    console.log(`Listening on port ${port}`);
});