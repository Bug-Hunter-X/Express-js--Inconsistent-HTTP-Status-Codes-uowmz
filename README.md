# Express.js Bug: Inconsistent HTTP Status Codes

This repository demonstrates a common error in Express.js applications: inconsistent use of HTTP status codes.  Specifically, the example incorrectly returns a 200 OK status code when a resource (a user in this case) is not found, instead of the appropriate 404 Not Found status code.

## Bug Description
The provided `bug.js` file contains an Express.js route handler that fetches a user by ID. If the user is not found, it returns a 200 OK status code with an error message, which is incorrect.  A 404 Not Found code should be used to signal that the requested resource was not found.

## Solution
The `bugSolution.js` file demonstrates the correct way to handle this situation by returning a 404 Not Found status code when a user is not found.