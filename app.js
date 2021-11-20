require('dotenv').config()

const express = require("express");
const app = express();

const path = require("path");
const VIEWS_PATH = path.join(__dirname, '/views');
const ASSETS_PATH = path.join(__dirname, '/public');

app.set('views', VIEWS_PATH);
app.use(express.static(ASSETS_PATH));

app.set('view engine', 'pug');



// == ROUTING RULES ============================================================

app.get('/', (req, res) => {
  res.render('index', {basedir: VIEWS_PATH});
});



// == SERVER LAUNCH ============================================================

const port = process.env.PORT || 8080;
if(process.env.PROD) {
  const certificate = fs.readFileSync(process.env.SSL_CRT, 'utf-8');
  const privateKey = fs.readFileSync(process.env.SSL_KEY, 'utf-8');
  const credentials = {key: privateKey, cert: certificate};

  https
    .createServer(credentials, app)
    .listen(port, console.log('Running HTTPS on port ' + port));
} else {
  app.listen(port, console.log("Running HTTP at on port " + port));
}
