# BudgetAPI

The BudgetApp is basically a back-end (in Node.js) Application for Budget Management, in which I've added the back-end requests for Create, Update, View, Delete Incomes and Expenses on envelopes model wher a user can assign a budget for any expenses (like holidays :palm_tree:), update it, delete, and reassign from an enveloppe to another.

## Table of Contents

1. [Authors and Contributors](#author)
2. [How to deploy the app?](#deploy-app)
3. [Resources Used](#resources)
4. [Goals](#future-improvements)

### <a name="author"></a>1. Authors and Contributors

I, [François Blin](https://github.com/francoisblin) am the developer for this Application.

### <a name="deploy-app"></a>2. How to check the app ?

#### Installation

Get the sources with `git clone https://github.com/francoisblin/personalBudget.git`

Then, go inside the api folder: `cd personalBudget`

And install all the npm dependencies: `npm install`

#### Run

Go to the api folder and run the node.js server: `node start`

Then you can check api with Postman on `http://localhost:4001`

Testing api with `npm test`
### Request Routes:

 **Create Envelope**
  - Type: POST
  - Endpoint: URL/envelopes
  - Query: name: string
           budget: number

 **Get All Envelopes**
  - Type: GET
  - Endpoint: URL/envelopes

 **Fetch Individual Envelope**
 - Type: GET
 - Endpoint: URL/envelopes/:envelopeId
 - (Set Request Header)

 **Update Individual Income or Expense**
 - Type: POST
 - Endpoint: URL/envelopes/:envelopeId
 - (Set Request Header)

 **Delete Individual Envelope**
 - Type: DELETE
 - Endpoint: URL/envelopes/:envelopeId
 - (Set Request Header)

 **Transfer money from an Envelopê ton another**
 - Type: POST
 - Endpoint: URL/envelopes/transfer/:from/:amount/:to
 - (Set Request Header)
`

### <a name="resources"></a> 3. Resources

* Node.js is used as the scripting language for the server.
* `npm` modules used in the API.
 * `express`, `nodemon`, `chai`, `supertest`, `body-parser`
### <a name="future-improvements"></a> 4. Goals

* [X] Create a back-end API with Node.js
* [X] Use Supertest for TDD 
* Using Postman

_Any suggestions for the API are welcomed. Please email me at frablin@gmail.com to share your suggestions_
_Thanks to @Codecademy !_
