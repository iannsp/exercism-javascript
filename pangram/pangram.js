//
// This is only a SKELETON file for the 'Pangram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isPangram = (candidate) => {
    const usedLetters = new Set();
    candidate.toLowerCase().split('').map(letter => letter.match(/[a-z]/)?usedLetters.add(letter):null);
    return usedLetters.size == 26;
};
