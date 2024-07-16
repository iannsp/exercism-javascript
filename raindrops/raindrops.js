//
// This is only a SKELETON file for the 'Raindrops' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const convert = (ntoDrop) => {
    let drop="";
    if(ntoDrop % 3 == 0) drop+="Pling";
    if(ntoDrop % 5 == 0) drop+="Plang";
    if(ntoDrop % 7 == 0) drop+="Plong";
    if(drop!="")
        return drop;
    return ntoDrop.toString();
};
