// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Determines how long it takes to prepare a certain juice.
 *
 * @param {string} name
 * @returns {number} time in minutes
 */

const menu = ["Pure Strawberry Joy","Energizer","Green Garden","Tropical Island","All or Nothing"];
const timeToMix = [0.5, 1.5,1.5,3,5];

export function timeToMixJuice(name) {
   let outOfMenuTimeMix = 2.5;
   if(menu.includes(name))
     return timeToMix[menu.indexOf(name)];
   return outOfMenuTimeMix;
    
}

/**
 * Calculates the number of limes that need to be cut
 * to reach a certain supply.
 *
 * @param {number} wedgesNeeded
 * @param {string[]} limes
 * @returns {number} number of limes cut
 */
export function limesToCut(wedgesNeeded, limes) {
    let accWedges = 0;
    let limeCounter = 0;
    while(accWedges < wedgesNeeded){
        let nextLime = limes.shift();
        if(nextLime == undefined) break;
        limeCounter++;
        if(nextLime == 'small') accWedges+=6;
        else if(nextLime == 'medium') accWedges+=8;
        else if(nextLime == 'large') accWedges+=10;
    }
    return limeCounter;
}

/**
 * Determines which juices still need to be prepared after the end of the shift.
 *
 * @param {number} timeLeft
 * @param {string[]} orders
 * @returns {string[]} remaining orders after the time is up
 */
export function remainingOrders(timeLeft, orders) {
    while(timeLeft>0){
        timeLeft -= timeToMixJuice(orders.shift());
    }
    return orders;
}
