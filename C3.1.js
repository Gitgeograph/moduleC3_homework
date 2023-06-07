const person = {
  city: 'Moscow',
  name: 'Ivan',
  age: 25  
}

function printObject (obj) {
  for (let prop in obj) {
    if (obj.hasOwnProperty(prop)) {
      console.log(prop, obj[prop]);
    }
  }
}


printObject(person)