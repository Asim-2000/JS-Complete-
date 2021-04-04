demo_arr = [1, -1, 2, 3]

let sum = 0

for (let i of demo_arr) {
    sum += i;
}

console.log(sum);



 const initial_value = 0

const sum_2 = demo_arr.reduce(
    ((accumulator, cuurentValue) =>  accumulator + cuurentValue ),initial_value);

console.log(sum_2);
