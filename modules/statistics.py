from calculators.calculator import Calculator

class Statistics:
    def __init__(self):
        self.calculator = Calculator()

    def mean(self, numbers):
        """Calculates the mean (average) of a list of numbers."""
        if not numbers:
            return None
        return self.calculator.divide(sum(numbers), len(numbers))

    def variance(self, numbers):
        """Calculates the variance of a list of numbers."""
        if not numbers:
            return None
        mean = self.mean(numbers)
        return sum(self.calculator.power(x - mean, 2) for x in numbers) / len(numbers)

    def standard_deviation(self, numbers):
        """Calculates the standard deviation of a list of numbers."""
        if not numbers:
            return None
        return self.calculator.square_root(self.variance(numbers))
