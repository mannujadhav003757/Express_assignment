
const express = require('express')
const fs =require('fs')
//const json= require('./data.json')

const PORT = 8899;

const app = express();
app.use(express.json())
app.use(express.urlencoded({ extended: false }))


app.get("/", (req, res) => {
    res.sendFile('Form.html', { root: '.' });
})
app.post('/submit-data', (req, res) => {
    const fname=req.body.fname
    //const lname=req.body.lname
    const id=req.body.empid
    const email=req.body.email
    const contact=req.body.contact
    const salary=req.body.salary

   const data={
        id,
        fname,
        email,
        contact,
        salary
    }

    const myJSON = JSON.stringify(data);
    console.log("here is myjson:"+myJSON)
    console.log("Employee name:", data.fname); // => "
          console.log("employee Id:", data.id);
          console.log("Employee name:", data.contact); // => "
          console.log("employee Id:", data.email);
          console.log("salaryis:"+data.salary)

    // const jsondata=JSON.stringify(data)
    // console.log(jsondata)

    // const objData=JSON.parse(jsondata)

    // var empid = jsondata.map(function (item) {
    //     return item.id;
    // });
    // var name = jsondata.map(function (item) {
    //     return item.fname;
    // });
    // fs.readFile("./data.json", "utf8", (err, jsonString) => {
    //     if (err) {
    //       console.log("File read failed:", err);
    //       return;
    //     }
    //     console.log("File data:", jsonString);
    //   });

    // fs.readFile("./data.json", "utf8", (err, jsonString) => {
    //     if (err) {
    //       console.log("Error reading file from disk:", err);
    //       return;
    //     }
    //     try {
    //       const customer = JSON.parse(jsonString);
    //       console.log("Employee name:", data.fname); // => "
    //       console.log("employee Id:", data.id);
    //       console.log("Employee name:", data.contact); // => "
    //       console.log("employee Id:", data.email);
    //       console.log("salaryis:"+data.salary)
    //     } catch (err) {
    //       console.log("Error parsing JSON string:", err);
    //     }
    //   });

    const jsonString = JSON.stringify(data)
    
    fs.appendFile('./data.json', jsonString, err => {
        if (err) {
            console.log('Error writing file', err)
        } else {
            console.log("file appned successfully")
         }
    })


   
    res.send(`here is Emp Id: ${req.body.empid} here is name: ${req.body.fname} here is email: ${req.body.email} here is contact: ${req.body.contact} here is salary: ${req.body.salary} `)
   
    
})






app.get("/category/:cname/:scat", (req, res) => {
    let cn = req.params.cname
    let sc = req.params.scat
    res.send(`the category is ${cn}wardrobe is${sc}`)
})

app.listen(PORT, (err) => {
    if (err) throw err
    console.log(`work on${PORT}`)
})