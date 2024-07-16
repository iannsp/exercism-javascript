//
// This is only a SKELETON file for the 'Resistor Color' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const colorCode = (color) => {
    return resistence[COLORS.indexOf(color)];
};

export const COLORS =[ 
    'black',
    'brown',
    'red',
    'orange',
    'yellow',
    'green',
    'blue',
    'violet',
    'grey',
    'white'
];
const resistence=[0,1,2,3,4,5,6,7,8,9];
