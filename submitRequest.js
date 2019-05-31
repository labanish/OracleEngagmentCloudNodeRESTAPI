var request = require('request');
var source = require('./credentials.js');
var file = require('./filecontents.js');
const fs = require('fs');
var apiURL ="https://adc2-zadx-fa-ext.oracledemos.com//crmRestApi/resources/11.13.18.05/serviceRequests/";

var complaint = "Can we have someone come and fix this potholes?";
var phoneNumber = "+40725185083";


		request({
                	url: apiURL,
                	method: "POST",
                	auth: {
                        	user: source.user,
                        	pass: source.pass
                	},
			json:{
				Title: "Poor Road in Nakuru",
				ProblemDescription: "Candidate mentioned: " + "\"" +complaint+"\"" + "\nPlease contact candidate on " + phoneNumber
				/* Attachment : [{
    				"DatatypeCode": "FILE",    
					"FileName" : "Profile1.jpeg",
					"UploadedFileContentType": "image/png",
					//"FileContents" : file.FileContents,
   					"Description": "Potholes in the Middle of the road!",
					"Title": "Potholes"

				}]*/

			}

                	}, function (error, response, body){

                        	
                        	//console.log(error);
                        	//console.log(body);
                        	fs.writeFile("body.txt", body, function(err) {
    if(err) {
        return console.log(err);
    }
    console.log("The file was saved!");
}); 


                        	//let json = JSON.parse(body);
                        	

							//console.log(body.Title);
                        	//console.log(JSON.stringify(response));
                         	 //console.log(response);

				if (response.statusCode === 201){

					console.log("I submitted your details. We will be in touch soon!");

				} else if (response.statusCode === 401){

					console.log(response.statusCode +" :Check your credentials!");

				}else{

					console.log(response.statusCode +" :Check your code and run again!");
				}


				//sdk.reply("I submitted your details. We will be in touch soon!");
				//sdk.transition("anyMoreHelp");
				//sdk.keepTurn(true);
				//done();

			});