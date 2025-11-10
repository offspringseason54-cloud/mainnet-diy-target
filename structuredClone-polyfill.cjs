// Temporary polyfill for Node < 18 to satisfy Vite's structuredClone usage
if (typeof global.structuredClone !== 'function') {
  global.structuredClone = (obj) => {
    try {
      return JSON.parse(JSON.stringify(obj));
    } catch (e) {
      return obj;
    }
  };
}

// Provide crypto.getRandomValues for environments without WebCrypto (Node < 18)
try {
  const nodeCrypto = require('crypto');
  // Patch the Node crypto module to expose getRandomValues if missing
  if (typeof nodeCrypto.getRandomValues !== 'function') {
    nodeCrypto.getRandomValues = (typedArray) => {
      if (!typedArray || typeof typedArray.length !== 'number') {
        throw new TypeError('Expected a typed array');
      }
      const buffer = nodeCrypto.randomBytes(typedArray.length);
      for (let i = 0; i < typedArray.length; i++) {
        typedArray[i] = buffer[i];
      }
      return typedArray;
    };
  }
  if (!globalThis.crypto) {
    globalThis.crypto = {};
  }
  if (typeof globalThis.crypto.getRandomValues !== 'function') {
    globalThis.crypto.getRandomValues = (typedArray) => {
      if (!typedArray || typeof typedArray.length !== 'number') {
        throw new TypeError('Expected a typed array');
      }
      const buffer = nodeCrypto.randomBytes(typedArray.length);
      for (let i = 0; i < typedArray.length; i++) {
        typedArray[i] = buffer[i];
      }
      return typedArray;
    };
  }
} catch (_) {
  // ignore
}