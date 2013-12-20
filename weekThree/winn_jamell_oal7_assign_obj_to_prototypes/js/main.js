/**
 * Created by the JavaScript Development Team
 * Class: PWA
 * Goal: Goal7
 */

(function(){


    var jobs = [];
    var randomNum = Math.random()* name.length;
    var nameDisplay = document.querySelectorAll('row1')

    console.log()

        for (var i= 0, j=3; i<j; i++){

            var randName = name[Math.floor(Math.random() * name.length)];
            var randJob = jobs[Math.floor(Math.random()*jobs.length)];
            console.log(randJob)
        };

        var populateHTML = function(){
        };

})(); // end wrapper

/*
person = new Person;
person.name = name[Math.random()*name.length]
person.job = Math.random()*Person.jobs.length;
person.actions = Math.random()*Person.actions.length;
console.log(person)
*/