//PERSONAL INFO*****
var bio =
{
	"name": "Ayesha Ilyas",
	"role" : "Web Developer",

	"contacts" : {
		"mobile": "626-394-9359",
		"email":"ayesha.nizami@gmail.com",
		"github" : "aui3",
		"twitter" : "@ayeshanizami",
		"location" : "Irvine,CA"
	},

	"welcomeMessage" : "Awesome Front-End Web Developer in Training!",	
	"skills" : ["HTML", "CSS", "JavaScript", "JQuery", "Ajax", "Python"]	,
	"bioPic": "images/bio.jpg"
}

bio.displayBio=function()
{		
	var formattedName=bio["name"];
	var formattedRole=bio["role"];

	var formattedHTMLbioPic=HTMLbioPic.replace("%data%", bio["bioPic"]);
	$('#header').append(formattedHTMLbioPic);

	formattedName=HTMLheaderName.replace("%data%", formattedName);
	 formattedRole= HTMLheaderRole.replace("%data%",formattedRole);
	
	$("#header").append(formattedName);
	$("#header").append(formattedRole);
	

	$("#header").append(HTMLTopContacts);

	var formattedMobile=HTMLmobile.replace("%data%", bio["contacts"]["mobile"]);
	$("#topContacts").append(formattedMobile);
	$("#footerContacts").append(formattedMobile);

	var formattedEmail=HTMLemail.replace("%data%", bio["contacts"]["email"]);
	$("#topContacts").append(formattedEmail);
	$("#footerContacts").append(formattedEmail);

	var formattedTwitter=HTMLtwitter.replace("%data%", bio["contacts"]["twitter"]);
	$("#topContacts").append(formattedTwitter);
	$("#footerContacts").append(formattedEmail);

	var formattedGitHub=HTMLgithub.replace("%data%", bio["contacts"]["github"]);
	$("#topContacts").append(formattedGitHub);
	$("#footerContacts").append(formattedEmail);

	var formattedLocation=HTMLlocation.replace("%data%", bio["contacts"]["location"]);
	$("#topContacts").append(formattedLocation);
	$("#footerContacts").append(formattedEmail);
	

	$("#header").append(HTMLWelcomeMsg.replace("%data%", bio["welcomeMessage"]));
	if (bio["skills"].length!= 0)
	{

		$("#header").append(HTMLskillsStart); //add 'skills at a glance' header
		for (s in bio["skills"]){
			
			var skill=HTMLskills.replace("%data%",bio["skills"][s]);
			
			$("#skills").append(skill);
		}		
	}

}

