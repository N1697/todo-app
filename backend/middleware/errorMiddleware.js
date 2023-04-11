const errorHandler = (err, req, res, next) => {
  // Check if the response object already has a status code, if not default to 500
  const statusCode = res.statusCode ? res.statusCode : 500;

  // Set the HTTP status code of the response to the value of statusCode
  res.status(statusCode);

  // Send a JSON response with an object containing an error message and a stack trace
  res.json({
    message: err.message,
    stack: process.env.NODE_ENV === "production" ? null : err.stack,
    /**
        In production, it's best practice to not include stack traces in responses
        as they can reveal sensitive information about the server configuration
     */
  });
};

export { errorHandler };
