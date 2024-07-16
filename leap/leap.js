//
// This is only a SKELETON file for the 'Leap' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isLeap = (year) => {
    let by4 = year % 4 ==0;
    let by100 = year %100==0;
    let by400 = year %400==0;
    return Boolean( by4 & !by100 || by4 & by100 & by400);
};
