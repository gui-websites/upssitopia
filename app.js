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
app.listen(port, () => {
  console.log("Server started at http://localhost:" + port);
});