//WORK HISTORY*****
var work ={
 "jobs" : [
 	{
 		"employer" : "UBL",
 		"title" : "Relationship Manager",
 		"dates" : "November 2004 -November 2007",
 		"description" : "Relationship manager Job description for Commercial Banking Group.",
 		"location" : "Karachi, Pakistan"
 	},
 	{	
 		"employer" : "Lowe & Rauf",
 		"title" : "Account Executive",
 		"dates" : "March 2008 - May 2009",
 		"description" : "Account Executive for Nestle Group",
 		"location" : "Houston, TX"
 	},
 	{	
 		"employer" : "HBL",
 		"title" : "Branch Manager",
 		"dates" : "February 2010 - December 2010",
 		"description" : "Bracnh Manger job description. The quick brown fox jumped over the lazy dog has all alphabets in the English language.",
 		"location" : "Pasadena, CA"
 	}

 ]
}
//WORK
work.displayWork=function(){
//check if skills are present in bio
	//update work section
	if (work["jobs"].length >0)
	{
		//$("#workExperience").append(HTMLworkStart);
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

//EDUCATION*****
var education= {
	"schools": [
		{
			"name" : "LUMS",
			"degree" : "BSc Honors",
			"dates" : "2004",
			"location" : "Lahore, Pakistan",
			"major" : "Computer Science",
			"url" :"www.lums.edu.pk"
			
		},
		
		{
			"name" : "LUMS1",
			"degree" : "BSc Honors",
			"dates" : "20041",
			"location" : "Lahore,  Pakistan",
			"major" : "Computer Science1",
			"url": "www.lums.edu.pk"

		}			
	],

	"onlineCourses" : [
		{
			"title" :  "Front End Web Development", 
			"school" : "Udacity",
			"dates" : "2014",
			"url" : "www.udacity.com"	
		},
		{
			"title" : "Data Science",
			"school" : "Coursera",
			"dates" : "2013",
			"url" : "www.coursera.com"	
		}

	]

}

education.displayEducation=function(){

	
	for( school in education.schools){

		$("#education").append(HTMLschoolStart);

		var formattedSchoolName=HTMLschoolName.replace("%data%",education.schools[school]["name"]);
		//$(".education-entry:last").append(formattedSchoolName);
		//alert(formattedSchoolName);

		var formattedSchoolDegree=HTMLschoolDegree.replace("%data%",education.schools[school]["degree"]);
		//$(".education-entry:last").append(formattedSchoolDegree);

		var formattedDates=HTMLschoolDates.replace("%data%",education.schools[school]["dates"]);
		//$(".education-entry:last").append(formattedDates);

		var formattedLocation=HTMLschoolLocation.replace("%data%",education.schools[school]["location"]);
		//$(".education-entry:last").append(formattedLocation);		

		var formattedMajor=HTMLschoolMajor.replace("%data%",education.schools[school]["major"]);
		//$(".education-entry:last").append(formattedMajor);
		 var formattedEducation=formattedSchoolName+formattedSchoolDegree+formattedDates+formattedLocation+formattedMajor;
		 //alert(formattedEducation);	
		 $(".education-entry:last").append(formattedEducation);	
	}
	
	$(".education-entry:last").append(HTMLonlineClasses);
	//alert(education.onlineCourses[0]["title"]);	
	for (online in education.onlineCourses)
	{
		var formattedTitle=HTMLonlineTitle.replace("%data%",education.onlineCourses[online]["title"]);
			
		var formattedSchool=HTMLonlineSchool.replace("%data%",education.onlineCourses[online]["school"]);
		
		var formattedDates=HTMLonlineDates.replace("%data%",education.onlineCourses[online]["dates"]);
		//alert(formattedDates);
		var formattedURL=HTMLonlineURL.replace("%data%",education.onlineCourses[online]["url"]);

		var formattedOnlineCourse=formattedTitle+formattedSchool+formattedDates+formattedURL;
		//alert(formattedOnlineCourse);
		$(".education-entry:last").append(formattedOnlineCourse);		
	}
}

//PROJECTS*****
var projects = 
{
 	"projects" : [
	 	{
	 		"title": "Asteroids ",
	 		"dates" : " March 2013",
	 		"description" : " Arcade game Asteroids",
	 		"images" : [
	 		 "images/projects.gif", "images/projects.gif"
	 		]
	 	},
	 	{
	 		"title": "CodePlayer",
	 		"dates" : "November 2014",
	 		"description" : "This is the description for Codeplayer which is a pretty neat project that i recently did and that also uses js and jquery",
	 		"images" : [
	 		 "images/projects.gif", "images/projects.gif"
	 		]

	 	}
 	]
}
//PROJECTS

projects.displayProjects= function(){

	if( projects["projects"].length> 0)
	{
		for (project in projects["projects"])
		{
			var title=HTMLprojectTitle;
			var dates=HTMLprojectDates;
			
			var description=HTMLprojectDescription;

			$("#projects").append(HTMLprojectStart);

			title=title.replace("%data%", projects["projects"][project]["title"]);
			dates=dates.replace("%data%",projects["projects"][project]["dates"]);
			description=description.replace("%data%",projects["projects"][project]["description"]);		
			
			var formattedProjectInfo= title+dates+description;
			
			$(".project-entry:last").append(formattedProjectInfo);

			for (image in projects["projects"][project]["images"])
			{
				var images=HTMLprojectImage;
				images=images.replace("%data%", projects["projects"][project]["images"][image]);
				$(".project-entry:last").append(images);
			}
		}
	}
}

function displaySkillChart(){
	var data = [42, 23, 15, 16, 8, 16];
	var label=["Html","CSS","JavaScript","JQuery","Ajax","Python"];

	var x = d3.scale.linear()
    .domain([0, d3.max(data)])
    .range([0, 420]);

	d3.select(".chart")
  	.selectAll("div")
    .data(data)
  	.enter().append("div")
    .style("width", function(d) { return x(d) + "px"; })
    .text(function(d,i) { return label[i]; });

}

//POPULATE THE RESUME WITH JSON INFO*****
bio.displayBio();
projects.displayProjects();
work.displayWork();
education.displayEducation();
displaySkillChart();


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

//MAP
$(mapDiv).append(googleMap);