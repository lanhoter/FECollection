var isValid = function (s) {
  let judge = {
    '[': ']',
    '(': ')',
    '{': '}',
  }
  let parameter = s.split('');
  let stack = [];
  for (let i = 0; i < parameter.length; ++i) {
    if (judge[stack[stack.length - 1]] === parameter[i]) {
      stack.pop();
    } else {
      stack.push(parameter[i]);
    }
  }
  if (stack.length == 0) {
    return true;
  }
  return false;
};


console.log(isValid('()[]{}'))