// @ts-check

export const frontDoorResponse = (line) => line.slice(0, 1);


export const frontDoorPassword = (word)=> word[0].toUpperCase() + word.slice(1).toLowerCase();



export const backDoorResponse = (line) => line.trim().slice(-1);

export const backDoorPassword = (word) =>   frontDoorPassword(word) + ', please';
