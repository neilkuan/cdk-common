const request = require('sync-request');

var policy = request('GET', 'https://raw.githubusercontent.com/neilkuan/aws-somethings/main/policies.json').getBody('utf-8');


var policyJson = JSON.parse(policy);

policyJson.forEach( v => {
    console.log(v);
});