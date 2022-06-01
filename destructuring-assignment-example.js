let names = ["alpha", "beta", "gamma", "delta"];
let [firstName, seconName] = names;

console.log(firstName);
console.log(seconName);


let [firstName1, seconName1] = ["alpha1", "beta1", "gamma1", "delta1"];

console.log(firstName1);
console.log(seconName1);


let [firstName2,, seconName2] = ["alpha2", "beta2", "gamma2", "delta2"];

console.log(firstName2);
console.log(seconName2);


let [firstName3,, ...lastName] = ["alpha3", "beta3", "gamma3", "delta3"];

console.log(firstName3);
console.log(lastName);


let [firstName4, seconName4] = ["alpha4", "beta4", "gamma4", "delta4"];

console.log(firstName4);
console.log(seconName4);

[firstName4, seconName4] = [seconName4, firstName4];

console.log(firstName4);
console.log(seconName4);


function NamesList(){
    return ["alpha5", "beta5", "gamma5", "delta5"];
}

let [firstName5, seconName5] = NamesList();

console.log(firstName5);
console.log(seconName5);

// ES5
let marks = {x: 21, y: -34, z: 47};
let x = marks.x;
let y = marks.y;
let z = marks.z;

console.log(x);
console.log(y);
console.log(z);

//ES6

let marks1 = {x1: 21, y1: -34, z1: 47};
const {x1, y1, z1} = marks1;

console.log(x1);
console.log(y1);
console.log(z1);


const marks3 = {
    section1: {alpha: 15, beta: 16},
    section2: {alpha: -31, beta: 19}
};

const { section1 : {alpha: alpha6, beta: beta6}} = marks3;

console.log(alpha6, beta6);