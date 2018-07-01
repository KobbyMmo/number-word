
const HUNDRED = 'Hundred';
const AND = 'and';
const COMMA = ", ";
const NEGATIVE = "Negative";

// Single-digit and small number names
const smallNumbers = ["Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine",
    "Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen",
    "Eighteen", "Nineteen"];

// Tens number names from twenty upwards
const tens = ["Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"];
const tensOffset = 2

// Scale number names for use during recombination
const scaleNumbers = ["", "Thousand", "Million", "Billion", "Trillion"];
const SPACE = ' ';



/**
* @method: Returns the word form of any number
* @param {number} 
* @returns {String}
*/
export function getWordFromNumber(num: number): String {
    let word: String = '';

    // Zero rule
    if (num == 0) {
        return smallNumbers[0];
    }
    let positiveNumber = Math.abs(num);

    let digitgroup = splitNumbersInThrees(positiveNumber);

    let wordGroup: String[] = []
    digitgroup.forEach(digit => {
        wordGroup.push(threeDigitGroupToWords(digit));

    })
    word = recombineWords(wordGroup, digitgroup[0])
    return num < 0 ? NEGATIVE + SPACE + word : word;

}





function recombineWords(wordGroup: String[], last3Digits: number): String {
    if (wordGroup.length == 1) {
        return wordGroup[0]
    }
    let word = '';
    wordGroup.forEach((current, index) => {
        if (current == '') {
            return;
        } else if (index == 0 && last3Digits < 100) {
            word = AND + SPACE + current;
        } else if (index == 0) {
            word = word + current;
        }
        else {
            word = current + SPACE + scaleNumbers[index] + SPACE + word;

        }
    });
    return String(word.trim());
}

function splitNumbersInThrees(positiveNumber: number): Array<number> {
    let digitgroup = []; SPACE
    let modulus = positiveNumber % 1000

    while (positiveNumber > 0) {
        digitgroup.push(modulus);
        positiveNumber = Math.floor(positiveNumber / 1000);
        modulus = positiveNumber % 1000;
    }
    return digitgroup;
}

function threeDigitGroupToWords(positiveNumber: number): String {
    if (positiveNumber == 0) {
        return '';
    }
    if (positiveNumber < 100) {
        return twoDigitsToWord(positiveNumber);
    }

    const numAfterFirstPostition = positiveNumber % 100;
    const hundredsDigit = Math.floor(positiveNumber / 100);

    return numAfterFirstPostition > 0
        ? smallNumbers[hundredsDigit] + SPACE + HUNDRED + SPACE + AND + SPACE + twoDigitsToWord(numAfterFirstPostition)
        : smallNumbers[hundredsDigit] + SPACE + HUNDRED;
}

function twoDigitsToWord(positiveNumber: number): String {
    if (positiveNumber < 20) {
        return smallNumbers[positiveNumber];
    }
    const onesDigit = positiveNumber % 10;
    const tensDigit = Math.floor(positiveNumber / 10);
    return onesDigit > 0
        ? tens[tensDigit - tensOffset] + " " + smallNumbers[onesDigit]
        : tens[tensDigit - tensOffset];

}
