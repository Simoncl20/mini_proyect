## `future_value(present_value: float, rate: float, time: int) -> float`

#### Description:
This method calculates the future value of an investment. It belongs to the class 'Finance'.

#### Parameters:
- `present_value` (`float`): The present value of the investment.
- `rate` (`float`): The rate of interest per period.
- `time` (`int`): The number of periods.

#### Returns:
- `float`: The future value of the investment.

#### Usage Cases:

```python
# Sample code to demonstrate a common use case
finance = Finance()
result_case1 = finance.future_value(1000, 5, 10)
print(result_case1)

# Another use case (if applicable)
result_case2 = finance.future_value(500, 3, 5)
print(result_case2)
```

#### How it Works:
The method calculates the future value of an investment by multiplying the present value with the result of raising the sum of 1 and the rate divided by 100 to the power of the number of periods.

#### Dependencies:
- `Calculator`: This method depends on the `Calculator` class from the `calculators.calculator` module. The `Calculator` class provides mathematical operations such as addition, division, and power.