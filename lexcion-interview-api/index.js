const express = require("express");
const cors = require("cors");
const app = express();
// cors error fix; to allow request from any domain
app.use(cors());
app.options("*", cors());

const port = 3000;

// for all inteviews
app.get("/interviews", (req, res) => {
  console.log(req.query.huda);
  res.send(data);
});

// for single interviews
app.get("/getInterviewById", (req, res) => {
  console.log(req.query.interviewId);
  const idStr = req.query.interviewId
  const idNum = parseInt(idStr);
  const foundInterv = data.find((e) => { return e.interviewId === idNum; })
  console.log("found Interview",foundInterv)
  res.send(foundInterv);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

data = [
  {
    interviewId: 1,
    cosultantCompany: "OlympiaCG",
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
    cosultantCompany: "Zulifqar",
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
    cosultantCompany: "Malik",
    endClient: "citi",
    jobTitle: "Sr. Developer",
    jobTech: ["node", "angular"],
    levelInterview: "two",
    date: new Date(),
    recuriterName: "asd",
    recuriterEmail: "asdfdf",
  },
];
