import {DBconnection} from './db.js';
import app from "./app.js";

DBconnection();

app.listen(4000);
console.log("Server listening on port", 4000);