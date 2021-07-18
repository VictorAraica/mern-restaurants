const app = require("./app");
const db = require("./database");

db();

app.listen(app.get("port"), () => {
  console.log(`server on port: ${app.get("port")}`);
});
