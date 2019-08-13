function filter(arr, fn) {
    // TASK: Define your function here
    let newArray = [];
    arr.forEach(x=>fn(x) ? newArray.push(x) : x);
    return newArray;
}
//Bonus credit done!
function filterAlt(arr, fn) {
    arr.forEach(x=>fn(x) ? console.log(x) : x);
}

// DO NOT EDIT BETWEEN THESE LINES, BUT DO READ THE CODE ----->
// First we setup an array of strings we plan to filter:
const myNames = ['Rich', 'Joe', 'Bhaumik', 'Ray'];

// We use your `filter` function here, capturing a new array into `filteredNames`
// comprised of names that only begin with 'R'
const filteredNames = filterAlt(myNames, function(name) {
    // This is known as a "predicate function" - it's a function that 
    // only returns a boolean
    return name[0] === 'R';
});

//console.log(filteredNames) // => ['Rich', 'Ray']
// <---- DO NOT EDIT BETWEEN THESE LINES



function stringMutilator(str) {
    let arr = str.split(' ');
    arr.unshift('');
    return mutilatedString = arr.reduce((a, b)=> b.length !== 3 ? a += b[b.length - 1] : a += ' ');
}

console.log(stringMutilator('noggin oreo the moon time tele steed his tent apollo her lives though shoo tofu budapest'));