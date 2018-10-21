import { CodeOptions } from '../CodeOptions';
import { CodeGenerator } from '../CodeGenerator';

test('generator code length', () => {
  const testLength = 16;
  const options = new CodeOptions();
  options.length = testLength;
  const generator = new CodeGenerator(options);
  const generatedCode = generator.generate();
  expect(generatedCode.length).toBe(testLength);
});

test('generator alphabet', () => {
  const testAlphabet = 'ABCd';
  const options = new CodeOptions();
  options.alphabet = testAlphabet;
  const generator = new CodeGenerator(options);
  const generatedCode = generator.generate();

  expect(generatedCode).toMatch(/[ABCd]{8}/g);
});
