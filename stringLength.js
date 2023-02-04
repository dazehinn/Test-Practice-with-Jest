function stringLength(string) {
 if((string.length >= 0) && (string.length <= 10))
  return string.length;
  else throw  new Error('String length is not within 1 and 10 inclusive');
}

// module.export = stringLength;
export default stringLength;