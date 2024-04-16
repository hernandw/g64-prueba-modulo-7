import express from 'express';
import routes from "./routes/routes.js";
const app = express();
const PORT = process.env.PORT || 3000;



//routes
app.use('/', routes);

app.listen(PORT, () => console.log(`Example app listening on port http://localhost:${PORT}`));