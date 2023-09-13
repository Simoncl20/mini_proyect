## `exponential(number: float) -> float`

#### Description:
This method calculates the exponential function of a given number. This method belongs to the class Calculator.

#### Parameters:
- `number` (`float`): The number for which the exponential function needs to be calculated.

#### Returns:
- `float`: The result of the exponential function.

#### Exceptions:
This method does not throw any exceptions.

#### Usage Cases:

```python
# Calculate the exponential function of a number
result_case1 = exponential(2)
print(result_case1)

# Calculate the exponential function of another number
result_case2 = exponential(3.5)
print(result_case2)
```

#### How it Works:
The `math.exp()` function from the `math` module is used to calculate the exponential function of the given number.

#### Dependencies:
- `math`: The `math` module is imported to use the `exp()` function for calculating the exponential.