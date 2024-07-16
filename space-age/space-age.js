//
// This is only a SKELETON file for the 'Space Age' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const places = {
earth: 1,
mercury: 0.2408467,
venus: 0.6151972 ,
mars: 1.8808158,
jupiter: 11.862615,
saturn: 29.447498,
uranus: 84.016846,
neptune: 164.79132
}
export const age = (beOn, seconds) => {
    const earthtime = 365.25*60*60*24;
    return parseFloat(( seconds / earthtime / places[beOn]).toFixed(2));
 };
