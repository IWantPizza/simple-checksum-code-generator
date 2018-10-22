# Simple Checksum Code Generator

Generate and verify simple codes such as `QZYZTHG`.
It should go without saying that is easily crackable
 and should not be used for secure applications. The
  last character of the code is a checksum function of
   the first characters. The idea is that if any of 
   these characters are typoed, it can quickly be
    detected by the code verifier.

# Installation
```bash
npm install @iwantpizza/simple-checksum-code-generator --save
```
 
# Usage
The available configuration options are as follows:

| Key      | Value                        | Description                                                                                                                                                                  |
|----------|------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| alphabet | 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' | The possible characters that a generated code can contain.                                                                                                                   |
| length   | 8                            | The length of generated codes.                                                                                                                                               |
| salt     | 12                           | A salt for the checksum function. Note that for an alphabet of length 26, the salt 12 would have the same effect as the salt of 12 + (26*n) where n is any positive integer. |

To change any of the available options, set them on the `codeOptions` object, for example:

```typescript
import {CodeGenerator, CodeOptions, CodeVerifier} from '@iwantpizza/simple-checksum-code-generator/lib';

const codeOptions = new CodeOptions();
codeOptions.alphabet = 'ABCD';
const codeVerifier = new CodeVerifier(codeOptions);
```

## Typescript
```typescript
import {CodeGenerator, CodeOptions, CodeVerifier} from '@iwantpizza/simple-checksum-code-generator/lib';

const codeOptions = new CodeOptions();
const codeVerifier = new CodeVerifier(codeOptions);
const codeGenerator = new CodeGenerator(codeOptions);

// generate a code
codeGenerator.generate();

// check a code
codeVerifier.verify('ABC123');
```

## Javascript
```javascript
const simpleChecksumCodeGenerator = require("@iwantpizza/simple-checksum-code-generator/lib");
const codeOptions = new simpleChecksumCodeGenerator.CodeOptions();
const codeGenerator = new simpleChecksumCodeGenerator.CodeGenerator(codeOptions);
const codeVerifier = new simpleChecksumCodeGenerator.CodeVerifier(codeOptions);

// generate a code
codeGenerator.generate();

// check a code
codeVerifier.verify('ABC123');
```