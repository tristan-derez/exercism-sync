// @ts-check

export const EXPECTED_MINUTES_IN_OVEN = 40;
const preparationMinutesPerLayer = 2;

// Determines the number of minutes the lasagna still needs to remain in the oven to be properly prepared.
export const remainingMinutesInOven = (actualMinutesInOven) => EXPECTED_MINUTES_IN_OVEN - actualMinutesInOven;

// Given a number of layers, determines the total preparation time.
export const preparationTimeInMinutes = (numberOfLayers) => numberOfLayers * preparationMinutesPerLayer;

// Calculates the total working time. 
export const totalTimeInMinutes = (numberOfLayers, actualMinutesInOven) => preparationTimeInMinutes(numberOfLayers) + actualMinutesInOven;
