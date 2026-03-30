# warith-qa-portfolio
# Enyata Assessment - Cypress Automated Test

**Description** 
Automated Cypress test suite designed to validate core functionalities and user workflows for the Enyata Assessment project.

===

## Prerequisites

- (Node.js) version 14 or higher installed on your machine.  
  Download from [https://nodejs.org/en]

- (npm) comes with Node.js or package manager installed.

- Internet connection for downloading dependencies.

===

## Installation

1. **Clone the repository:**

https://github.com/PhoenixBee/Enyata-Assessment.git

2. **Install dependencies:**
   npm install - This will install Cypress and all other required packages defined in package.json.

3. **Open Cypress:**
   npx cypress open
   
4. Select spec and run test

===

**Notes**

Ensure Node.js version is compatible with Cypress (Node 14+ recommended).

Some tests may rely on specific environment variables or test data; please configure these if applicable.

If you encounter issues with dependencies or installation, delete node_modules and run npm install again.

Tests were developed on Windows; some path or permission issues may occur on other Operating Systems.

If tests fail due to network issues or application downtime, please retry after confirming the app is accessible.

No known blockers currently, but test stability depends on the target application availability.
