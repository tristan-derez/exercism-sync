/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * export function yourFunction(...) {

}
 */

export function cookingStatus(remainingTime) {
  if(remainingTime === null || remainingTime === undefined) return 'You forgot to set the timer.';

  return remainingTime === 0 ? "Lasagna is done." : "Not done, please wait.";
}

export function preparationTime(layers, avgPrepTime = 2) {
  const numbersOfLayers = layers.length;

  return numbersOfLayers * avgPrepTime;
}

export function quantities(layers) {
  let noodlesQuantity = 0;
  let sauceQuantity = 0;

  layers.forEach((item) => {
    if (item === 'noodles') {
      noodlesQuantity += 50;
    } else if (item === 'sauce') {
      sauceQuantity += 0.2;
    }
  });

  return {noodles: noodlesQuantity, sauce: sauceQuantity}
}

export function addSecretIngredient(friendsIngredientsList, myIngredientsList) {
  const secretIngredient = friendsIngredientsList.slice(-1)[0];

  myIngredientsList.push(secretIngredient);
}

export function scaleRecipe(recipeForTwoPortions, numberOfPortionsNeeded) {
  const scaledRecipe = {};

  for (const ingredient in recipeForTwoPortions) {
    scaledRecipe[ingredient] = recipeForTwoPortions[ingredient] * (numberOfPortionsNeeded / 2);
  }

  return scaledRecipe;
}
