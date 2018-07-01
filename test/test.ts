import {getWordFromNumber} from '../index';
import { expect } from 'chai';
import 'mocha';

describe('Get number from word', () => {
  it('should return Zero', () => {
    const result = getWordFromNumber(0);
    expect(result).to.equal('Zero');
  });

  it('should return Hundred', () => {
    const result = getWordFromNumber(100);
    expect(result).to.equal('One Hundred');
  });
  it('should return Eight', () => {
    const result = getWordFromNumber(8);
    expect(result).to.equal('Eight');
  });

  it('should return Twenty', () => {
    const result = getWordFromNumber(20);
    expect(result).to.equal('Twenty');
  });

  it('should return Nine Hundred and Ninety Nine', () => {
    const result = getWordFromNumber(999);
    expect(result).to.equal('Nine Hundred and Ninety Nine');
  });

  it('should return Twenty One', () => {
    const result = getWordFromNumber(21);
    expect(result).to.equal('Twenty One');
  });

  it('should return Negative Eight', () => {
    const result = getWordFromNumber(-8);
    expect(result).to.equal('Negative Eight');
  });
  it('should return Nineteen', () => {
    const result = getWordFromNumber(19);
    expect(result).to.equal('Nineteen');
  });

  it('should return One Hundred and One', () => {
    const result = getWordFromNumber(101);
    expect(result).to.equal('One Hundred and One');
  });
  it('should return One Thousand and Nineteen', () => {
    const result = getWordFromNumber(1019);
    expect(result).to.equal('One Thousand and Nineteen');
  });

  it('should return One Thousand', () => {
    const result = getWordFromNumber(1000);
    expect(result).to.equal('One Thousand');
  });
  it('should return Nine Thousand Nine Hundred and Ninety Nine', () => {
    const result = getWordFromNumber(9999);
    expect(result).to.equal('Nine Thousand Nine Hundred and Ninety Nine');
  });
  it('should return One Hundred Thousand', () => {
    const result = getWordFromNumber(100000);
    expect(result).to.equal('One Hundred Thousand');
  });
  it('should return One Million', () => {
    const result = getWordFromNumber(1000000);
    expect(result).to.equal('One Million');
  });

  it('should return One Million One Hundred and One', () => {
    const result = getWordFromNumber(1000101);
    expect(result).to.equal('One Million One Hundred and One');
  });
});