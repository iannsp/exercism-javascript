//
// This is only a SKELETON file for the 'Isogram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isIsogram = (word) => {
    return word.toLowerCase().split('')
        .filter( (value, index, arr) => (arr.indexOf(value)===index || value == '-' || value==' ') )
        .length == word.length;
};
