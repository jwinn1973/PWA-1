/**
 * Created by the JavaScript Development Team
 * Class: PWA
 * Goal: Goal7
 */

window.Person = Person;


var Person = function(name, action, job, row){
    Person.name = ['Jason', 'Jack', 'Cynthia', 'William', 'Sue'];
    Person.jobs = ['RingMaster', 'Juggler', 'Clown', 'Usher'];
    Person.actions = ['Practicing', 'Juggling', 'Smiling', 'Talking'];

    this.name = name;
    this.actions = action;
    this.job = job;
    this.row = row;

};