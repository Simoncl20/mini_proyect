## `kilograms_to_pounds(kilograms: float) -> float`

#### Description:
This method performs weight conversion from kilograms to pounds. It belongs to the class Conversion.

#### Parameters:
- `kilograms` (`float`): The weight value in kilograms to be converted to pounds.

#### Returns:
- `float`: The weight value in pounds.

#### Usage Cases:

```python
# Sample code to demonstrate a common use case
conversion = Conversion()
result_case1 = conversion.kilograms_to_pounds(10)
print(result_case1)

# Output: 22.04622621848876

# Another use case (if applicable)
result_case2 = conversion.kilograms_to_pounds(5)
print(result_case2)

# Output: 11.02311310924438
```

#### How it Works:

The method takes a weight value in kilograms and divides it by the conversion factor 0.453592 to obtain the equivalent value in pounds. The result is then returned.

#### Dependencies:
This method does not have any dependencies.