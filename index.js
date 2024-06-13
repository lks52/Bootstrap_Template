import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import bodyParser from 'body-parser';
import config from './config/config.js';


// Middleware für EJS und Layouts


const app = express();
const port = 3000;

// Get the directory name
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Set EJS as templating engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files from the "public" directory
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));


app.get("/", async (req,res) =>{
    res.render("index.ejs")
})

app.get("/about", async (req,res) =>{
    res.render("about.ejs")
})

app.get("/contact", async (req,res) =>{
    res.render("contact.ejs")
})

// Start the server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
  });
  


