// @ts-check
//

const knightIsAwake = true;
const archerIsAwake = false;
const prisonerIsAwake = true;
const petDogIsPresent = true;

export function canExecuteFastAttack(knightIsAwake) {
  if (!knightIsAwake) {
       return true;
  } else {
    return false;
  }
}

export function canSpy(knightIsAwake, archerIsAwake, prisonerIsAwake) {
  if (knightIsAwake || archerIsAwake || prisonerIsAwake) {
      return true;
  } else {
      return false;
  }
}

export function canSignalPrisoner(archerIsAwake, prisonerIsAwake) {
  if (prisonerIsAwake && !archerIsAwake) {
      return true;
  } else {
      return false;
  }
}

export function canFreePrisoner(
  knightIsAwake,
  archerIsAwake,
  prisonerIsAwake,
  petDogIsPresent
) {
  if (petDogIsPresent && !archerIsAwake) {
    return true;
  } else if (prisonerIsAwake && !archerIsAwake && !knightIsAwake) {
    return true;
  } else {
    return false;
  }
}
