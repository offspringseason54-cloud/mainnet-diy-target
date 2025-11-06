// Temporary polyfill for Node < 18 to satisfy Vite's structuredClone usage
if (typeof global.structuredClone !== 'function') {
  global.structuredClone = (obj) => {
    try {
      // Basic deep clone for plain objects/arrays
      return JSON.parse(JSON.stringify(obj));
    } catch (e) {
      return obj;
    }
  };
}