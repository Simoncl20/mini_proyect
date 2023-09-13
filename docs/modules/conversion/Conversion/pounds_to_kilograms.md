## `pounds_to_kilograms(pounds: float) -> float`

#### Description:
This method performs a conversion from weight in pounds to weight in kilograms. This method belongs to the class 'Conversion'.

#### Parameters:
- `pounds` (`float`): The weight in pounds that needs to be converted to kilograms.

#### Returns:
- `float`: The weight in kilograms after the conversion.

#### Usage Cases:

```python
# Sample code to demonstrate a common use case
conversion = Conversion()
result_case1 = conversion.pounds_to_kilograms(10)
print(result_case1)
# Output: 4.53592

# Another use case (if applicable)
result_case2 = conversion.pounds_to_kilograms(20)
print(result_case2)
# Output: 9.07184
```

#### How it Works:
The method takes the weight in pounds as input and multiplies it by the conversion factor of 0.453592 to get the weight in kilograms.

#### Dependencies:
This method does not have any dependencies.