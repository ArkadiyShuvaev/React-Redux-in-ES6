import Express from "express";
import Path from "path";
import Open from "open";
import Compression from "compression";

/*eslint-disable no-console */

const port = 3000;
const app = Express();

app.use(Compression()); // enable gzip compression
app.use(Express.static("dist"));

app.get("*", function (req, res) {
    res.sendFile(Path.join(__dirname, "../dist/index.html"));
});

app.listen(port, function (err) {
    if (err) {
        console.log(err);
    } else {
        Open(`http://localhost:${port}`);
    }
});
