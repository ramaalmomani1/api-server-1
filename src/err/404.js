'use strict'

module.exports = (req, res)=>{
res.status(404).json({
code: 404,
message: 'Page not found!!',
URL: req.originalUrl 
})
}

/* This code exports a middleware function that responds with a JSON object containing a 404 error message and the original URL when a route is not found in the Express application.
 This allows for custom handling of 404 errors in the application.*/