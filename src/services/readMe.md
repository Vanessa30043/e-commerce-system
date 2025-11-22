TypeScript SBA – E-Commerce Product Management System

Design preview for the TypeScript & Advanced JavaScript SBA

Welcome! 👋

Thanks for checking out my Software Engineering SBA project.

This assessment allowed me to apply what I learned during the TypeScript and Advanced JavaScript module by building a functional, real-world application using APIs, asynchronous operations, OOP, error handling, and modular code organization.

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

🧩 User Story / Features

Your application should allow users to:

Fetch product data from an external API

View formatted product details

Automatically apply discount amounts

Automatically calculate tax based on product category

Gracefully handle failed API calls or unexpected data

View results in the terminal via Node.js

📁 Where to find everything

Your final project includes the following folder structure:

e-commerce-system/
├── src/
│   ├── models/
│   │   ├── Product.ts
│   ├── services/
│   │   └── apiService.ts
│   ├── utils/
│   │   ├── discountCalculator.ts
│   │   ├── errorHandler.ts
│   │   └── taxCalculator.ts
│   └── main.ts
└── tsconfig.json


models/ → contains TypeScript classes

services/ → API handling using async/await

utils/ → reusable tax, discount, and error modules

main.ts → the main entry point where everything comes together

🛠 Building your project

Here is a suggested process (but feel free to use your own):

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

📝 Deliverables

GitHub Repository
Your full project, clean and organized.

Reflection Document (300 words) addressing:

TypeScript features used

OOP principles implemented

Challenges you faced

How you approached async and error handling

🧠 Reflection (Sample Template)

(Replace this with your own reflection when submitting.)

During this project, I encountered challenges with TypeScript type definitions and structuring reusable modules. I learned how important it is to fully understand the API response before designing my model classes. Another challenge was implementing asynchronous functions while maintaining clean error handling. Using try/catch paired with a custom error handler helped me manage failed requests in a controlled way. I approached the project by planning out my modules first, then building the utilities, followed by the API service, and finally connecting everything inside main.ts. If I had more time, I would add a UI layer using HTML/CSS, create a search or filter system for products, and implement better formatting for console output. Overall, this SBA strengthened my confidence with TypeScript, OOP, and working with real-world APIs.