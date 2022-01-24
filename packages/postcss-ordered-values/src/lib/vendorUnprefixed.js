/** @param {string} prop */
function vendorUnprefixed(prop) {
  return prop.replace(/^-\w+-/, '');
}

export default vendorUnprefixed;
