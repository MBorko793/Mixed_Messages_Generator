'use strict';

let msgtime = ['In the winter', 'In the summer', 'When the moon reaches its apex', 'At twelve oclock on a sunday', 'On the Fourth of July', 'On your next birthday'];
let msgplace = ['at the mall', 'in a car', 'in the pool', 'in Las Vegas', 'under the apple tree', 'back behind the shed'];
let msgaction = ['you will meet the love of your life.', 'you will fall into a terrible situation.', 'you will meet your end.', 'your adventure will begin.', 'you will have a great windfall of cash.', 'the world will come to an end!'];

console.log(`${msgtime[Math.floor(Math.random() * msgtime.length)]} ${msgplace[Math.floor(Math.random() * msgplace.length)]} ${msgaction[Math.floor(Math.random() * msgtime.length)]}`);



