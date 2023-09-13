## `power(base: Any, exponent: Any) -> Any`

#### Description:
This method performs the calculation of the power of a number. It belongs to the class 'Calculator'.

#### Parameters:
- `base` (`Any`): The base number.
- `exponent` (`Any`): The exponent to which the base number will be raised.

#### Returns:
- `Any`: The result of the base number raised to the exponent.

#### Exceptions:
This method does not throw any exceptions.

#### Usage Cases:

```python
# Sample code to demonstrate a common use case
calc = Calculator()

result_case1 = calc.power(2, 3)
print(result_case1)  # Output: 8

result_case2 = calc.power(5, 2)
print(result_case2)  # Output: 25
```

#### How it Works:
The method receives a base number and an exponent. It calculates the result of raising the base number to the exponent using the `**` operator and returns the result.

#### Dependencies:
This method does not have any dependencies.