//
// This is only a SKELETON file for the 'Acronym' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const parse = (speak) => {
    return speak.split('-').join(' ').split(' ').map( word => {
            let sanitizedWord = word.trim().replace(new RegExp(/[^a-zA-Z]+/g ), '');
            if(sanitizedWord.length> 0)
             return sanitizedWord[0].toUpperCase()}).join('').replace(' ', '');
    
};
