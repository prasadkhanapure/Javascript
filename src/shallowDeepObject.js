const originalObject = {
  name: "First User",
  address: { city: "Pune" },
};

// Shallow Copy only copies the top level (Not deep level)
const shallowObject = { ...originalObject };

console.log("originalObject:", originalObject);
console.log("shallowObject:", shallowObject);

// right way to update nested field in Shallow Copy
const newObject = {
  ...shallowObject,
  name: "First User Updated!",
  address: { city: "Updated" },
};

console.log("newObject:", newObject);

// Deep Copy copies everything including nested objects
// structuredClone is a built-in JavaScript method to create a Deep Copy
// Always prefer structuredClone instead of lodash.cloneDeep  as it's built in JS API
// Extra bundle size for lodash 20-25 KB, but structuredClone needs 0 KB

const deepObject = structuredClone(originalObject);
deepObject.address.city = "Nagpur";

console.log("originalObject:", originalObject);
console.log("deepObject:", deepObject);
