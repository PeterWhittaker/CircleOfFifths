const scale = [ 'C', 'D', 'E', 'F', 'G', 'A', 'B' ];
const sharp = '♯';
const flat  = '♭';

const isSharp = new RegExp(sharp);
const isFlat  = new RegExp(flat);

const sharpen = (pivot) => {
    if (isSharp.test(pivot)) {
        return [ "NO DOUBLE SHARPS!" ];
    }

    if (isFlat.test(pivot))
        return pivot.replace(flat,'');

    return `${pivot}${sharp}`;
}

const flatten = (pivot) => {
    if (isFlat.test(pivot)) {
        return [ "NO DOUBLE FLATS!"];
    }

    if (isSharp.test(pivot))
        return pivot.replace(sharp,'');

    return `${pivot}${flat}`;
}

const upFifth = (scale) => {
    const pivot = sharpen(scale[3]);
    const lower = scale.slice(4);
    const upper = scale.slice(0,3);
    return [...lower, ...upper, pivot]
}

const downFifth = (scale) => {
    const pivot = flatten(scale[6]);
    const lower = scale.slice(3,6);
    const upper = scale.slice(0,3);
    return [...lower, pivot, ...upper]
}

let i;
let upperFifths = [];
let newScale = scale;
for (i=0; i < 6; i++) {
    newScale = upFifth(newScale);
    upperFifths.push(newScale);
}
upperFifths.reverse();
for (const scale of upperFifths)
    console.log(scale.toString());

console.log(scale.toString());

let lowerFifths = [];
newScale = scale;
for (i=0; i < 6; i++) {
    newScale = downFifth(newScale);
    lowerFifths.push(newScale);
}
for (const scale of lowerFifths)
    console.log(scale.toString());

/*
for (i=0; i < 7; i++) {
    console.log(newScale.toString());
    newScale = downFifth(newScale);
}
for (i=0; i < 7; i++) {
    console.log(newScale.toString());
    newScale = downFifth(newScale);
}
for (i=0; i < 7; i++) {
    console.log(newScale.toString());
    newScale = upFifth(newScale);
}
*/
class Scale {
    constructor(tonic = 'C') {
    }
}
