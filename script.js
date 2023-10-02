//your JS code here. If required.
function flatten(value) {
	// Initialize an empty result array or object, depending on the input type
  let result;
  
  if (Array.isArray(value)) {
    result = [];
  } else if (typeof value === 'object' && value !== null) {
    result = {};
  } else {
    // If the input is a primitive value, return it as is
    return value;
  }
	for (const key in value) {
    if (value.hasOwnProperty(key)) {
      const flattenedValue = flatten(value[key]);

      if (Array.isArray(result)) {
        // If the result is an array, concatenate the flattened value
        result = result.concat(flattenedValue);
      } else {
        // If the result is an object, merge the flattened key-value pairs
        for (const innerKey in flattenedValue) {
          if (flattenedValue.hasOwnProperty(innerKey)) {
            result[innerKey] = flattenedValue[innerKey];
          }
        }
      }
    }
  }

  return result;
 
}

module.exports=flatten;
