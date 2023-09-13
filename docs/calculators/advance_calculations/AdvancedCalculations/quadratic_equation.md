## `quadratic_equation(a: Type, b: Type, c: Type) -> ReturnType`

#### Description:
This method solves a quadratic equation of the form ax^2 + bx + c = 0 and returns the roots. This method belongs to the class AdvancedCalculations.

#### Parameters:
- `a` (`Type`): The coefficient of x^2 in the quadratic equation.
- `b` (`Type`): The coefficient of x in the quadratic equation.
- `c` (`Type`): The constant term in the quadratic equation.

#### Returns:
- `ReturnType`: The roots of the quadratic equation. If the discriminant is positive, it returns two real roots. If the discriminant is zero, it returns one real root. If the discriminant is negative, it returns None, indicating complex roots.

#### Usage Cases:

```python
# Sample code to demonstrate a common use case
result_case1 = quadratic_equation(1, -3, 2)
print(result_case1)

# Output:
# (2.0, 1.0)

# Another use case (if applicable)
result_case2 = quadratic_equation(1, 2, 1)
print(result_case2)

# Output:
# -1.0
```

#### How it Works:

The method calculates the discriminant of the quadratic equation using the formula: discriminant = b^2 - 4ac. Based on the value of the discriminant, the method determines the number and type of roots.

If the discriminant is positive, the method calculates two real roots using the quadratic formula. The roots are calculated as:
- root1 = (-b - √discriminant) / (2a)
- root2 = (-b + √discriminant) / (2a)

If the discriminant is zero, the method calculates one real root using the quadratic formula. The root is calculated as:
- root = -b / (2a)

If the discriminant is negative, indicating complex roots, the method returns None.

#### Dependencies:
- `Calculator`: This method uses the Calculator class for performing mathematical operations.