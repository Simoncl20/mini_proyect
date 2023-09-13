from calculators.calculator import Calculator

class Geometry:
    def __init__(self):
        self.calculator = Calculator()

    def area_of_rectangle(self, length, width):
        """Calculates the area of a rectangle."""
        return self.calculator.multiply(length, width)

    def area_of_triangle(self, base, height):
        """Calculates the area of a triangle."""
        return self.calculator.divide(self.calculator.multiply(base, height), 2)

    def volume_of_cylinder(self, radius, height):
        """Calculates the volume of a cylinder."""
        base_area = self.calculator.multiply(self.calculator.power(radius, 2), self.calculator.pi())
        return self.calculator.multiply(base_area, height)