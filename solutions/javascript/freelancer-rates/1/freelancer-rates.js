// @ts-check

const daysPerMonth = 22;
const hoursPerDay = 8;

/**
 * The day rate, given a rate per hour
 *
 * @param {number} ratePerHour
 * @returns {number} the rate per day
 */
export function dayRate(ratePerHour) {
  return ratePerHour * hoursPerDay;
}

/**
 * Calculates the number of days in a budget, rounded down
 *
 * @param {number} budget: the total budget
 * @param {number} ratePerHour: the rate per hour
 * @returns {number} the number of days
 */
export function daysInBudget(budget, ratePerHour) {
  const numberOfHoursInBudget = budget / ratePerHour;
  const numberOfDaysInBudget = Math.floor(numberOfHoursInBudget / hoursPerDay);
  return numberOfDaysInBudget;
}

/**
 * Calculates the discounted rate for large projects, rounded up
 *
 * @param {number} ratePerHour
 * @param {number} numDays: number of days the project spans
 * @param {number} discount: for example 20% written as 0.2
 * @returns {number} the rounded up discounted rate
 */
export function priceWithMonthlyDiscount(ratePerHour, numDays, discount) {
  let fullMonths = Math.floor(numDays / daysPerMonth);
  let remainingDays = numDays % daysPerMonth;
  let fullMonthsCost = fullMonths * ratePerHour * hoursPerDay * daysPerMonth * (1 - discount);
  let remainingDaysCost = remainingDays * ratePerHour * hoursPerDay;
  let totalCost = fullMonthsCost + remainingDaysCost;
  return Math.ceil(totalCost);
}