let numbers = [1, 2, 3, 4, 5];
let string = ['one', 'two', 'three', 'four', 'five'];
let bullets = [
    {numb: 1, str: 'one', bul: true},
    {numb: 2, str: 'two', bul: false},
    {numb: 3, str: 'three', bul: true},
    {numb: 4, str:'four', bul: false},
    {numb: 5, str:'five', bul: true}
];
console.log(numbers[0], numbers[1], numbers[2], numbers[3], numbers[4]);
console.log(string[0], string[1], string [2], string[3], string[4]);
for (let bullet of bullets) {
    console.log(bullet.numb, bullet.str, bullet.bul)
}

let deafulttexts = ['gggggggggggggggggggggggggggggggggggggggggggggggggggggg']
for (let i = 0; i < 10; i++) {
    document.write(`<div class="ggggs">`);
    document.write(deafulttexts[0]);
    document.write(`</div>`)
}

let deaftexts = [
    {one: 'aaaaaaaaaaaaaaaaaaaa', two: 'bbbbbbbbbbbbbbbbbbbb', three: 'cccccccccccccccccccc'}
]
for (let i = 0; i < 10; i++) {
    document.write(`<div class="ggggs">`);
    document.write(deaftexts [0].one, deaftexts[0].two, deaftexts[0].three);
    document.write(`</div>`);
}

const title = 'title';
let i = 0;

while(i < 20){
    i++
    document.write(`<h1>`);
    document.write(title + ' ');
    document.write(`</h1>`);
};

let titles = [
    {header1: 'TITLE'},
    {header2: 'Title'},
    {header3: 'title'}
]
let u = 0;
while (u < 20){
    u++
    document.write(`<h1>`);
    document.write(titles[0].header1 + ' ', titles[1].header2 + ' ', titles[2].header3 + ' ');
    document.write(`</h1>`);
};

let numberses = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let j = 0; j < 10; j++) {
    console.log(numberses[j]);

};

let stringses = ['ones', 'twos', 'threes', 'fours', 'fives', 'sixes', 'sevenes', 'eigths', 'nines', 'tens'];
for (let k = 0; k < stringses.length; k++) {
    console.log(stringses[k]);
}

let mixed = [1, 'two', true, 2, 'three', false]
for (let l = 0; l < mixed.length; l++) {
    console.log(mixed[l]);
};

let mixed2 = [1, 2, 3, 'four', 'five', 'six', 'seven', true, false, true];
for (let m = 0; m < mixed2.length; m++) {
    if(typeof mixed2[m]  === 'boolean')
    console.log(mixed2[m])
};

for (let m = 0; m < mixed2.length; m++) {
    if (typeof mixed2[m] === 'number')
        console.log(mixed2[m])
};

for (let j = 0; j < mixed2.length; j++) {
    if (typeof mixed2[j] === 'string')
        console.log(mixed2[j])

};

let massa = [1, 2, 3, 4, 'five', 'six', 'seven', 'eight', true, false]
let massaemty = [];
for (let j = 0; j < massa.length; j++) {
    massaemty[j] = massa[j]
    console.log(massaemty[j])
};