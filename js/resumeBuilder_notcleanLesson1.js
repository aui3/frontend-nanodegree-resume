
var formattedName="Ayesha Ilyas";
var formattedRole="Web Developer";

formattedName=HTMLheaderName.replace("%data%", formattedName);
//console.log(HTMLheaderName);


 formattedRole= HTMLheaderRole.replace("%data%",formattedRole);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

var bio={
		"name": "Ayesha Ilyas",
		"role" : "Web Developer",
		
		"contactInfo" : {
			"phone": "6263949359",
			"email":"a@kk.com",
			"github" : "aui3",
			"twitter" : "@ayeshanizami",
			"location" : "Irvine"
		},
		
		"bipPic": "www.mypicture.com",
		"welcomeMessage" : "Awesome Front-End Web Developer in Training!",
		"skils" : ["HTML", "CSS", "JavaScript", "JQuery"]	
		};
//$("#main").append(bio.name);

var work ={};

work["position"] = "Student";
work["employer"] = "Udacity";
work["years"] = 3;
work["city"] = "Mountain View";
	
/%var education={};

education.name="LUMS";
education.years=4;
education.city= "Lahore";

$("#main").append(education.name);
$("#main").append(work["position"]);
*/
var educationjson= {
	"schools": [
		{
			"name" : "LUMS",
			"major" : "Computer Science",
			"minor" : ["Mathematics", "Economics"],
			"location" : "Lahore, Pakistan",
			"dates" : "2004",
			"url" : "www.lums.edu.pk"

		},
		
		{
			"name" : "LUMS1",
			"major" : "Computer Science1",
			"minor" : ["Mathematics1", "Economics1"],
			"location" : "Lahore1,  Pakistan1",
			"url" : "www.lums.edu.pk",
			"dates" : "20041",
			"url" : "www.fake.com"

		}			
	],

	"onlineCourses" : [
		{
			"name" :  "Udacity", 
			"url" : "www.fake.com",
			"major" : "Computer Science",
			"minor" : "Front End Web Development",
			"city" : "Mountain View, CA",
			"dates" : "2015",
			"url" : "wwdatesw.udacity.com"	
		},
		{
			"name" : "Coursera",
			"major" : "Computer Science",
			"minor" : "Data Science",
			"city" : "USA",
			"dates" : "2015",
			"url" : "www.coursear.com"	
		}

	]

}
