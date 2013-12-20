/*
PWA-1
Jamell Winn
*/

(function(){

    var btn = document.getElementById('buttonred');
    students = [];
    studentGpa = [];


// Students
    var studentOne = new Student( // instance of the Student Class
        name = 'Akakin Skywalker',
        address = '68 SimonBock Ave',
        city = 'Wilkes Barre',
        state = 'PA',
        gpa = [2.8, 2.5, 3.9]
    );



// Console Logs
// console.log('=================== Student One ===============')
// console.log('Name: ',studentOne.name);
// console.log('Address: ', studentOne.address);
// console.log('City: ', studentOne.city);
// console.log('State: ',studentOne.state);
// console.log('GPA: ',studentOne.gpa);
   studentGpaOne = Student.prototype.calculateGpa(studentOne.gpa);
   console.log('Student GPA Average: ',studentGpaOne);

    var studentTwo = new Student(
        name = 'Obi Wan',
        address = '12 SimonBock Ave',
        city = 'Wilkes Barre',
        state = 'PA',
        gpa = [3.8, 3.9, 3.7]
    );
// Console Logs
// console.log('=================== Student Two ===============')
// console.log('Name: ',studentTwo.name);
// console.log('Address: ', studentTwo.address);
// console.log('City: ', studentTwo.city);
// console.log('State: ',studentTwo.state);
// console.log('GPA: ',studentTwo.gpa);
   studentGpaTwo = Student.prototype.calculateGpa(studentTwo.gpa);
// console.log('Student GPA Average: ',studentGpaTwo);

    var studentThree = new Student(
        name = 'Master Yoda',
        address = '30 SimonBock Ave',
        city = 'Wilkes Barre',
        state = 'PA',
        gpa = [3.9, 4.0, 4.0]
    );
// Console Logs
// console.log('=================== Student Three ===============')
// console.log('Name: ',studentThree.name);
// console.log('Address: ', studentThree.address);
// console.log('City: ', studentThree.city);
// console.log('State: ',studentThree.state);
// console.log('GPA: ',studentThree.gpa);
   studentGpaThree = Student.prototype.calculateGpa(studentThree.gpa);
// console.log('Student GPA Average: ',studentGpaThree);


    students.push(studentOne, studentTwo, studentThree);
    studentGpa.push(studentGpaOne, studentGpaTwo, studentGpaThree)
    //console.log(students.length);
    var i = 0;

    function runProg(){
            i++
            console.log('running')
            if(i > students.length){
                endProg();
                return false;
            } // end if statment
            else{
                    getStudent();
               //;
               //var address = document.getElementById('address');
               //address.innerHTML = "Address: " + students[x].address.street + " " + students[x].address.city + ", " + students[x].address.state;
               //var gpa = document.getElementById('gpa');
               //gpa.innerHTML = "GPA: " + students[x].gpa[0] + ", " + students[x].gpa[1] + ", " + students[x].gpa[2];
               //var gpaavg = document.getElementById('gpaavg');
               //gpaavg.innerHTML = "Avg GPA: " +  Math.round(avggpa*100)/100;
            //Use Date Method to add date to each student
               //var d = new Date();
               //var day = d.getDate();
               //var month = d.getMonth();
               //var year = d.getFullYear();
               //var date = document.getElementById('date');
               //date.innerHTML = "Date: " + month + "-" + day + "-" + year;
               //return x;
            }
   }; // end runProg function

    function getStudent (){
        for (var i = 0; i < 0; i++){
                var name = document.getElementById('name');
                name.innerHTML = "Name: " + students[i].name;
                console.log(students[0].name)
        }
    }; // end get student

    function endProg(){
        console.log('ending')
        var name = document.getElementById('name');
        name.innerHTML = "Done!   Please Refresh"
        btn.innerHTML = "Done";
        btn.removeEventListener('click', runProg, false)
    }// end endProg


    btn.addEventListener('click',runProg ,false);
// Click Event for Next Button

    //{



//    };




})();  // end wrapper

