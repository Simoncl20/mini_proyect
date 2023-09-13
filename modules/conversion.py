class Conversion:
    def celsius_to_fahrenheit(self, celsius):
        """Converts temperature from Celsius to Fahrenheit."""
        return (celsius * 9/5) + 32

    def fahrenheit_to_celsius(self, fahrenheit):
        """Converts temperature from Fahrenheit to Celsius."""
        return (fahrenheit - 32) * 5/9

    def miles_to_kilometers(self, miles):
        """Converts distance from miles to kilometers."""
        return miles * 1.60934

    def kilometers_to_miles(self, kilometers):
        """Converts distance from kilometers to miles."""
        return kilometers / 1.60934

    def pounds_to_kilograms(self, pounds):
        """Converts weight from pounds to kilograms."""
        return pounds * 0.453592

    def kilograms_to_pounds(self, kilograms):
        """Converts weight from kilograms to pounds."""
        return kilograms / 0.453592
