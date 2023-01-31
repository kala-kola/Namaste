# Boilerplate: Fullstack

## Setup

### What's included

This repo includes:

* a single, simple API endpoint (`/api/v1/asanas`)
* a single React component (`<App />`)
* an example database module (`server/db/asanas.js`)
* an API client module (`client/apis/asanas.js`)
* configuration for Jest and testing library
* configuration for server-side debugging in VS Code
* a single client-side test (`client/components/App.test.js`)

### Installation

#### **From the Github UI**

See the instructions [here](https://docs.github.com/en/free-pro-team@latest/github/creating-cloning-and-archiving-repositories/creating-a-repository-from-a-template) to use Github's feature to create a new repo from a template.

#### **From the command line**

```
git clone https://github.com/kala-kola/Namaste.git
npm install # to install dependencies
npm run knex migrate:latest # to install db
npm run knex seed:run
npm run dev # to start the dev server
```

You can find the server running on [http://localhost:3000](http://localhost:3000).

---
[Provide feedback on this repo](https://docs.google.com/forms/d/e/1FAIpQLSfw4FGdWkLwMLlUaNQ8FtP2CTJdGDUv6Xoxrh19zIrJSkvT4Q/viewform?usp=pp_url&entry.1958421517=boilerplate-fullstack)
