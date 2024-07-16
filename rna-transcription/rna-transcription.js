//
// This is only a SKELETON file for the 'RNA Transcription' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const DRMap = {G:'C',C: 'G',T:'A',A:'U'};    
export const toRna = (nucleotides) => {
    return nucleotides.split('').map(nucleotide => DRMap[nucleotide]).reduce( (acc,nucleotide)=> acc+nucleotide,"")
};
