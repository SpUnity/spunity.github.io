function transformIdToString(objWithKeys, keysProp, keysObj) {
  let str = ''
  ;
  jQuery.each(objWithKeys, function(index, item) {
    if (index > 0) {
      str += ', ';
    }
    str += keysObj[keysProp][''+ item] || '';
  });
  return str;
}

export default transformIdToString;
