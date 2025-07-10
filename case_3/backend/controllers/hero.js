const fs = require("fs");
const path = require("path");
const db = path.join(__dirname, "../statics/db.json");

const read = () => {
  const data = fs.readFileSync(db);
  return JSON.parse(data);
};

exports.get = (req, res) => {
  const data = read();
  res.json(data.hero);
};
