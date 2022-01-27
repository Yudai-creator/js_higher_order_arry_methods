const animes = [
    {name: "Naruto", category:"Action", start:"1999", end:"2017"},
    {name: "One Piece", category:"Action", start:"1999", end:"2022"},
    {name: "Shingki no Kyojin", category:"Horror", start:"2009", end:"2022"},
    {name: "Death Note", category:"Fantasy", start:"2006", end:"2009"},
    {name: "Kimetsu no Yaiba", category:"Action", start:"2020", end:"2023"},
    {name: "Gundam", category:"Mecha", start:"1999", end:"2022"}
]

const ages = [33, 12, 20, 15, 5, 16, 25, 44, 61, 45, 22]


// classic loop
// for(let i = 0; i < animes.length; i++){
//     console.log(animes[i]);
// }

// Each of this array methods takes a callback function

// much nicer way of looping through an array 👇🏻

// forEach, takes a callback function
// the function needs an iterator, 
// animes.forEach(function(anime){
//     console.log(anime);
//     // access array properties
//     //console.log(anime.name)
// })


// filter, to filter things out the array

// classic way of doing it

// let canWatch = [];
// for(let i = 0; i < ages.length; i++){
//     if(ages[i] >= 18){
//         canWatch.push(ages[i]);
//     }
// }

// console.log(canWatch)

// we can do the same thing with filter

// const canWatch = ages.filter(function(age){
//     if(age >= 18){
//         return true;
//     }
// })

// with arrow functions
// syntax is: parameter =>(return) condition

// const canWatch = ages.filter(age => age >= 21);

// console.log(canWatch);

// Filter action animes

// const actionAnimes = animes.filter(anime => anime.category === 'Action');

// console.log(actionAnimes);

// Filter 90s animes

// const ninetiesAnimes = animes.filter(anime => (anime.start < 2000 && anime.start >= 1990));

// console.log(ninetiesAnimes);

// Filter animes thar lasted 3 years

// const lastedThree = animes.filter(anime => anime.end - anime.start === 3);

// console.log(lastedThree);

// map
// instead of filtering, you get a new array based on the condition you put in

// Create array of anime names

// const animeNames = animes.map(anime => anime.name);

// console.log(animeNames);

// // template literals?
// const testMap = animes.map( anime => `${anime.name} [${anime.start} - ${anime.end}`);

// console.log(testMap);
// // we can format the output array in any way we want

// const ageSquare = ages.map(age => Math.sqrt(age));

// console.log(ageSquare);

// sort
// sort animes by start year

// const sortedAnimes = animes.sort(function(a,b){
//     if(a.start > b.start){
//         return 1;
//     }else{
//         return -1;
//     }
// });

// const sortedAnimes = animes.sort((a, b) => (a.start > b.start ? 1 : -1));

// console.log(sortedAnimes);

// // Sort ages
// const sortAges = ages.sort((a,b) => a - b);

// console.log(sortAges);

// reduce, reducing an array to one value
// performing a concrete accumulative operation on its items to calculate a result value
// for example, obtain the sum of all elements in the array

// classic way

// let ageSum = 0;
// for(let i = 0; i < ages.length; i++){
//     ageSum += ages[i];
// }

// using reduce
// reduce takes 3 parameters, accumulator value(total), current arry item(age), and index(0)
// const ageSum = ages.reduce((total, age) => total + age, 0);

// console.log(ageSum);

// // Get total years for all animes

// const totalYears = animes.reduce((total, anime) => total + (anime.end - anime.start), 0);

// console.log(totalYears);

// Combine methods

const combined = ages.map(age => age*2).filter(age => age%3 === 0).sort((a, b) => a - b);

console.log(combined);
