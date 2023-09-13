## `current_date() -> str`

#### Description:
This method returns the current date in the format "YYYY-MM-DD". This method belongs to the class DateTime.

#### Parameters:
This method does not have any parameters.

#### Returns:
- `str`: The current date in the format "YYYY-MM-DD".

#### Exceptions:
This method does not throw any exceptions.

#### Usage Cases:

```python
# Sample code to demonstrate a common use case
date = current_date()
print(date)
```

#### How it Works:
The method uses the `datetime` module to get the current date using the `date.today()` function. It then formats the date as a string in the format "YYYY-MM-DD" and returns it.

#### Dependencies:
- `datetime`: This module is used to get the current date.