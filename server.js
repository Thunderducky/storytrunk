const express = require('express');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 3001

app.use(express.urlencoded({extended:true}))
app.use(express.json())

if(process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'))
}

app.get("/api/test", function(res, res){
    console.log("HELLO");
    res.json({ success: true })
})

app.use(function(req, res) {
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
});
app.listen(PORT, () => console.log(`I am listening... (on port ${PORT})`))