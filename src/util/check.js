export function oneOf (value, list, ignore) {
  for (let i = 0; i < list.length; i++) {
    if ( (value === list[i]) || ((ignore === true) && (value === '')) ) {
      return true;
    }
  }
  return false;
}

export function insideIonic (value) {
  let list = ['light', 'stable',
    'positive', 'calm', 'balanced', 'energized', 'assertive', 'royal', 'dark'];
  return oneOf(value, list, true);
}
