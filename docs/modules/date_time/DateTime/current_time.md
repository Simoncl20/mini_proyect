## `current_time() -> str`

#### Description:
This method returns the current time in the format HH:MM:SS. This method belongs to the class DateTime.

#### Parameters:
This method does not have any parameters.

#### Returns:
- `str`: The current time in the format HH:MM:SS.

#### Exceptions:
This method does not throw any exceptions.

#### Usage Cases:

```python
# Sample code to demonstrate a common use case
date_time = DateTime()
result_case1 = date_time.current_time()
print(result_case1)
```

#### How it Works:
The method uses the `datetime` module to get the current date and time. It then formats the time using the `strftime` method with the format "%H:%M:%S" to extract the hours, minutes, and seconds. The formatted time is returned as a string.

#### Dependencies:
- `datetime`: This module is used to get the current date and time.