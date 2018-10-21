import { CodeOptions } from '../CodeOptions';
import { CodeGenerator } from '../CodeGenerator';
import { CodeVerifier } from '../CodeVerifier';

const defaultOptions = new CodeOptions();
const optionsWithDifferentSalt = new CodeOptions();
optionsWithDifferentSalt.salt += 2;

const defaultOptionsGenerator = new CodeGenerator(defaultOptions);
const optionsWithDifferentSaltGenerator = new CodeGenerator(optionsWithDifferentSalt);

const defaultOptionsVerifier = new CodeVerifier(defaultOptions);
const optionsWithDifferentSaltVerifier = new CodeVerifier(optionsWithDifferentSalt);

const defaultOptionsCode = defaultOptionsGenerator.generate();
const optionsWithDifferentSaltCode = optionsWithDifferentSaltGenerator.generate();

test('verifying valid codes', () => {
  expect(defaultOptionsVerifier.verify(defaultOptionsCode)).toBeTruthy();
  expect(optionsWithDifferentSaltVerifier.verify(optionsWithDifferentSaltCode)).toBeTruthy();
});

test('verifying invalid codes', () => {
  expect(defaultOptionsVerifier.verify(optionsWithDifferentSaltCode)).toBeFalsy();
  expect(optionsWithDifferentSaltVerifier.verify(defaultOptionsCode)).toBeFalsy();
});
