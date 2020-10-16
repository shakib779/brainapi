const app = require("./configs/express").app;
const bodyParser = require("body-parser");
const path = require("path");
const util = require("./helpers/util");

const cors = require("cors");

require('./configs/mongoose.connect')(process.env.DATABASE_NAME);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

const normalizedPath = path.join(__dirname + `/routes`);

const routes = util.getFileExports(normalizedPath);

app.use("/api/", routes);
