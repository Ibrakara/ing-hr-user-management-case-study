import {stringContains} from '../dev/helpers'; // Adjust the path based on your file structure
import {expect} from '@open-wc/testing';

suite('stringContains helper', () => {
  test('returns true when first string contains second string (case insensitive)', () => {
    const result = stringContains('Hello World', 'hello');
    expect(result).to.be.true;
  });

  test('returns true when first string contains second string (case insensitive, mixed case)', () => {
    const result = stringContains('Hello World', 'WoRlD');
    expect(result).to.be.true;
  });

  test('returns false when first string does not contain second string', () => {
    const result = stringContains('Hello World', 'planet');
    expect(result).to.be.false;
  });

  test('returns false when first string is empty', () => {
    const result = stringContains('', 'hello');
    expect(result).to.be.false;
  });

  test('returns false when second string is empty', () => {
    const result = stringContains('Hello World', '');
    expect(result).to.be.true;
  });

  test('returns true when both strings are empty', () => {
    const result = stringContains('', '');
    expect(result).to.be.true;
  });

  test('returns true when first string equals second string (case insensitive)', () => {
    const result = stringContains('Hello', 'hello');
    expect(result).to.be.true;
  });

  test('returns false when second string is longer than first string', () => {
    const result = stringContains('Hello', 'Hello World');
    expect(result).to.be.false;
  });
});
