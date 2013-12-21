/*
PWA-1
Jamell Winn
Final
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

//  Console Logs
    console.log('=================== Student One ===============')
    console.log('Name: ',studentOne.name);
    console.log('Address: ', studentOne.address);
    console.log('City: ', studentOne.city);
    console.log('State: ',studentOne.state);
    console.log('GPA: ',studentOne.gpa);
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
   console.log('=================== Student Two ===============')
   console.log('Name: ',studentTwo.name);
   console.log('Address: ', studentTwo.address);
   console.log('City: ', studentTwo.city);
   console.log('State: ',studentTwo.state);
   console.log('GPA: ',studentTwo.gpa);
   studentGpaTwo = Student.prototype.calculateGpa(studentTwo.gpa);
   console.log('Student GPA Average: ',studentGpaTwo);

    var studentThree = new Student(
        name = 'Master Yoda',
        address = '30 SimonBock Ave',
        city = 'Wilkes Barre',
        state = 'PA',
        gpa = [3.9, 3.8, 3.9]
    );
// Console Logs
     console.log('=================== Student Three ===============')
     console.log('Name: ',studentThree.name);
     console.log('Address: ', studentThree.address);
     console.log('City: ', studentThree.city);
     console.log('State: ',studentThree.state);
     console.log('GPA: ',studentThree.gpa);
     studentGpaThree = Student.prototype.calculateGpa(studentThree.gpa);
     console.log('Student GPA Average: ',studentGpaThree);


    students.push(studentOne, studentTwo, studentThree);
    studentGpa.push(studentGpaOne, studentGpaTwo, studentGpaThree);

    //console.log(students[2].name);

    var i = -1;

    function runProg(){
            i++
            //console.log('running')
            if(i > students.length-1){
                endProg();
                return false;
            } // end if statement
            else{
                var name = document.getElementById('name');
                name.innerHTML = "Name: " + students[i].name;
                var address = document.getElementById('address')
                address.innerHTML = "Address: " + students[i].address;
                var gpa = document.getElementById('gpa');
                gpa.innerHTML = "GPA: " + students[i].gpa;
                var date = document.getElementById('date');
                date.innerHTML = "Date: " + getDate();
                var gpaavg = document.getElementById('gpaavg');
                gpaavg.innerHTML = "Avg GPA: " + studentGpa[i];
                //console.log(students[i])
                } // end else
 }; // end runProg function

//Use Date Method to add date to each student
    function getDate(){
        var d = new Date();
        var day = d.getDate();
        var month = d.getMonth();
        var year = d.getFullYear();
        date = month + "-" + day + "-" + year;
        return date
    }; // end Get Date

// This function will end the prog.
    function endProg(){
        btn.innerHTML = "Done";
        btn.removeEventListener('click', runProg, false)

    }// end endProg

    btn.addEventListener('click',runProg ,false);

})();  // end wrapper