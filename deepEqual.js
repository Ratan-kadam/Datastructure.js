export default function deepEqual(valueA, valueB) {
  const deeptypeA = Object.prototype.toString.call(valueA);
  const deeptypeB = Object.prototype.toString.call(valueB);

  if (deeptypeA !== deeptypeB) {
    return false;
  }

  if(deeptypeA == deeptypeB && (deeptypeA === '[object Object]' || deeptypeA === '[object Array]')) {
    const keyValA = Object.entries(valueA);
    const keyValB = Object.entries(valueB);
    
    if(keyValA.length !== keyValB.length) { return false; }

    return keyValA.every(([key, val]) => Object.hasOwn(valueB, key) && deepEqual(val, valueB[key]));
  }
  return Object.is(valueA, valueB);
}
