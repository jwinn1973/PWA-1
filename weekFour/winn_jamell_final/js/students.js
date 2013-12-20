

function Student(name, address, city, state, gpa){
    this.name = name;
    this.address = address;
    this.city = city;
    this.state = state;
    this.gpa = gpa;
};


Student.prototype.calculateGpa = function(gpa){
    var sum = gpa[0] + gpa[1] + gpa[2];
    var totalGpa = sum / gpa.length;
    total = Math.round(totalGpa*100)/100
    return total;

};