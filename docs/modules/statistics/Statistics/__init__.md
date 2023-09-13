## `__init__() -> None`

#### Description:
This method initializes an instance of the `Statistics` class. It creates an instance of the `Calculator` class and assigns it to the `calculator` attribute.

#### Parameters:
This method does not take any parameters.

#### Returns:
This method does not return any value (`None`).

#### Exceptions:
This method does not throw any exceptions.

#### Usage Cases:

```python
# Create an instance of the Statistics class
statistics = Statistics()
```

#### How it Works:
The `__init__` method is called when a new instance of the `Statistics` class is created. It initializes the instance by creating a new instance of the `Calculator` class, which will be used for performing calculations.

#### Dependencies:
- `Calculator`: This class is imported from the `calculator` module. It is used for performing calculations.