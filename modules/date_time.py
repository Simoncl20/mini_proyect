import datetime

class DateTime:
    def current_date(self):
        """Returns the current date in the format YYYY-MM-DD."""
        return datetime.date.today()

    def current_time(self):
        """Returns the current time in the format HH:MM:SS."""
        return datetime.datetime.now().strftime("%H:%M:%S")

    def days_until(self, target_date):
        """Calculates the number of days until a target date."""
        current_date = datetime.date.today()
        delta = target_date - current_date
        return delta.days

    def days_between(self, start_date, end_date):
        """Calculates the number of days between two dates."""
        delta = end_date - start_date
        return delta.days
