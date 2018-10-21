import { CodeOptions } from './CodeOptions';

export class CodeGenerator {
  constructor(private options: CodeOptions) {}

  public generate() {
    const numbers = [];
    let sum = this.options.salt;

    for (let i = 0; i < this.options.length - 1; i++) {
      const randomInt = this.getRandomInt(0, this.options.alphabet.length - 1);
      numbers.push(randomInt);
      sum += randomInt;
    }

    // add the checksum to the end of the code
    numbers.push(sum % this.options.alphabet.length);

    return numbers
      .map((num: number) => {
        return this.options.alphabet[num];
      })
      .join('');
  }

  private getRandomInt(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
