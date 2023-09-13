## `days_until(target_date: datetime.date) -> int`

#### Description:
This method calculates the number of days until a target date. This method belongs to the class DateTime.

#### Parameters:
- `target_date` (`datetime.date`): The date for which the number of days until it needs to be calculated.

#### Returns:
- `int`: The number of days until the target date.

#### Exceptions:
This method does not throw any exceptions.

#### Usage Cases:

```python
# Sample code to demonstrate a common use case
datetime_obj = DateTime()
target_date = datetime.date(2022, 12, 31)
result = datetime_obj.days_until(target_date)
print(result)

# Output: 364

# Another use case (if applicable)
target_date = datetime.date(2022, 1, 1)
result = datetime_obj.days_until(target_date)
print(result)

# Output: -1
```

#### How it Works:
The method first gets the current date using `datetime.date.today()`. Then it calculates the difference between the target date and the current date using the `-` operator. The resulting `delta` is a `datetime.timedelta` object. Finally, the number of days is extracted from the `delta` object using `delta.days` and returned.

#### Dependencies:
- `datetime.date`: This class is imported from the `datetime` module and is used to represent dates.
- `datetime`: This module is imported to access the `date` class and perform date-related operations.