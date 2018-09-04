# Vivacity Labs Coding Challenge - Javascript

Please read the [challenge specification](VivacityCodingChallenge.pdf) before this.

This is the Javascript coding challenge for Vivacity Labs. We have given you some skeleton code for the basic structure of the each part. When you have completed the challenge we should be able to run the the tests we have provided. Please refrain from adding any additional mocha tests.

## Install

```
$ npm install
```

This assumes you already have Node.js LTS installed.

## Coding

When coding please feel free to use external libraries if you feel they fit well or are needed. Just remember to save them to the npm package,
```
$ npm install --save <library>
```

You may add extra files with additional functions to call or add functions to the files we have given you whilst keeping the original function calls the same.

## Running

You can run:
```
$ npm run
```

This will run the [index.js](index.js) file. You can change this file to run what you would like.

## Testing

We have added some very basic unit tests, these basically take the examples from the specification file and turn them to [mocha](https://mochajs.org/) tests. You do not need experience with [mocha](https://mochajs.org/) or even unit tests, just run the provided command,

```
$ npm test
```

Initially all these tests will fail but as you complete each part you should see these tests passing. Please do not change these tests or add any extras. It is just to keep you on the right track.

**N.B.**
As you are moving though with each part some tests might take a great deal of time to speed up testing on certain parts you can skip tests or only run one test. For example, if you wanted to skip some [hashIterator](tests/hashIterator.spec.js) test you could do:

```javascript
    it.skip("Input: ('code-quality',3), should return '09e97089ae'", () => {
        expect('09e97089ae').to.equal(hashIterator('code-quality',3));
    });

    it.skip("Input: ('machine-learning', 4), should return 'f320e001d1'", () => {
        expect('f320e001d1').to.equal(hashIterator('machine-learning', 4));
    });

    it("Input: ('artificial-intelligence',5), should return '610d370320'", () => {
        expect('610d370320').to.equal(hashIterator('artificial-intelligence',5));
    });
```

This would skip the first 2 tests in this file and only run the third, the reverse of this is:

```javascript
    it.only("Input: ('code-quality',3), should return '09e97089ae'", () => {
        expect('09e97089ae').to.equal(hashIterator('code-quality',3));
    });

    it("Input: ('machine-learning', 4), should return 'f320e001d1'", () => {
        expect('f320e001d1').to.equal(hashIterator('machine-learning', 4));
    });

    it.only("Input: ('artificial-intelligence',5), should return '610d370320'", () => {
        expect('610d370320').to.equal(hashIterator('artificial-intelligence',5));
    });
```
This would only run the first and the last test in this file.

### Coordinate System

There is also a coordinate system folder, you can use this to really stress test your code as it gives valid files to build a large map from multiple files. You can then use this to see how your system behaves with multiple files, large maps and deep path finding.

**Good Luck**
