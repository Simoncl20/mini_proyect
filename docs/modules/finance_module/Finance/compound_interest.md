## `compound_interest(principal: float, rate: float, time: float) -> float`

#### Description:
This method performs the calculation of compound interest and is used for financial calculations. This method belongs to the class Finance.

#### Parameters:
- `principal` (`float`): The principal amount for which the compound interest is calculated.
- `rate` (`float`): The rate of interest per period, expressed as a decimal.
- `time` (`float`): The time period for which the interest is calculated.

#### Returns:
- `float`: The result of the compound interest calculation.

#### Exceptions:
This method does not throw any exceptions.

#### Usage Cases:

```python
# Sample code to demonstrate a common use case
result_case1 = compound_interest(1000, 5, 2)
print(result_case1)

# Another use case (if applicable)
result_case2 = compound_interest(5000, 4.5, 3)
print(result_case2)
```

#### How it Works:

The compound interest is calculated using the formula: A = P(1 + r/n)^(nt), where:
- A represents the final amount,
- P is the principal amount,
- r is the annual interest rate,
- n is the number of times that interest is compounded per year, and
- t is the time period in years.

This method uses the `multiply`, `power`, and `add` methods of the `Calculator` class to perform the necessary calculations.

#### Dependencies:
- `Calculator`: This dependency is used to perform arithmetic calculations required for the compound interest calculation.