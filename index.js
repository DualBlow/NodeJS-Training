
const express = require("express"); //? Import Express 
const app = express();  //Run express; 
const PORT = 8080;

app.use( express.json () ) //? Created Middleware in order to pass JSON through express.

app.get("/song", (request, response) => {
    response.status(200).send ({    //OK response 
        song: "Song of Storms",
        aquiredFrom: "Millhouse"
    })
});

app.post("/song/:name", (request, response) => {
    const { name } = request.params;
    const { utility } = request.body;

    if (!utility){  // Error response 
        response.status(418).send ({ message: "Utility does not exist."})
    }

    if (name == "NocturneOfShadow") {
    response.send ({
        song: "Song name >> " + name + " when used: " + utility
    });

    }else{
        response.send ({
            error: "Not yet added"
        });
    }
});

app.listen ( //? Startup the API on localhost:8080
    PORT,
    () => console.log("Running on http://127.0.0.1:"+PORT)
)
