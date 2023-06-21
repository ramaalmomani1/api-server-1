'use strict'
 
module.exports = (error,req,res,next)=>{
res.status(500).json({
code: 500,
message: `Server error!! ${error.message}`,
URL: req.originalUrl,
body: req.body
})
}

/* This code exports a middleware function that responds with a JSON object containing a 500 error message, the original URL, and the request body when a server error occurs in the Express application.
 This allows for custom handling and error response for server errors in the application.*/