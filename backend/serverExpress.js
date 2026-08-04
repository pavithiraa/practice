const express = require('express');
const app = express();
const PORT = 8080;

app.use(express.json())

app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT} successfully!`)
})


// server.listen() starts the server and begins accepting incoming requests. 
// It is typically placed last so that all application setup—such as routes, middleware, event listeners, and database connections—is completed before the server starts handling client requests. 
// This helps ensure the application is fully initialized when requests arrive.