//
// This is only a SKELETON file for the 'Anagram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const findAnagrams = (word, candidates ) => {
    const lowerword = word.toLowerCase();
    const sortword = lowerword.split('').sort().join('');
    let anagrams = [];
    candidates.map( value=>{
           let lowervalue = value.toLowerCase();  
           let sortvalue= lowervalue.split('').sort().join('');  
            if( lowerword != lowervalue & value.toLowerCase().split('').sort().join('')==sortword)
                return anagrams.push(value)
            return null;

    });
    return anagrams;
    
};
