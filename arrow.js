// const square = function (number) {
//     return number * number;
// }

const square = number => number * number;

const jobs = [
    { id: 1, isActive: true },
    { id: 2, isActive: true },
    { id: 3, isActive: false },
    { id: 4, isActive: false },   
]

active_jobs = jobs.filter(job => job.isActive);

console.log(active_jobs)