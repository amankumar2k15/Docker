const express = require("express")

const app = express()
const PORT = process.env.PORT || 8000

app.use("/", require("./routes/router"))

console.log("Hello world")

app.listen(PORT, () => console.log("Server is Running on PORT 8000"))