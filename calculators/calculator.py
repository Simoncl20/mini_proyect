import math

class Calculator:
    def add(self, a, b):
        """Performs addition."""
        return a + b

    def subtract(self, a, b):
        """Performs subtraction."""
        return a - b

    def multiply(self, a, b):
        """Performs multiplication."""
        return a * b

    def divide(self, a, b):
        """Performs division. Returns None if b is 0."""
        if b == 0:
            print("Error: Cannot divide by zero.")
            return None
        return a / b

    def power(self, base, exponent):
        """Calculates the power of a number."""
        return base ** exponent

    def square_root(self, number):
        """Calculates the square root of a number."""
        if number < 0:
            print("Error: Cannot calculate the square root of a negative number.")
            return None
        return math.sqrt(number)

    def factorial(self, number):
        """Calculates the factorial of a non-negative integer."""
        if number < 0:
            print("Error: Cannot calculate the factorial of a negative number.")
            return None
        if number == 0:
            return 1
        return number * self.factorial(number - 1)

    def logarithm(self, number, base=10):
        """Calculates the logarithm of a number in a specific base (default is base 10)."""
        if number <= 0 or base <= 0 or base == 1:
            print("Error: Invalid arguments for logarithm calculation.")
            return None
        return math.log(number, base)

    def sine(self, angle_degrees):
        """Calculates the sine of an angle in degrees."""
        return math.sin(math.radians(angle_degrees))

    def cosine(self, angle_degrees):
        """Calculates the cosine of an angle in degrees."""
        return math.cos(math.radians(angle_degrees))

    def tangent(self, angle_degrees):
        """Calculates the tangent of an angle in degrees."""
        return math.tan(math.radians(angle_degrees))

    def absolute_value(self, number):
        """Calculates the absolute value of a number."""
        return abs(number)

    def exponential(self, number):
        """Calculates the exponential function of a number."""
        return math.exp(number)

    def integer_quotient(self, a, b):
        """Calculates the integer quotient of the division of a by b."""
        return a // b

    def remainder(self, a, b):
        """Calculates the remainder of the division of a by b."""
        return a % b

    def binomial_coefficient(self, n, k):
        """Calculates the binomial coefficient (n choose k)."""
        if n < 0 or k < 0 or k > n:
            print("Error: Invalid arguments for binomial coefficient calculation.")
            return None
        return self.factorial(n) // (self.factorial(k) * self.factorial(n - k))

    def natural_logarithm(self, number):
        """Calculates the natural logarithm (base e) of a number."""
        if number <= 0:
            print("Error: Cannot calculate the natural logarithm of a non-positive number.")
            return None
        return math.log(number)

    def logarithm_base_2(self, number):
        """Calculates the base 2 logarithm of a number."""
        if number <= 0:
            print("Error: Cannot calculate the base 2 logarithm of a non-positive number.")
            return None
        return math.log2(number)

    def logarithm_base_10(self, number):
        """Calculates the base 10 logarithm of a number."""
        if number <= 0:
            print("Error: Cannot calculate the base 10 logarithm of a non-positive number.")
            return None
        return math.log10(number)

# You can add more mathematical functions as needed
# Now, you can use this Calculator class to perform a wide range of mathematical calculations in your Python programs. Here's an example of how to use it:

# python
# Copy code
# Example of using the Calculator class

# Create an instance of the Calculator class
calc = Calculator()

# Perform some calculations
result_add = calc.add(5, 3)
result_subtract = calc.subtract(10, 4)
result_multiply = calc.multiply(6, 2)
result_divide = calc.divide(8, 2)

# Print results
print("Addition:", result_add)
print("Subtraction:", result_subtract)
print("Multiplication:", result_multiply)
print("Division:", result_divide)