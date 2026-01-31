const firstObject = {
  name: "First User",
  age: 30,
};
console.log(firstObject);

const secondObject = Object.create({ name: "Second User", age: 28 });
console.log(Object.getPrototypeOf(secondObject));

// Object keys & values access
Object.entries(firstObject).forEach((key,value)=>{
  console.log(key,value);
})

for (let key in firstObject) {
  console.log("value: ", firstObject[key]);
  console.log("key: ", key);
}

// Object.create sets properties on the prototype, so logging the object directly appears empty. 
// The values are accessible via prototype lookup or Object.getPrototypeOf