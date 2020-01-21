
// call

// When the first parameter is null or undefined, this points to global obj: windows, value points to auto-boxing object:
// Such as String、Number、Boolean
// To avoid conflicts between function names and context (context) attributes, use the Symbol type as the unique value
// Execute the function as the expected context attribute
// Delete the attribute after the function execution is completed
// Return the execution result


Function.prototype.myCall = function(context, ...args) {
  context =  (context ?? window) || new Object(context)
  const key = Symbol()
  context[key] = this
  const result = context[key](...args)
  delete context[key]
  return result
}
