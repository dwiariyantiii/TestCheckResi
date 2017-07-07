var express = require('express');
var router = express.Router();
var con = require('./connection');


router.post('/transaction/track',function(req,res)
{
    var data = {
            noawb : req.body.noawb     
        }
        
        con.query( 'SELECT * FROM transaction WHERE NoAWB =' + data.noawb, function (err, result) {
        if(err)
        {
            res.json(500,err);
        }
        else
        {
         
            var returndata = { NoAWB: "", result : [] ,lastdata : []};
            for(var i = 0 ; i < result.length; i++)
            {
             
                var data = {
                    No : i+1,
                    NoAWB : result[i].NoAWB,
                    Services : result[i].Services,
                    Origin : result[i].Origin,
                    Destination : result[i].Destination,
                    Consignee : result[i].Consignee,
                    DateReceived : result[i].DateReceived,
                    Receiver :  result[i].Receiver,
                    Status :  result[i].Status,               
                }
                returndata.NoAWB = result[i].NoAWB;
                returndata.result.push(data);
            
            }

            if(returndata.result.length != 0)
            {
                returndata.lastdata.push(returndata.result[returndata.result.length-1])
                res.json({"success": true , "obj": returndata});
            }
            else
            {
                for(var i = 0 ; i < result.length; i++)
                {
                    
                    var data = {
                        No : i+1,
                        NoAWB : result[i].NoAWB,
                        Services : result[i].Services,
                        Destination : result[i].Destination,
                        Consignee : result[i].Consignee,
                        DateReceived : "",
                        Receiver :  "",
                        Status :  result[i].Status,               
                    }
                    returndata.NoAWB = result[i].NoAWB;
                    returndata.result.push(data);
                     
                }
                res.json({"success": true , "obj": returndata});
            }
            
            }
        })
       
});

module.exports = router;