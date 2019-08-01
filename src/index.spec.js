import updateInputWidthDefault, {
  updateInputWidth,
  getFontShorthand,
  measureText,
} from './index';

it('exports updateInputWidth() by default', () => {
  expect(updateInputWidthDefault).toBeDefined();
  expect(updateInputWidthDefault).toBe(updateInputWidth);
});

describe('updateInputWidth()', () => {
  it('sets valid width given empty input with placeholder', () => {
    const element = document.createElement('input');
    element.style.fontFamily = 'Arial';
    element.style.fontSize = '20px';

    const result = updateInputWidth(element);

    expect(result).toEqual(expect.any(Number));
  });
});

describe('getFontShorthand()', () => {
  it('returns valid font shorthand for a given element', () => {
    const element = document.createElement('input');
    element.style.fontFamily = 'Arial';
    element.style.fontSize = '20px';

    const result = getFontShorthand(element);

    expect(result).toEqual(expect.any(String));
  });
});

describe('measureText()', () => {
  it('returns valid measurement given text and font CSS shorthand', () => {
    const text = 'Hello world';
    const font = 'normal normal 600 normal 20px / 25px Arial, sans-serif';

    const result = measureText(text, font);

    expect(result).toEqual(expect.any(Number));
  });
});
