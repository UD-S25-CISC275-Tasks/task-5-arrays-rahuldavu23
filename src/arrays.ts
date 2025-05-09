/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    let newNumbers: number[] = [];
    if (numbers.length === 0) {
        newNumbers = [...numbers];
    } else {
        newNumbers = [numbers[0], numbers[-1]];
    }

    return newNumbers;
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    let newNumbers: number[] = [];
    newNumbers = numbers.map((num: number): number => num * 3);

    return newNumbers;
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    let newNumbers = numbers.map((num: string): number =>
        Number(num) ? parseInt(num) : 0,
    );
    return newNumbers;
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    const newAmounts = amounts.map((amount: string): number => {
        const cleanedAmount = amount.replace(/^\$/, "");
        return isNaN(Number(cleanedAmount)) ? 0 : parseInt(cleanedAmount);
    });
    return newAmounts;
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    return messages
        .filter((message: string): boolean => !message.endsWith("?"))
        .map((message: string): string =>
            message.endsWith("!") ? message.toUpperCase() : message,
        );
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    const shortWords = words.filter((word: string) => word.length < 4);
    return shortWords.length;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    if (colors.length === 0) {
        return true;
    }
    const validColors = colors.every(
        (color: string): boolean =>
            color === "red" || color === "blue" || color === "green",
    );
    return validColors ? true : false;
}
/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    if (addends.length === 0) {
        return "0=0";
    }
    const theSum = addends.join("+");
    const sum = addends.reduce(
        (total: number, num: number): number => total + num,
        0,
    );
    return sum + "=" + theSum;
}

/**
 * Consumes an array of numbers and produces a new array of the same numbers,
 * with one difference. After the FIRST negative number, insert the sum of all
 * previous numbers in the list. If there are no negative numbers, then append
 * the sum to the list.
 *
 * For instance, the array [1, 9, -5, 7] would become [1, 9, -5, 10, 7]
 * And the array [1, 9, 7] would become [1, 9, 7, 17]
 */
export function injectPositive(values: number[]): number[] {
    const firstNegativeIndex = values.findIndex((num) => num < 0);

    if (firstNegativeIndex === -1) {
        const totalSum = values.reduce((acc, num) => acc + num, 0);
        return [...values, totalSum];
    } else {
        const sumBeforeNegative = values
            .slice(0, firstNegativeIndex)
            .reduce((acc, num) => acc + num, 0);

        return [
            ...values.slice(0, firstNegativeIndex + 1),
            sumBeforeNegative,
            ...values.slice(firstNegativeIndex + 1),
        ];
    }
}
