// 1.
const anwser1 = [];

for (const factor of factories) {
 const countList = {};
  countList.name = factor.name;
  countList.count = factor.employees.length;
  anwser1.push(countList);
}
console.log('answer1: ',anwser1);

// 2.
const anwser2 = [];
const employees = [];
factories.forEach(factor => employees.push(...factor.employees));
const countList = {};
for (const employee of employees) { 
  if (!countList[employee]) countList[employee] = 0;
  countList[employee] += 1;    
}
for (const name of Object.keys(countList)) {
 const tempList = {};
  tempList.employee = name;
  tempList.count = countList[name];
  anwser2.push(tempList);
};
console.log(anwser2);

// 3.
const anwser3 = [];
for (const factor of factories) {
 const orderList = {};
  orderList.name = factor.name;
  orderList.employees = factor.employees.sort();
 anwser3.push(orderList);
};

console.log(anwser3);

//4.
const fullTime = 0;
const midTime  = 0;

const halfTime = 0;
let answer4 = 0;

for (const employee of employees) {
 const target = employeeType.find(val => val.id === employee.type);
  const begin = +target.work_begin.split(':')[0];
  const end = target.work_end.split(':')[0] === '00' ? 24 : +target.work_end.split(':')[0]; 
  answer4 += end - begin; 
}

console.log(answer4);
