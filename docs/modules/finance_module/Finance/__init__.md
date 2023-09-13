## `__init__(self) -> None`

#### Description:
This method initializes an instance of the Finance class. It creates a Calculator object and assigns it to the instance variable 'calculator'.

#### Parameters:
This method does not take any parameters.

#### Returns:
This method does not return any value.

#### Exceptions:
This method does not throw any exceptions.

#### Usage Cases:

```python
# Initializing an instance of the Finance class
finance = Finance()
```

#### How it Works:
The `__init__` method is called when a new instance of the Finance class is created. It initializes the instance by creating a Calculator object and assigning it to the 'calculator' instance variable. This allows the instance of the Finance class to use the Calculator object for financial calculations.

#### Dependencies:
- `Calculator`: This method depends on the Calculator class from the 'calculators.calculator' module. The Calculator class provides the functionality for financial calculations.