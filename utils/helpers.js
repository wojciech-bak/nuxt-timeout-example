export const sleep = (time) => new Promise((resolve) => {
    setTimeout(() => {
        log(`Block execution for ${time} milisecnds.`)
        resolve();
    }, time);
});

export const getRandomIdentifier = () => {
    return `${Math.floor(Math.random() * 1000000)}`.slice(0,6);
}

export const log = (...args) => {
    console.log(...args); // eslint-disable-line
}
