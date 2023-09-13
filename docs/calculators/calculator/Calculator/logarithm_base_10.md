## `logarithm_base_10(number: float) -> float`

#### Description:
This method calculates the base 10 logarithm of a number. This method belongs to the class Calculator.

#### Parameters:
- `number` (`float`): The number for which the base 10 logarithm is to be calculated.

#### Returns:
- `float`: The base 10 logarithm of the given number.

#### Exceptions:
- None

#### Usage Cases:

```python
# Sample code to demonstrate a common use case
result_case1 = logarithm_base_10(100)
print(result_case1)

# Another use case (if applicable)
result_case2 = logarithm_base_10(1000)
print(result_case2)
```

#### How it Works:
The method first checks if the given number is less than or equal to 0. If it is, an error message is printed and None is returned. Otherwise, the method uses the math.log10() function to calculate the base 10 logarithm of the number and returns the result.

#### Dependencies:
- math: This method uses the math.log10() function to calculate the base 10 logarithm.