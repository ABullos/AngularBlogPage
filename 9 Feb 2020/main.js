/*console.log('hello World');
console.warn('hello world');
console.error('hello world');

let x;
const y;
var b;

let x = [1,2,3,4,5,6,7,8,9,10];


for(let x =0; x< x.length; x++){
    console.log('Number' $(y[x]) );
}
numArray.forEach (function(x) {
    console.log(x);
}


let x = numArray.length;
Int ctr =0;
while (ctr ! =x){
    console.log(numArray[ctr]);
    ctr++;

}

class person {
    constructor(age, name){
        this.name = name;
        this.age.name;
    }
    getName(){
        console.log(this.name);
};
    }
    
    let steve = new person('steve',43);
    steve.getName();

    */
    document.getElementById('xInput')
  document.getElementById('btnClick').addEventListener('click', updateValue);

  function updateValue(){
      let x =document.getElementById('yInput').value;
      let y =document.getElementById('xInput').value
      let output = document.getElementById('output');

      output.innerHTML = parseInt(x) + parseInt(y);

  }

person = {
    name: "John",
    age: "26",
    address: "AUP",
    gender: "M"
}
console.log(person.name);
 

 let persomData =[
     
    {
        id: 1,
        name: "John",
        age:"18",
        schoolLevel: "Highschol"

    },
    {
        id: 2,
        name: "Jane",
        age:"22",
        schoolLevel: "College"

    },
    {
        id: 3,
        name: "Justin",
        age: "25",
        schoolLevel: "College"
        
    }

 ];

 let collegeStudents = personData.filter(x =>{
return x.schoolLevel=="College";
 });
 console.log(collegeStudents);

 let jsDOM = {
    btn: document.getElementById(`btnClick`),
    Name: document.getElementById(`name`),
    age: document.getElementById(`age`),
    nameOutput : document.getElementById(`nameOutput`),
    ageOutput : document.getElementById('ageOutput')

};

let jsFunc = {
    updateValue : () => {
        jsDOM.nameOutput.innerHTML =  `Name: ${jsDOM.name.value} `;
        jsDOM.ageOutput.innerHTML = `Age: ${jsDOM.age.value}` ;
    }
}
jsDOM.btn.addEventListener('click',jsFunc.updateValue);