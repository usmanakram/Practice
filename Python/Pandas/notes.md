### What is Python Pandas?
Pandas is a Python library that helps you for Data Analysis. It performs data manipulation, data cleaning and data preprocessing.


Python Pandas is a library for data analysis and manipulation.


### Key Data Structures in Pandas
- Series (1 Dimensional)
- DataFrame (2 Dimensional)

In Pandas, `series` is a labeled array. On the other hand, in Python, `list` is an unlabeled array.

```python
import pandas as pd

s = pd.Series([1,2,3,4,5])
print(s)
```

We can also give labels in this `series`.

```python
import pandas as pd

s = pd.Series([1,2,3,4,5], index=['a','b','c','d','e'])
print(s)
```


```python
import pandas as pd

df = pd.DataFrame({ "names": ["Accounting", "Taxation", "HR"], "marks": [100, 53, 45] })
print(df)
```

Read CSV file.

```Python
import pandas as pd

df = pd.read_csv("data/Iris.csv")

print(df)

print('\n\ndf.head()')
print(df.head()) # it reads first 5 rows

print('\n\ndf.tail()')
print(df.tail()) # it reads last 5 rows

print('\n\ndf.describe()')
print(df.describe()) # it describes the DataFrame

print('\n\ndf.info()')
print(df.info()) # it returns the information of DataFrame
```

### Data Selection

Get one or two columns.

```python
import pandas as pd

df = pd.read_csv("data/Iris.csv")

# Get one column "Id"
print(df["Id"])

print("\n\n")
print(type(df["Id"])) # <class 'pandas.core.series.Series'>

# Get two column "Id" & "SepalLengthCm"
print("\n\n")
print(df[["Id", "SepalLengthCm"]])

print("\n\n")
print(type(df[["Id", "SepalLengthCm"]])) # <class 'pandas.core.frame.DataFrame'>
```

To get first row

```python
import pandas as pd

df = pd.read_csv("data/Iris.csv")

print(df.iloc[0])

print("\n\n")
print(type(df.iloc[0])) # <class 'pandas.core.series.Series'>
```

`df.dropna()` removes rows containing `NaN` (missing data).
`df.fillna()` fill missing data.
To update original data frame, we can add a parameter in `df.fillna()` as `inplace=True`

```python
import pandas as pd

df = pd.read_csv("data/data.csv")

print(df)

print('\n\ndf.dropna()')
print(df.dropna())

print('\n\ndf.fillna(0)')
print(df.fillna(0))

print('\n\ndf.fillna(0, inplace=True)')
print(df.fillna(0, inplace=True))
```

To rename column, we have a method `df.rename()`. Again, we can add `inplace=True` to update original data frame.

```python
import pandas as pd

df = pd.read_csv("data/Iris.csv")

print(df.rename(columns={"SepalLengthCm": "SL"}, inplace=True))
```

To change data type of a column, we have a method `.astype()`

```python
import pandas as pd

df = pd.read_csv("data/Iris.csv")

df.rename(columns={"SepalLengthCm": "SL"}, inplace=True)

print('df.info()')
print(df.info())

df['SL'] = df['SL'].astype(int)

print('\n\ndf.info()')
print(df.info())
```

To add a new column

```python
import pandas as pd

df = pd.read_csv("data/Iris.csv")

print(df)

df["zeros"] = [0 for i in range(len(df))]

print(df)
```

To add another column using exising column values.
And export manipulated data.

```python
import pandas as pd

df = pd.read_csv("data/Iris.csv")

print(df)

def fx(a):
  return a * a

df["zeros + 1"] = df["PetalLengthCm"].apply(fx)

print(df)

df.to_csv("data/export.csv", index=False)
```

### Merge two data frames

```python
import pandas as pd

df1 = pd.DataFrame({
  "names": ["Zahra", "Haleema", "Abdullah", "Abdul Rahman"],
  "marks": [93, 90, 91, 97]
  })

df2 = pd.DataFrame({
  "names": ["Fatima", "Ismael", "Abdul Momin", "Momina"],
  "marks": [94, 92, 90, 96]
  })

print(df1)
print('\n\n')
print(df2)
print('\n\n')

print(pd.concat([df1, df2]))
```

```python
import pandas as pd

df1 = pd.DataFrame({
  "names": ["Zahra", "Haleema"],
  "marks": [93, 90]
  })

df2 = pd.DataFrame({
  "names": ["Zahra", "Haleema", "Abdullah"],
  "roll": [1244, 1245, 1255]
  })

print(df1)
print('\n\n')
print(df2)
print('\n\n')

print(pd.merge(df1, df2, on="names"))
```

## Tutorial
Python Pandas Crash Course (2025)
https://www.youtube.com/watch?v=E9WGC0SLPVs


