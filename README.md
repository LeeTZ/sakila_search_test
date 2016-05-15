# sakila_search_test

a small web application built with NodeJS+Express+AngularJS+MySQL

## What is it? ##
A simple search + dropdown application, user could search through the list of countries with the search feature or use the  dropdown to select a country. The search and dropdown list will both have Name of the country (Count of customers). A list of users from the country selected would be retrived.

## How to Get Started ##

1. Install sakila db, which is provided under folder ```/sakila-db``` in this repository.
2. Set user name and password of MySQL in ```config.js```.
3. Run ```node bin/www``` .
4. Open the browser and the app is running on localhost:3000.

## Tools Used ##

- AngularJS
- Bootstrap
- Bower
- Chosen
- Express
- JQuery
- MySQL
- Node.js

## Implementaion Approaches ##
- Two API visiting DB is implemented. ```/customer/count``` retrieves all coutries with counts. To reduce the unnecessary queries. This API is called only once when loading the page. Later the dropdown-search is handled by front-end JS. ```/customer/list``` retrieves cutomer information from a specific country.
- For a graceful dropdown-search, I use Chosen plugin as a solution.
- The result is showing in a table, for easy of read.

