//
// This is only a SKELETON file for the 'Resistor Color Duo' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const BANDS={
    black: 0,
    brown: 1,
    red: 2,
    orange: 3,
    yellow: 4,
    green: 5,
    blue: 6,
    violet: 7,
    grey: 8,
    white: 9
};
export const decodedValue = (bands) => {
    let validbands = bands.slice(0,2);
    if (validbands.length == 0)
    throw new Error("need 2 bands to calculate.");
    return Number(validbands.map(band => BANDS[band]).reduce( (acc, item) => acc+item, ""));
};

