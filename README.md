  
#  SBA - E-commerce Product Management System


Welcome! 👋

  
Thanks for checking out my Software Engineering SBA project.
##  Description

TypeScript SBA – E-Commerce Product Management System

  

 TypeScript & Advanced JavaScript SBA

  

This assessment allowed me to apply what I learned during the TypeScript and Advanced JavaScript module by building a functional, real-world application using APIs, asynchronous operations, OOP, error handling, and modular code organization.


##  Overview
📦 The Challenge

  

Your challenge is to build a fully functional E-Commerce Product Management System using TypeScript.

  

You will create a complete project that:

  

Fetches live product data from the DummyJSON Products API

  

Uses OOP concepts to structure and manage product objects

  

Calculates tax and discount values using reusable utility modules

  

Handles async API calls with proper error management

  

Organizes code into a clean, modular folder structure

  

Runs through a TypeScript build process

  

You can use any workflow or tools you prefer.

The goal is to demonstrate TypeScript mastery through a real application.
----------


##  Learning Objectives

🧩 User Story / Features

  

Your application should allow users to:

  

- Fetch product data from an external API

  

- View formatted product details

  

- Automatically apply discount amounts

  

- Automatically calculate tax based on product category

  

- Gracefully handle failed API calls or unexpected data

  

- View results in the terminal via Node.js

  

  

- models/ → contains TypeScript classes

  

- services/ → API handling using async/await

  

- utils/ → reusable tax, discount, and error modules

  

- main.ts → the main entry point where everything comes together

  

## 🛠 Building your project

  
  Initialize your project and GitHub repo.

Set up npm, TypeScript, and your file structure.

  

Plan your API interaction.

Review the DummyJSON Products API and outline the data you’ll need.

  

Build your Product class.

Include properties from the API and create methods like:

  

displayDetails()

  

getPriceWithDiscount()

  

Write utilities.

  

calculateDiscount()

  

calculateTax()

  

Custom error handler classes

  

Build your API service.

Use async/await, Promises, and try/catch.

  

Assemble everything in main.ts

Fetch data → instantiate Product objects → calculate values → output results.

  

Compile with TypeScript

  

Run:

  

npx tsc

  
  

Run your app

  

node dist/main.js

  

🚀 Deployment / Running the Project

  

You run this project via Node.js after TypeScript compiles it.

Make sure your repository is pushed to GitHub for review.
----------


##  Resources
- https://www.youtube.com/watch?v=RvYYCGs45L4
- https://www.youtube.com/watch?v=h33Srr5J9nY
- https://www.youtube.com/watch?v=DHvZLI7Db8E&t=3s
- https://www.youtube.com/watch?v=DHvZLI7Db8E
Per Scholas Assignment instructions:
https://perscholas.instructure.com/courses/2978/assignments/577968



##  Getting Started


###  Requirements

- Node.js v24+ installed

- npm installed

- Git installed

- Code editor (VS Code recommended)

###  OS Compatibility

This lab can be completed on **Windows**, **macOS**, or **Linux**.



## REFLECTION

During this project, I encountered challenges with TypeScript type definitions and structuring reusable modules. I learned how important it is to fully understand the API response before designing my model classes.

----------

##  Installation

1.  **Clone this repository** to your computer:

```bash

git  clone

2.  Open  the  project  folder  in  your  code  editor:

cd  e-commerce-system

## Setup

1.  Run  the  project:

node  dist/main.js

## Project Structure

e-commerce-system/

├──  src/

│  ├──  models/

│  │  └──  Product.ts

│  ├──  services/

│  │  └──  apiService.ts

│  ├──  utils/

│  │  ├──  discountCalculator.ts

│  │  ├──  errorHandler.ts

│  │  └──  taxCalculator.ts

│  └──  main.ts

└──  tsconfig.json

----------

