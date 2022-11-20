// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2

// Tests for isPhoneNumber()
test('(123) 456-7890 is a valid phone number', () => {
    expect(functions.isPhoneNumber('(123) 456-7890')).toBe(true);
});

test('123-456-7890 is a valid phone number', () => {
    expect(functions.isPhoneNumber('123-456-7890')).toBe(true);
});

test('123-a56-7890 is not a valid phone number', () => {
    expect(functions.isPhoneNumber('123-a56-7890')).toBe(false);
});

test('1234567890 is not a valid phone number', () => {
    expect(functions.isPhoneNumber('1234567890')).toBe(false);
});

// Tests for isEmail()
test('abc@ucsd.edu is a valid email', () => {
    expect(functions.isEmail('abc@ucsd.edu')).toBe(true);
});

test('ABC@UCSD.EDU is a valid email', () => {
    expect(functions.isEmail('ABC@UCSD.EDU')).toBe(true);
});

test('^-^@ucsd.edu is not a valid email', () => {
    expect(functions.isEmail('^-^@ucsd.edu')).toBe(false);
});

test('abc@ucsd is not a valid email', () => {
    expect(functions.isEmail('abc@ucsd')).toBe(false);
});

// Tests for isStrongPassword()
test('abc123_456 is a strong password', () => {
    expect(functions.isStrongPassword('abc123_456')).toBe(true);
});

test('A1b2C3d4EFGH is a strong password', () => {
    expect(functions.isStrongPassword('A1b2C3d4EFGH')).toBe(true);
});

test('1abcDEF_23 is not a strong password', () => {
    expect(functions.isStrongPassword('1abcDEF_23')).toBe(false);
});

test('abc is not a strong password', () => {
    expect(functions.isStrongPassword('abc')).toBe(false);
});

// Tests for isDate()
test('1/1/2022 is a date', () => {
    expect(functions.isDate('1/1/2022')).toBe(true);
});

test('01/01/2022 is a date', () => {
    expect(functions.isDate('01/01/2022')).toBe(true);
});

test('/1/2022 is not a date', () => {
    expect(functions.isDate('/1/2022')).toBe(false);
});

test('01-01-2022 is not a date', () => {
    expect(functions.isDate('01-01-2022')).toBe(false);
});

// Tests for isHexColor()
test('#AAA000 is a hex color', () => {
    expect(functions.isHexColor('#AAA000')).toBe(true);
});

test('AaA is a hex color', () => {
    expect(functions.isHexColor('AaA')).toBe(true);
});

test('QAQ is not a hex color', () => {
    expect(functions.isHexColor('QAQ')).toBe(false);
});

test('#AAA!AA is not a hex color', () => {
    expect(functions.isHexColor('#AAA!AA')).toBe(false);
});