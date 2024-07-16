/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * export function yourFunction(...) {
 *   ...
 * }
 */

export function cookingStatus(remainTime){
    if(remainTime == undefined)
        return 'You forgot to set the timer.';
    if(remainTime == 0)
        return 'Lasagna is done.';
    return 'Not done, please wait.';
}

export function preparationTime(layers, avgPrepTime=2){
    return layers.length * avgPrepTime;
}

export function quantities(layers){
    console.log(layers);
    let quantityNeed = {noodles: 0, sauce:0};
    for( let layer in layers){
        if(layers[layer] =='noodles')
            quantityNeed.noodles +=50;
        else if(layers[layer] =='sauce')
            quantityNeed.sauce += 0.2;
    }
   return quantityNeed; 
}

export function addSecretIngredient(friendIngredients, MineIngredients){
    if(friendIngredients.length == 0)
        return;
    MineIngredients.push(friendIngredients.slice().pop());
}

export function scaleRecipe(recipe, NumberOfPortions=2){
    let scaledRecipe = {};
    console.log(recipe, NumberOfPortions);
    for(let ingredient in recipe){
        scaledRecipe[ingredient] = recipe[ingredient]/2 * NumberOfPortions;
    }
    return scaledRecipe;
}
