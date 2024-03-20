const mongodb = require("mongodb");

const mongoClient = mongodb.MongoClient

const connectionURL = 'mongodb://127.0.0.1:27017' // IP address of localhost

const dbName = "project-1"

mongoClient.connect(connectionURL, (error, res1) => {
    if(error){
        return console.log("ERROR HAS OCCURED!")
    }
    console.log("Connection Done")

    const db = res1.db(dbName)

    ////////////////////////////////////////////////////////////

    // insertOne(Doc, options, callback)
    db.collection('users').insertMany([{
        name: "Yousif",
        age: 21,
    },{
        name: "Adel",
        age: 60
    },{
        name: "Yahia",
        age: 21
    },
    (error, data) => {
        if(error){
            return console.log("Unable to insert data!")
        }
        console.log(data.insertedId);
    }])

    // db.collection('users').insertOne({
    //     name: "Yousif",
    //     age: 21,
    //     city: "Cairo"
    // }, (error, data) => {
    //     if(error){
    //         return console.log("Unable to insert data!")
    //     }
    //     console.log(data.insertedId);
    // })
})