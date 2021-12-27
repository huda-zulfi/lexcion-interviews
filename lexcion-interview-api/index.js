const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
// cors error fix; to allow request from any domain
app.use(cors());
app.options("*", cors());
// for parsing body in requests
app.use(bodyParser.json());

const port = 3000;

// for all inteviews
app.get("/interviews", (req, res) => {
  // console.log(req.query.huda);
  res.send(data);
});

// for single interviews
app.get("/getInterviewById", (req, res) => {
  console.log(req.query.interviewId);
  const idStr = req.query.interviewId
  const idNum = parseInt(idStr);
  const foundInterv = data.find((e) => { return e.interviewId === idNum; })
  // console.log("found Interview",foundInterv)
  res.send(foundInterv);
});

app.post("/createInterview", (req, res) => {
  console.log("data from front end", req.body);
  data.push(req.body)
  res.statusCode = "201"
  res.send(req.body)
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

//create interview on the backend



data = [
  {
    interviewId: 1,
    consultantCompany: "OlympiaCG",
    endClient: "citi",
    jobTitle: "Sr. Developer",
    jobTech: ["node", "angular"],
    levelInterview: "two",
    date: new Date(),
    recuriterName: "asd",
    recuriterEmail: "asdfdf",
  },
  {
    interviewId: 2,
    consultantCompany: "Zulifqar",
    endClient: "citi",
    jobTitle: "Sr. Developer",
    jobTech: ["node", "angular"],
    levelInterview: "two",
    date: new Date(),
    recuriterName: "asd",
    recuriterEmail: "asdfdf",
  },
  {
    interviewId: 3,
    consultantCompany: "Malik",
    endClient: "citi",
    jobTitle: "Sr. Developer",
    jobTech: ["node", "angular"],
    levelInterview: "two",
    date: new Date(),
    recuriterName: "asd",
    recuriterEmail: "asdfdf",
  },
];
