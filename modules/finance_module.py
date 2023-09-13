from calculators.calculator import Calculator

class Finance:
    def __init__(self):
        self.calculator = Calculator()

    def compound_interest(self, principal, rate, time):
        """Calculates the compound interest."""
        return self.calculator.multiply(principal, self.calculator.power(self.calculator.add(1, self.calculator.divide(rate, 100)), time))

    def future_value(self, present_value, rate, time):
        """Calculates the future value of an investment."""
        return self.calculator.multiply(present_value, self.calculator.power(self.calculator.add(1, self.calculator.divide(rate, 100)), time))

    def present_value(self, future_value, rate, time):
        """Calculates the present value of a future amount."""
        return self.calculator.divide(future_value, self.calculator.power(self.calculator.add(1, self.calculator.divide(rate, 100)), time))
