const mongoose = require("mongoose")

const mongoString = "mongodb+srv://Kamo-189:wevze3-quxmiK-canpof@cluster0.kympf.mongodb.net/TodoList?retryWrites=true&w=majority"

mongoose.connect(mongoString, {useNewUrlParser: true})

mongoose.connection.on("error", function(error) {
  console.log(error)
})

mongoose.connection.on("open", function() {
  console.log("Connected to MongoDB database.")
})

console.log("hello world");