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
# Output
# 0    1
# 1    2
# 2    3
# 3    4
# 4    5
# dtype: int64
```

We can also give labels in this `series`.

```python
import pandas as pd

s = pd.Series([1,2,3,4,5], index=['a','b','c','d','e'])
print(s)
# Output
# a    1
# b    2
# c    3
# d    4
# e    5
# dtype: int64
```


```python
import pandas as pd

df = pd.DataFrame({ "names": ["Accounting", "Taxation", "HR"], "marks": [100, 53, 45] })
print(df)
# Output
#         names  marks
# 0  Accounting    100
# 1    Taxation     53
# 2          HR     45
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

### Tutorial
Python Pandas Crash Course (2025)
https://www.youtube.com/watch?v=E9WGC0SLPVs


### Difference between two Pandas DataFrames

1. Using merge + indicator=True (Recommended for full DataFrame comparison)
```python
import pandas as pd

df1 = pd.DataFrame({'id': [1, 2, 3, 4], 'value': ['a', 'b', 'c', 'd']})
df2 = pd.DataFrame({'id': [2, 4], 'value': ['b', 'd']})

# Merge and find rows only in df1
diff = df1.merge(df2, on=['id', 'value'], how='left', indicator=True).query('_merge == "left_only"').drop(columns=['_merge'])

print(df1)
print('\n\n')
print(df2)
print('\n\n')
print(diff)
```

2. Using isin if comparing just one column (Simpler if only one key)
Example if you just want to compare the 'id' column:
```python
import pandas as pd

df1 = pd.DataFrame({'id': [1, 2, 3, 4], 'value': ['a', 'b', 'c', 'd']})
df2 = pd.DataFrame({'id': [2, 4], 'value': ['b', 'd']})

diff = df1[~df1['id'].isin(df2['id'])]

print(df1)
print('\n\n')
print(df2)
print('\n\n')
print(diff)
```


### Parquet File Operations

Read and Write simple `Parquet` file.
```python
import pandas as pd

df = pd.DataFrame(data={'col1': [1, 2], 'col2': [3, 4]})

print('df')
print(df)

# Write Parquet file
df.to_parquet('data/df.parquet.gzip', compression='gzip')

# Read Parquet file
df = pd.read_parquet('data/df.parquet.gzip')

print('df')
print(df)
```

Write partitioned `Parquet` file.
```python
import pandas as pd

df = pd.read_csv('data/ParquetInputData.csv')

print('df')
print(df)

print(f"Successfully created partitioned Parquet files inside './data/browns/' folder.")

df.to_parquet(
  f'data/browns/events/',
  engine='pyarrow',
  partition_cols=['year', 'month'],
  index=False
)
```

Read partitioned `Parquet` file.
```python
import pandas as pd

df = pd.read_parquet('data\\browns\\events')

print('df')
print(df)
```
