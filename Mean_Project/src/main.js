const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors());

const dbadd = require("./Operations");

app.get("/", (req, res) => {
    res.send("Hello World");
});



app.post("/adduser", async (req, res) => {
    try {
        const input = req.body;

        await dbadd.addUser(input);

        res.json({ message: "success" });
    } catch (err) {
        res.sendStatus(500);
    }
});

app.post("/auth-user", async (req, res) => {
    try {
        const input = req.body;

        await dbadd.authenticateuser(input);
        res.json({ opr: true });
    } catch (err) {
        res.json({ opr: false });
    }

});

app.post("/update-user", async (req, res) => {
    try {
        const input = req.body;

        await dbadd.updateuser(input);
        res.json({ opr: true });
    } catch (err) {
        res.json({ opr: false });
    }

});

app.post("/emailvarification", async (req, res) => {
    try {
        const input = req.body;

        await dbadd.emailvarification(input);
        res.json({ opr: true });
    } catch (err) {
        res.json({ opr: false });
    }
});


app.get("/getdata", async (req, res) => {
    try {
        let data = await dbadd.getdata();
        //console.log(data)
        res.json(data);
    }
    catch (err) {
        let jsonb = { message: "fail" }
        res.json(jsonb);
    }
})

app.get("/getdataFruit", async (req, res) => {
    try {
        let data = await dbadd.getdataFruit();
        //console.log(data)
        res.json(data);
    }
    catch (err) {
        let jsonb = { message: "fail" }
        res.json(jsonb);
    }
})

app.post("/addproduct", async (req, res) => {
    try {
        const input = req.body;
        let data = await dbadd.addproduct(input);
        //console.log(data)
        res.json(data);
    }
    catch (err) {
        console.log("erro");
        let jsonb = { message: "fail" }
        res.json(jsonb);
    }
})
app.listen(3200);