var bio =
{
	"name": "Ayesha Ilyas",
	"role" : "Web Developer",

	"contacts" : {
		"mobile": "626-394-9359",
		"email":"a@kk.com",
		"github" : "aui3",
		"twitter" : "@ayeshanizami",
		"location" : "Irvine,CA"
	},

	"welcomeMessage" : "Awesome Front-End Web Developer in Training!",	
	"skills" : ["HTML", "CSS", "JavaScript", "JQuery"]	,
	"bioPic": "images/fry.jpg"
}

bio.displayBio=function(){	//SKILLS
	
	var formattedName=bio["name"];
	var formattedRole=bio["role"];

	formattedName=HTMLheaderName.replace("%data%", formattedName);
	//console.log(HTMLheaderName);


	 formattedRole= HTMLheaderRole.replace("%data%",formattedRole);
	$("#header").prepend(formattedRole);
	$("#header").prepend(formattedName);

	
 	

	var formattedMobile=HTMLmobile.replace("%data%", bio["contacts"]["mobile"]);
	$("#topContacts").append(formattedMobile);

	var formattedEmail=HTMLemail.replace("%data%", bio["contacts"]["email"]);
	$("#topContacts").append(formattedEmail);

	var formattedTwitter=HTMLtwitter.replace("%data%", bio["contacts"]["twitter"]);
	$("#topContacts").append(formattedTwitter);

	var formattedGitHub=HTMLgithub.replace("%data%", bio["contacts"]["github"]);
	$("#topContacts").append(formattedGitHub);

	var formattedLocation=HTMLlocation.replace("%data%", bio["contacts"]["location"]);
	$("#topContacts").append(formattedLocation);

	var formattedHTMLbioPic=HTMLbioPic.replace("%data%", bio["bioPic"]);
	$('#header').append(formattedHTMLbioPic);

	if (bio["skills"].length!= 0)
	{


		$("#header").append(HTMLskillsStart); //add 'skills at a glance' header
		
		/*var skillsdata="";

		for (s in bio["skills"]){

			skillsdata=skillsdata.concat(bio["skills"][s]);
			skillsdata=skillsdata.concat("	");
		};

		HTMLskills=HTMLskills.replace("%data%", skillsdata);
		$("#skillsH3").append(HTMLskills);

		*/
		//try another way of making skills
		//alert($("#skills").html());
		for (s in bio["skills"]){
			
			var skill=HTMLskills.replace("%data%",bio["skills"][s]);
			
			$("#skills").append(skill);
		}		
	}

}

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


var education= {
	"schools": [
		{
			"name" : "LUMS",
			"degree" : "BSc Honors",
			"dates" : "2004",
			"location" : "Lahore, Pakistan",
			"major" : "Computer Science"
			
		},
		
		{
			"name" : "LUMS1",
			"degree" : "BSc Honors",
			"dates" : "20041",
			"location" : "Lahore,  Pakistan",
			"major" : "Computer Science1"

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

	/*
	var HTMLonlineClasses = "<h3>Online Classes</h3>";
var HTMLonlineTitle = "<a href='#'>%data%";
var HTMLonlineSchool = " - %data%</a>";
var HTMLonlineDates = "<div class='date-text'>%data%</div>";
var HTMLonlineURL = "<br><a href='#'>%data%</a>";
	*/	
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

var projects = {
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


bio.displayBio();
projects.displayProjects();
work.displayWork();
education.displayEducation();

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