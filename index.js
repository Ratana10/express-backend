const cors = require('cors'); 
const express = require("express");

const app = express();
const port = 4000;

app.use(cors());
app.use(express.json());

const documents = [
  {
    id: 1,
    no: "001",
    ir: "IR-01",
    outNo: "OUT-001",
    submitDate: "01/10/2025	",
    source: "Ministry A	",
    doc: "របាយការណ៍	",
    officer: "លោក សាន	",
    status: "រួចរាល់",
  },
  {
    id: 2,
    no: "002",
    ir: "IR-02",
    outNo: "OUT-001",
    submitDate: "01/10/2025	",
    source: "Ministry A	",
    doc: "របាយការណ៍	",
    officer: "លោក សាន	",
    status: "រួចរាល់",
  },
  {
    id: 3,
    no: "003",
    ir: "IR-03",
    outNo: "OUT-001",
    submitDate: "01/10/2025	",
    source: "Ministry A	",
    doc: "របាយការណ៍	",
    officer: "លោក សាន	",
    status: "រួចរាល់",
  },
  {
    id: 4,
    no: "004",
    ir: "IR-04",
    outNo: "OUT-001",
    submitDate: "01/10/2025	",
    source: "Ministry A	",
    doc: "របាយការណ៍	",
    officer: "លោក សាន	",
    status: "រួចរាល់",
  },
  {
    id: 5,
    no: "005",
    ir: "IR-05",
    outNo: "OUT-001",
    submitDate: "01/10/2025	",
    source: "Ministry A	",
    doc: "របាយការណ៍	",
    officer: "លោក សាន	",
    status: "រួចរាល់",
  },
  {
    id: 6,
    no: "006",
    ir: "IR-06",
    outNo: "OUT-001",
    submitDate: "01/10/2025	",
    source: "Ministry A	",
    doc: "របាយការណ៍	",
    officer: "លោក សាន	",
    status: "រួចរាល់",
  },
];

app.get("/doc", (req, res) => {
  res.json({
    message: "get success",
    date: documents,
  });
});

app.post("/doc", (req, res) => {
  const { id, no, ir, outNo, submitDate, source, doc, officer, status } = req.body;

  documents.push({
    id,
    no,
    ir,
    outNo,
    submitDate,
    source,
    doc,
    officer,
    status,
  });

  res.send("Create doc success");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
