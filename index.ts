




export class NumToWord {
    private HUNDRED = 'Hundred';
    private AND = ' and ';
    private COMMA = ", ";
    private NEGATIVE = "Negative";

    // Single-digit and small number names
    private smallNumbers = ["Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine",
        "Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen",
        "Eighteen", "Nineteen"];

    // Tens number names from twenty upwards
    private tens = ["Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"];
    private tensOffset = 2

    // Scale number names for use during recombination
    private scaleNumbers = ["Thousand", "Million", "Billion", "Trillion"];
    SPACE = ' ';

    /**
 * @method: Returns the word form of any number
 * @param {number} 
 * @returns {String}
 */


    getWordFromNumber(num: number): String {
        let word = '';

        // Zero rule
        if (num == 0) {
            return this.smallNumbers[0];
        }
        let positiveNumber = Math.abs(num);

        let digitgroup = [];
        let modulus = positiveNumber % 1000

        while (positiveNumber > 0) {
            digitgroup.push(modulus);
            positiveNumber = Math.floor(positiveNumber / 1000);
            modulus = positiveNumber % 1000
        }

        digitgroup.forEach(digit => {
            word = word + this.threeDigitGroupToWords(digit);
        })
        console.log(digitgroup);
        return num < 0 ? this.NEGATIVE + this.SPACE + word : word;

    }
    private threeDigitGroupToWords(positiveNumber: number): String {
        if (positiveNumber == 0) {
            return '';
        }
        if (positiveNumber < 100) {
            return this.twoDigitsToWord(positiveNumber);
        }

        const numAfterFirstPostition = positiveNumber % 100;
        const hundredsDigit = Math.floor(positiveNumber / 100);

        return numAfterFirstPostition > 0
        ? this.smallNumbers[hundredsDigit]+this.SPACE + this.HUNDRED+ this.AND + this.twoDigitsToWord(numAfterFirstPostition)
        : this.smallNumbers[hundredsDigit]+this.SPACE + this.HUNDRED;
    }

    private twoDigitsToWord(positiveNumber: number): String {
        if (positiveNumber < 20) {
            return this.smallNumbers[positiveNumber];
        }
        const onesDigit = positiveNumber % 10;
        const tensDigit = Math.floor(positiveNumber / 10);
        return onesDigit > 0
            ? this.tens[tensDigit - this.tensOffset] + " " + this.smallNumbers[onesDigit]
            : this.tens[tensDigit - this.tensOffset];

    }
}
