const person = {
  city: 'Moscow',
  name: 'Ivan',
  age: 25  
}


function checkPropInObj (str, obj) {
  return (str in obj);
}


console.log(checkPropInObj('name', person))
console.log(checkPropInObj('str', person))