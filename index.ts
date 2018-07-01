




export class NumToWord {
    private HUNDRED = 'Hundred';
    private AND = 'and';
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
    private scaleNumbers = ["", "Thousand", "Million", "Billion", "Trillion"];
    SPACE = ' ';

    /**
 * @method: Returns the word form of any number
 * @param {number} 
 * @returns {String}
 */


    getWordFromNumber(num: number): String {
        let word: String = '';

        // Zero rule
        if (num == 0) {
            return this.smallNumbers[0];
        }
        let positiveNumber = Math.abs(num);

        let digitgroup = this.splitNumbersInThrees(positiveNumber);

        let wordGroup: String[] = []
        digitgroup.forEach(digit => {
            wordGroup.push(this.threeDigitGroupToWords(digit));

        })
        word = this.recombineWords(wordGroup, digitgroup[0])
        return num < 0 ? this.NEGATIVE + this.SPACE + word : word;

    }

    recombineWords(wordGroup: String[], last3Digits: number): String {
        if (wordGroup.length == 1) {
            return wordGroup[0]
        }
        let word = '';
        console.log(wordGroup);

        wordGroup.forEach((current, index) => {
            if (current == '') {
                return;
            } else if (index == 0 && last3Digits < 100) {
                word = this.AND + this.SPACE + current;
            } else if (index == 0) {
                word = word + current;
            }
            else {
                word = current + this.SPACE + this.scaleNumbers[index] + this.SPACE + word;

            }
        });
        return String(word.trim());
    }

    private splitNumbersInThrees(positiveNumber: number): Array<number> {
        let digitgroup = []; this.SPACE
        let modulus = positiveNumber % 1000

        while (positiveNumber > 0) {
            digitgroup.push(modulus);
            positiveNumber = Math.floor(positiveNumber / 1000);
            modulus = positiveNumber % 1000;
        }
        return digitgroup;
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
            ? this.smallNumbers[hundredsDigit] + this.SPACE + this.HUNDRED + this.SPACE + this.AND + this.SPACE + this.twoDigitsToWord(numAfterFirstPostition)
            : this.smallNumbers[hundredsDigit] + this.SPACE + this.HUNDRED;
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
