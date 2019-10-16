const square = (x) => {
    return x * x;
}

// More concise arrow functions
const square = x => x * x;

const cube = (x) => {
    return square(x) * x;
}

// More concise arrow functions
const square = x => square(x) * x;
