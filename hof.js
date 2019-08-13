//problem 1: repeat function

function repeat(fn, n) {
    for (n; n > 0; n--) {
        fn();
    }
}
function hello() {
    console.log('Hello world');
}
function goodbye() {
    console.log('Goodbye world');
}

repeat(hello, 5);
repeat(goodbye, 5);


//problem 2: filter function
//with Bonus

function filter(arr, fn) {
    let newArray = [];
    arr.forEach(x=>fn(x) ? newArray.push(x) : x);
    return newArray;
}
function filterAlt(arr, fn) {
    arr.forEach(x=>fn(x) ? console.log(x) : x);
}

const myNames = ['Rich', 'Joe', 'Bhaumik', 'Ray'];
const filteredNames = filterAlt(myNames, function(name) {
    return name[0] === 'R';
});

//console.log(filteredNames) // => ['Rich', 'Ray']


//problem 3: functions as returned values - hazard warning function
//With Bonus!

function hazardWarningCreator(typeOfWarning) {
    let warningCounter = 0;

    return function(location) {
        warningCounter++;
        console.log(`DANGER! There is a ${typeOfWarning} hazard at ${location}`);
        console.log(`The ${typeOfWarning} hazard alert has triggered ${warningCounter === 1 ? `${warningCounter} time` : `${warningCounter} times`} today!`);
    }
}

const rocksWarning = hazardWarningCreator('Rocks on the Road');
rocksWarning('Main St and Pacific Ave');
rocksWarning('Centinela Ave and Olympic Blvd');
rocksWarning('42nd and Washington');


//problem 4: Turtle time!

function turtleTime(arr) {
    let results = [];

    for (let i = 0; i < arr.length; i++) {
        results.push(arr[i].filter(v=> v > 0));
    }

    results = results.filter(x=> x.length !== 0);
    results = results.map(x=> x.length === 2 ? x[0] + x[1] : x[0]);
    results.forEach((x, i) => console.log(`Movement # ${i+1}: ${x === 1 ? `${x} step` : `${x} steps`}`));
}

turtleTime([[0, 0], [0, 5], [-1, -3], [-3, 1], [2, -4], [3, 2]]);


//problem 5: decoding with reduce

function stringMutilator(str) {
    let arr = str.split(' ');
    arr.unshift('');
    return mutilatedString = arr.reduce((a, b)=> b.length !== 3 ? a += b[b.length - 1] : a += ' ');
}

console.log(stringMutilator('noggin oreo the moon time tele steed his tent apollo her lives though shoo tofu budapest'));









