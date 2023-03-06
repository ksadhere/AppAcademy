# Array practice

Identify the time complexity of each of these functions with a 1 sentence
justification for your answer. Assume `arr` is an array of length _n_.

## `arr.push()`

Time complexity: O(1)
Space complexity: O(1)
Justification: Array.prototype.push() has the time space complexity of O(1) because it only creates one additional space at the end of the calling array and assigns the variable a reference value.

[push on MDN][push]

## `arr.pop()`

Time complexity: O(1)
Space complexity: O(1)
Justification: Array.prototype.pop() has the time space complexity of O(1) since it modifies the original array by removing the last value by reference

[pop on MDN][pop]

## `arr.shift()`

Time complexity: O(n)
Space complexity: O(n)
Justification: Array.prototype.shift() has the time space complexity of O(n) since it must change the index value of all references within the array by -1

[shift on MDN][shift]

## `arr.unshift()`

Time complexity: O(n)
Space complexity: O(n)
Justification: Time space complexity can vary for Array.prototype.splice() depending on the index the object caller wants to access. In worst case scenario, the complexity is O(n)

[unshift on MDN][unshift]

## `arr.splice()`

Time complexity: O(n)
Space complexity: O(n)
Justification: Array.prototype.unshift(), has the time space complexity of O(n), since it must change the index values of existing references by +1

[splice on MDN][splice]

## `arr.slice()`

Time complexity: O(n)
Space complexity: O(n)
Justification: Array.prototype.slice() has the time space complexity of O(n) where (n) is: (end) - (start)

[slice on MDN][slice]

## `arr.indexOf()`

Time complexity: O(n)
Space complexity: O(n)
Justification: Array.prototype.indexOf() has the time space complexity of O(n) at worst as it depends on the order of the array elements and the length of the array, (n)

[indexOf on MDN][indexof]

## `arr.map()`

Time complexity: O(n)
Space complexity: O(n)
Justification: The time space complexity of Array.prototype.map() is O(n) because it loops through the array, and pushes the return values of the callback function into a new array

[map on MDN][map]

## `arr.filter()`

Time complexity: O(n)
Space complexity: O(n)
Justification: Same as Array.prototype.map

[filter on MDN][filter]

## `arr.reduce()`

Time complexity: O(n)
Space complexity: O(n)
Justification: Array.prototype.reverse modifies the provided object array in place, and it does not create an copy of the object array

[reduce on MDN][reduce]

## `arr.reverse()`

Time complexity: O(n)
Space complexity: O(n)
Justification: Array.prototype.reverse modifies the provided object array in place, and it does not create an copy of the object array

[reverse on MDN][reverse]

## `[...arr]`

Time complexity: O(n)
Space complexity: O(?)
Justification: _Fill this in_

[spread on MDN][spread]

[push]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push
[pop]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop
[shift]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift
[unshift]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift
[splice]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
[slice]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
[indexof]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
[map]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
[filter]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
[reduce]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
[reverse]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse
[spread]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
