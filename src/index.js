function getFontShorthand(element) {
  const style = window.getComputedStyle(element);

  return (
    style.font
    || `${style['font-style']} ${style['font-variant']} ${style['font-weight']} ${style['font-size']}/${style['line-height']} ${style['font-family']}`
  );
}

export default function updateInputWidth(element) {
  if (typeof window === 'undefined') {
    return null;
  }

  const font = getFontShorthand(element);
  const text = element.value || element.placeholder;

  const canvas = updateInputWidth.canvas || (updateInputWidth.canvas = document.createElement('canvas'));
  const context = canvas.getContext('2d');
  context.font = font;
  const { width } = context.measureText(text);
  const ceilWidth = Math.ceil(width);

  element.style.width = `${ceilWidth}px`;

  return ceilWidth;
}
