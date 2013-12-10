/**
 * Created by the JavaScript Development Team
 * Class: PWA
 * Goal: Goal7
 */

window.Person = Person;


var Person = function(name, action, job, row){
    Person.jobs = ['RingMaster', 'Juggler', 'Clown', 'Usher'];
    Person.actions = ['Practicing', 'Juggling', 'Smiling', 'Talking'];

    this.job = Math.floor(Math.random()*Person.length);


    console.log(this.job)
};