## `factorial(number: int) -> int`

#### Description:
This method calculates the factorial of a non-negative integer. It belongs to the class Calculator.

#### Parameters:
- `number` (`int`): The non-negative integer for which the factorial needs to be calculated.

#### Returns:
- `int`: The factorial of the given number.

#### Usage Cases:

```python
# Calculate the factorial of 5
calculator = Calculator()
result_case1 = calculator.factorial(5)
print(result_case1)
# Output: 120

# Calculate the factorial of 0
result_case2 = calculator.factorial(0)
print(result_case2)
# Output: 1
```

#### How it Works:
The method first checks if the given number is negative. If it is, an error message is printed and None is returned. If the number is 0, 1 is returned. Otherwise, the method recursively calls itself with the number decremented by 1 and multiplies the number with the result. This process continues until the number reaches 0, and the final result is returned.

#### Dependencies:
This method does not have any dependencies.