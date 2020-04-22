const createPerson = (name, age) => {
  // your code here
  return personObj = {name,age};
};

const getName = object => {
  // your code here
  return object.name;
};

const getProperty = (property, object) => {
  // your code here
  return object[property];
};

const hasProperty = (property, object) => {
  // your code here
  return object.hasOwnProperty(property);
};

const isOver65 = person => {
  // your code here
  if (person.age > 65) {
    return true;
  }else{
    return false;
  }
};

const getAges = people => {
  // your code here
  return people.map(get => get.age);
};

const findByName = (name, people) => {
  // your code here
  return people.find(person => person.name === name);
};

const findHondas = cars => {
  // your code here
  return cars.filter(car => car.manufacturer === "Honda");
};

const averageAge = people => {
  // your code here
  return people.reduce((a,b) => a + b.age, 0) / people.length;
};

const createTalkingPerson = (name, age) => {
  return {
    name: name,
    age: age,
    introduce: stranger => {
      return `Hi ${stranger}, my name is ${name} and I am ${age}!`;
    }
  };
};

  module.exports = {
  createPerson,
  getName,
  getProperty,
  hasProperty,
  isOver65,
  getAges,
  findByName,
  findHondas,
  averageAge,
  createTalkingPerson
  };
  