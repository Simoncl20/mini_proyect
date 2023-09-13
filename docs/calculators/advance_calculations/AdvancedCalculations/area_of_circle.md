## `area_of_circle(radius: float) -> float`

#### Description:
This method calculates the area of a circle. It belongs to the class AdvancedCalculations.

#### Parameters:
- `radius` (`float`): The radius of the circle.

#### Returns:
- `float`: The area of the circle.

#### Usage Cases:

```python
# Sample code to calculate the area of a circle
result_case1 = area_of_circle(2.5)
print(result_case1)

# Another use case
result_case2 = area_of_circle(5)
print(result_case2)
```

#### How it Works:
The method uses the `multiply` method from the `Calculator` class to multiply the result of `power(radius, 2)` with the value of `pi()`. The result is the area of the circle.

#### Dependencies:
- `Calculator`: This method depends on the `Calculator` class to perform mathematical calculations.