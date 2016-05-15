var express = require('express');
var router = express.Router();

/* POST method for getting country counts */
router.post('/count', function(req, res) {
   connection.query('select country,count(country) from customer_list group by country',function(err,rows){
        if(err)
            console.log("Error in getting country counts.");
        res.json(rows);
   });
});

/* POST method for getting customers from a specific country */
router.post('/list', function(req, res) {
   var countryQ = req.body.countryQuery;


   connection.query('select customer.customer_id, customer.first_name, customer.last_name, customer.email, customer_list.address, customer_list.phone from customer, customer_list where (customer_list.country="' + countryQ + '" and customer.customer_id = customer_list.ID)',function(err,rows){
        if(err)
            console.log("Error in getting cousumer lists.");
        res.json(rows);
   });
});

module.exports = router;
