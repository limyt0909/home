
const express = require("express"); // express module을 import한다는 의미
const ejs = require("ejs");
const app = express(); // Express server의 시작
const path = require("path");


app.set("view engine", "ejs"); // ejs 엔진을 사용한다고 선언하기
// views들이 views 폴더에 저장됨을 설정
app.set("views", path.join(__dirname, "views")); // app.set("views", __dirname + "/views"); 와 동일한 의미
app.use(express.static(path.join(__dirname, "public"))); // css와 같은 static file들이 저장된 경로 설정

app.listen(3000, () => {
  console.log("Server started (http://localhost:3000/) !");
});

// 첫번째 파라미터 "/"에 전달된 HTTP GET request에 응답
app.get("/", (req, res) => {
  res.render("index");
});