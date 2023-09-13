## `fahrenheit_to_celsius(fahrenheit: float) -> float`

#### Description:
This method performs the conversion of temperature from Fahrenheit to Celsius. It belongs to the class 'Conversion'.

#### Parameters:
- `fahrenheit` (`float`): The temperature value in Fahrenheit to be converted.

#### Returns:
- `float`: The temperature value converted from Fahrenheit to Celsius.

#### Usage Cases:

```python
# Sample code to demonstrate a common use case
conversion = Conversion()
result_case1 = conversion.fahrenheit_to_celsius(77)
print(result_case1)

# Output:
# 25.0

# Another use case (if applicable)
result_case2 = conversion.fahrenheit_to_celsius(32)
print(result_case2)

# Output:
# 0.0
```

#### How it Works:
The method takes a temperature value in Fahrenheit as input and converts it to Celsius using the formula `(fahrenheit - 32) * 5/9`. The resulting value is returned.

#### Dependencies:
This method does not have any dependencies.