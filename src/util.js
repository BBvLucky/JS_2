export const sum = function (...numbers) {
    return numbers.reduce(function (acc, item) {
        return acc + item;
    }, 0);
}

export const avg = function (...numbers) {
    return sum(...numbers) / numbers.length;
}
export default avg;