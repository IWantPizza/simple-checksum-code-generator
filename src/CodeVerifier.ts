import { CodeOptions } from './CodeOptions';

export class CodeVerifier {
  constructor(private options: CodeOptions) {}

  public verify(code: string) {
    if (code === null || code === undefined || code.length !== this.options.length) {
      return false;
    }

    const numbers: number[] = [];
    for (const char of code) {
      const index = this.options.alphabet.indexOf(char);
      if (index === -1) {
        return false;
      }
      numbers.push(index);
    }

    const checksum = numbers.pop();
    const reducer = (accumulator: number, currentValue: number) => accumulator + currentValue;
    const sum = numbers.reduce(reducer) + this.options.salt;
    const checkCheckSum = sum % this.options.alphabet.length;

    return checkCheckSum === checksum;
  }
}
