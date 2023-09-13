## `volume_of_cylinder(radius: float, height: float) -> float`

#### Description:
This method calculates the volume of a cylinder. It belongs to the class Geometry.

#### Parameters:
- `radius` (`float`): The radius of the base of the cylinder.
- `height` (`float`): The height of the cylinder.

#### Returns:
- `float`: The volume of the cylinder.

#### Exceptions:
This method does not throw any exceptions.

#### Usage Cases:

```python
# Calculate the volume of a cylinder with radius 3 and height 5
result_case1 = volume_of_cylinder(3, 5)
print(result_case1)

# Calculate the volume of a cylinder with radius 2.5 and height 10.2
result_case2 = volume_of_cylinder(2.5, 10.2)
print(result_case2)
```

#### How it Works:
This method calculates the volume of a cylinder by first calculating the area of the base using the formula pi * radius^2. Then, it multiplies the base area by the height of the cylinder to obtain the volume.

#### Dependencies:
- `Calculator`: This method depends on the Calculator class from the calculators.calculator module, which is used to perform mathematical calculations.