export function oneOf (value, validList) {
  for (let i = 0; i < validList.length; i++) {
    if (value === validList[i]) {
      return true;
    }
  }
  return false;
}

export function insideIonic (value) {
  let list = ['light', 'stable',
    'positive', 'calm', 'balanced', 'energized', 'assertive', 'royal', 'dark'];
  return oneOf(value, list);
}
