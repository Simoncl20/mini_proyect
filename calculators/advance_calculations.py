# advanced_calculations.py

from calculator import Calculator

class AdvancedCalculations:
    def __init__(self):
        self.calculator = Calculator()

    def quadratic_equation(self, a, b, c):
        """Solves a quadratic equation of the form ax^2 + bx + c = 0 and returns the roots."""
        discriminant = self.calculator.subtract(self.calculator.power(b, 2), self.calculator.multiply(4, self.calculator.multiply(a, c)))

        if discriminant > 0:
            root1 = self.calculator.divide(self.calculator.subtract(self.calculator.multiply(-1, b), self.calculator.square_root(discriminant)), self.calculator.multiply(2, a))
            root2 = self.calculator.divide(self.calculator.add(self.calculator.multiply(-1, b), self.calculator.square_root(discriminant)), self.calculator.multiply(2, a))
            return root1, root2
        elif discriminant == 0:
            root = self.calculator.divide(self.calculator.multiply(-1, b), self.calculator.multiply(2, a))
            return root
        else:
            return None  # Complex roots, not supported here

    def pythagorean_theorem(self, a, b):
        """Calculates the length of the hypotenuse in a right triangle using the Pythagorean theorem."""
        return self.calculator.square_root(self.calculator.add(self.calculator.power(a, 2), self.calculator.power(b, 2)))

    def factorial(self, n):
        """Calculates the factorial of a non-negative integer using the Calculator's factorial method."""
        return self.calculator.factorial(n)

# Example of using the AdvancedCalculations class
if __name__ == "__main__":
    adv_calc = AdvancedCalculations()

    # Solve a quadratic equation: 2x^2 - 11x + 12 = 0
    roots = adv_calc.quadratic_equation(2, -11, 12)
    print("Quadratic Equation Roots:", roots)

    # Calculate the length of the hypotenuse in a right triangle
    hypotenuse = adv_calc.pythagorean_theorem(3, 4)
    print("Hypotenuse Length:", hypotenuse)

    # Calculate the area of a circle with a radius of 5
    area = adv_calc.area_of_circle(5)
    print("Area of Circle:", area)

    # Calculate the factorial of 6
    fact = adv_calc.factorial(6)
    print("Factorial of 6:", fact)
