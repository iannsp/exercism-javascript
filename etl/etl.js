//
// This is only a SKELETON file for the 'ETL' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const transform = (oldStruct) => {
    let newStruct = {};
    for(const i in oldStruct){
        oldStruct[i].map( (letter) =>newStruct[letter.toLowerCase()] = Number(i));
    }
    return newStruct;
};
