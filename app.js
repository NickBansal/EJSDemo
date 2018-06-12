var express = require("express"), 
    app     = express(),
    bodyParser = require("body-parser");
    

var tin = [
            {title: "Kite Runner", author: "Khalid"},
            {title: "Da Vinci Code", author: "Dan Brown"},
            {title: "12 rules of life", author: "Jordan Peterson"},
        ]
    
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.set("view engine", "ejs");


app.get("/", function(req, res){
    res.render("home")
})

app.post("/addbook", function(req, res){
    var book = req.body.title;
    var name = req.body.author;
    tin.push({title: book, author: name});
    res.redirect("/love");
});

app.get("/love", function(req, res){
    res.render("love", {tin: tin});
})



// Find post by ID

// app.get("/post/:id", function(req, res) {
//     Post.findById(req.params.id, function(err, foundPost){
//         if (err) {
//             res.redirect("/post");
//         } else {
//             res.render("show", {post: foundPost})
//         }
//     })
// })

// Add show.ejs template

// Add link to the index page with - href="/post/<%= post._id %>"



app.listen(process.env.PORT, process.env.IP, function(){
    console.log("server is listening");
})