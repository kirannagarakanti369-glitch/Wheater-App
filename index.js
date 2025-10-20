import express from "express";
import bodyParser from "body-parser";
import axios from "axios";
import dotenv from "dotenv";
dotenv.config();


const app = express();
const port = process.env.PORT || 3000;

const apiKey = process.env.OPENWEATHER_API_KEY;

//view engine setup
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
let latitute, longitude;

 app.get("/", async (req, res) => {
 if (!latitute || !longitude) {
    return res.render("index", { activity: null, error: "Please enter latitude and longitude." });
  }

    
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latitute}&lon=${longitude}&appid=${apiKey}&units=metric`);
      res.render("index", { activity: response.data , error:null});
      console.log("Weather data:", response.data)
    } catch (error) {
      console.error("Failed to make request!", error.message);
      res.status(500).send("Failed to fetch activity. Please try again.");
    }

  });

app.post("/submit", (req, res) => {
  latitute = req.body.lat;
  longitude = req.body.long;
  res.redirect("/");
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
