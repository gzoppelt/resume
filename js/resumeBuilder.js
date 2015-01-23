var work = {
    "jobs": [
        {   "employer": "Autohaus Berndt GmbH & Co. KG",
            "title": "IT Administrator",
            "location": "Dresden",
            "dates": "1994-2002",
            "description": "Maintaining IT infrastructure and minor programming tasks"
        },
        {   "employer": "Autohaus Schmolck GmbH & Co. KG",
            "title": "IT Administrator",
            "location": "Emmendingen",
            "dates": "2003-2015",
            "description": "It started with maintaining IT infrastructure and changed later into programming interfaces between different software solutions."
        },
        {   "employer": "Z-Bit Solutions Limited",
            "title": "Programmer",
            "location": "London",
            "dates": "since 2013",
            "description": "AngularJS, node.js, Laravel (PHP)"
        }
    ]
};
work.display = function () {
    for (var i in work.jobs){
        $("#workExperience").append(HTMLworkStart);
        $(".work-entry:last").append(
            HTMLworkEmployer.replace('%data%', work.jobs[i].employer)
            +  HTMLworkTitle.replace('%data%', work.jobs[i].title)
        );
        $(".work-entry:last").append(HTMLworkLocation.replace('%data%', work.jobs[i].location));
        $(".work-entry:last").append(HTMLworkDates.replace('%data%', work.jobs[i].dates));
        $(".work-entry:last").append(HTMLworkDescription.replace('%data%', work.jobs[i].description));
    }
};
work.display();

var projects = {
    "projects": [
            {
                "title": "prOpr",
                "dates": "2015",
                "description": "Property Management, work in progress.",
                "images": [
                    "images/197x148.gif",
                    "images/197x148.gif"
                ]
            },
            {
                "title": "(A)Cos",
                "dates": "2015 - 2016",
                "description": "AngularJS Care Online Schnittstelle",
                "images": [
                    "images/197x148.gif",
                    "images/197x148.gif"
                ]
            }
    ]
};
projects.display = function () {
    for (var i in projects.projects) {
        var pro = projects.projects[i];
        $("#projects").append(HTMLprojectStart);
        $(".project-entry:last").append(HTMLprojectTitle.replace('%data%', pro.title));
        $(".project-entry:last").append(HTMLprojectDates.replace('%data%', pro.dates));
        $(".project-entry:last").append(HTMLprojectDescription.replace('%data%', pro.description));
        for (var j in pro.images) {
            $(".project-entry:last").append(HTMLprojectImage.replace('%data%', pro.images[j]));
        }
    }
};
projects.display();

var bio = {
    "name": "Günther Zoppelt",
    "role": "Web Developer",
    "welcomeMessage": "Welcome to all my friends!",
    "contacts": {
        "mobile": "+44 790 8144 8xx",
        "email": "gzoppelt1@gmail.com",
        "github": "https://github.com/gzoppelt",
        "twitter": "You do not catch me there!",
        "location": "Nash Mills, Hertfordshire, U.K."
    },
    "bioPic": "images/fry.jpg",
    "skills": [
        "awesomeness",
        "programming",
        "teaching",
        "JS"
    ]
};
bio.display = function () {
    $('#header').append(HTMLheaderName.replace('%data%', bio.name));
    $('#header').append(HTMLheaderRole.replace('%data%', bio.role));
    $('#header').append(HTMLbioPic.replace('%data%', bio.bioPic));
    $("#header").append(HTMLskillsStart);
    for(var i in bio.skills){
        $("#skills").append(HTMLskills.replace('%data%', bio.skills[i]));
    }
    $('#topContacts').append(HTMLmobile.replace('%data%', bio.contacts.mobile));
    $('#topContacts').append(HTMLemail.replace('%data%', bio.contacts.email));
    $('#topContacts').append(HTMLgithub.replace('%data%', bio.contacts.github));
    $('#topContacts').append(HTMLtwitter.replace('%data%', bio.contacts.twitter));
    $('#topContacts').append(HTMLlocation.replace('%data%', bio.contacts.location));

};
bio.display();

var education = {
    "schools": [
        {
            "name": "TU Dresden",
            "location": "Dresden",
            "degree": "none",
            "majors": [
                "Mathematics"
            ],
            "dates": "1978-1979",
            "url": "http://tu-dresden.de/en"
        },
        {
            "name": "TU Dresden",
            "location": "Dresden",
            "degree": "Master",
            "majors": [
                "Informatics"
            ],
            "dates": "1984-1988",
            "url": "http://tu-dresden.de/en"
        }
    ],
    "onlineCourses": [
        {
            "title": "Nanodegree Web Developer",
            "school": "Udacity",
            "dates": "2015",
            "url": "https://www.udacity.com/course/nd001"
        }
    ]
};
education.display = function () {
    $('#education').append(HTMLschoolStart);
    for (var i in education.schools) {
        $('.education-entry:last').append(HTMLschoolName.replace('%data%', education.schools[i].name));
        $('.education-entry:last').append(HTMLschoolLocation.replace('%data%', education.schools[i].location));
        $('.education-entry:last').append(HTMLschoolDegree.replace('%data%', education.schools[i].degree));
        for (var j in education.schools[i].majors){
            $('.education-entry:last').append(HTMLschoolMajor.replace('%data%', education.schools[i].majors[j]));
        }
        $('.education-entry:last').append(HTMLschoolDates.replace('%data%', education.schools[i].dates));
        $('.education-entry:last').append(HTMLschoolUrl.replace('%data%', education.schools[i].url));
    };

};
education.display();

$(document).click(function(loc) {
    logClicks(loc.pageX, loc.pageY);
});

//$("#main").append('<button onclick="inName()">Internationalize</button>');
//$("#main").append(internationalizeButton);

function inName(){
    var c = [];
    var a = bio.name.split(" ");
    //first names
    for (var i=0; i<a.length-1; i++){
        var b = a[i].split('');
        for (j in b) b[j] = b[j].toLowerCase();
        b[0] = b[0].toUpperCase();
        c.push(b.join(''));
    }
    //last name (i == a.length - 1)
    b = a[i].split('');
    for (i=0; i< b.length; i++) b[i] = b[i].toUpperCase();
    c.push(b.join(''));
    return c.join(" ");
}

//google.maps.event.addDomListener(window, 'load', initialize);
