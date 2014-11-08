
var bio={
		"name": "Ayesha Ilyas",
		"role" : "Web Developer",
		
		"contacts" : {
			"mobile": "626-394-9359",
			"email":"a@kk.com",
			"github" : "aui3",
			"twitter" : "@ayeshanizami",
			"location" : "Irvine"
		},
		
		"welcomeMessage" : "Awesome Front-End Web Developer in Training!",	
		"skills" : ["HTML", "CSS", "JavaScript", "JQuery"]	,
		"bioPic": "www.mypicture.com"
		}

var work ={
 "jobs" : [
 	{
 		"employer" : "UBL",
 		"title" : "Relationship Manager",
 		"dates" : "November 2004 -November 2007",
 		"description" : "Relationship manager Job description for Commercial Banking Group."
 	},
 	{	
 		"employer" : "Lowe & Rauf",
 		"title" : "Account Executive",
 		"dates" : "March 2008 - May 2009",
 		"description" : "Account Executive for Nestle Group"
 	},
 	{	
 		"employer" : "HBL",
 		"title" : "Branch Manager",
 		"dates" : "February 2010 - December 2010",
 		"description" : "Bracnh Manger job description. The quick brown fox jumped over the lazy dog has all alphabets in the English language."
 	}

 ]
}	

var education= {
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

var projects = {
 	"projects" : [
	 	{
	 		"title": "Asteroids ",
	 		"dates" : " March 2013",
	 		"description" : " Arcade game Asteroids",
	 		"images" : [
	 		 "image1", " image2 "
	 		]
	 	},
	 	{
	 		"title": "CodePlayer",
	 		"dates" : "November 2014",
	 		"description" : " ",
	 		"images" : [
	 		 "image2 ", "image3 "
	 		]

	 	}
 	]
}

//SKILLS
if (bio["skills"].length!= 0)
{
	
	$("#header").append(HTMLskillsStart); //add 'skills at a glance' header
	var skillsdata="";

	for (s in bio["skills"]){

		skillsdata=skillsdata.concat(bio["skills"][s]);
		skillsdata=skillsdata.concat("	");
	};

	HTMLskills=HTMLskills.replace("%data%", skillsdata);
	$("#skills").append(HTMLskills);

}


//WORK
function displaywork(){
//check if skills are present in bio
	//update work section

	if (work["jobs"].length >0)
	{
		for( job in work["jobs"])

		{
			var employer=HTMLworkEmployer;
			var title=HTMLworkTitle;
			var dates=HTMLworkDates;
			//var location=HTMLworkLocation;
			var description=HTMLworkDescription;

			$("#workExperience").append(HTMLworkStart);

			employer=employer.replace("%data%", work["jobs"][job]["employer"]);
			title=title.replace("%data%",work["jobs"][job]["title"]);
			dates=dates.replace("%data%",work["jobs"][job]["dates"]);
			description=description.replace("%data%",work["jobs"][job]["description"]);		
			//location=location.replace("%data",work["jobs"][job]["location"]);
			var formattedWorkInfo= employer+title+dates+description;
			
			$(".work-entry:last").append(formattedWorkInfo);

		}

	}
}


displaywork();

//PROJECTS

projects.displayProjects= function(){



}

//internationalise
//$("#main").append(internationalizeButton);

function inName(nameString){

	var tokens=[];
	alert(nameString);
	tokens=nameString.trim().splice(" ");
	tokens[1]=tokens[1].toUpperCase();
	var len= tokens[0].length;
	tokens[0]=tokens[0][0].toUpperCase() + tokens[0].splice(1,len);

	return tokens[0] + " " + tokens[1];
}



$(document).click(function(loc){
	logClicks(loc.pageX,loc.pageY);

});