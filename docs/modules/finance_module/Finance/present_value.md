## `present_value(future_value: float, rate: float, time: int) -> float`

#### Description:
This method calculates the present value of a future amount. It belongs to the class Finance.

#### Parameters:
- `future_value` (`float`): The future amount to be discounted.
- `rate` (`float`): The discount rate.
- `time` (`int`): The number of periods.

#### Returns:
- `float`: The present value of the future amount.

#### Usage Cases:

```python
# Sample code to demonstrate a common use case
result_case1 = present_value(1000, 5, 10)
print(result_case1)

# Another use case (if applicable)
result_case2 = present_value(500, 8, 5)
print(result_case2)
```

#### How it Works:
This method calculates the present value of a future amount using the formula: PV = FV / (1 + r/100)^t, where PV is the present value, FV is the future value, r is the discount rate, and t is the number of periods.

#### Dependencies:
- `Calculator`: This method depends on a Calculator object to perform mathematical calculations.