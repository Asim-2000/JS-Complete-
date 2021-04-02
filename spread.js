const first = [1, 2, 3]
const second = [4, 5, 6]

const combined = first.concat(second)

const combined2 = [...first,'a', ...second,'b']

console.log(combined)

console.log(combined2)



// we can easily clone an array with spread operator


const clone = [...first]

console.log(clone);


//We can also use spread operator on objects

const ob1 = { name: 'Asim' };

const ob2 = { job: 'Instructor' };

const combined3 = { ...ob1, ...ob2, location: 'Pakistan' };

console.log(combined3);


//cloning objects 

const ob_clone = { ...ob1 };

console.log(ob_clone);