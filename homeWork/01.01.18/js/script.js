
let Person = {
    first_name:'Moshe',
    last_name:'Michalovich', 
    address:'Ben Yehuda 51', 
    grades:[] , 
    addGrade: function(grade){
        this.grades.push(grade);
    },
    getGradesAvg: function(){
        return this.grades.reduce( (num1 , num2 )=>{
            return (num1 + num2)/2 ;
        });
    },
    toString : function(){
        return `
            Full name: ${this.first_name }  ${this.last_name }
            Address: ${this.address}
            Grades : ${this.grades}
            Grades Average : ${this.getGradesAvg()}
         `;
    }  
}


