####################################################################################

## 1- Getting Started

####################################################################################

////////////////////////////////////////////////////////////////////////////////////

### 1- What is Python-mpqlmxtk51 (lesson 1.1)

////////////////////////////////////////////////////////////////////////////////////

### 2- Installing Python-iihw91lbee

Download `python` from `https://python.org` and install.
Python version 3.7.0

Go to `cmd` type
```cmd
$ python
```

To exit `Ctrl` + `z`

////////////////////////////////////////////////////////////////////////////////////

### 3- Python Interpreter-io70t92ftd

////////////////////////////////////////////////////////////////////////////////////

### 4- Code Editors-27bcmuv2o9

////////////////////////////////////////////////////////////////////////////////////

### 5- Your First Python Program-5og4j1we6v

print('Hello World')
OR
print("Hello World")

```python
print("Hello World")
print("*" * 10)
```

////////////////////////////////////////////////////////////////////////////////////

### 6- Python Extension-pr7k0ujrju

Linting is about finding potential errors in our code.
Linter is a program or a tool that analyzes our code and find these potential problems.
For python there are several linters out there, `pylint` is one of the mose popular ones that this python extension (VS Code Python extension) uses by default.

```cmd
$ pip install -U pylint
```

////////////////////////////////////////////////////////////////////////////////////

### 7- Linting Python Code-8iy30b0dpw

////////////////////////////////////////////////////////////////////////////////////

### 8- Formatting Python Code-izmpbcvdm2

In python community we have a bunch of documents called `Python Enhancement Proposals` or `PEPs`.

Google Search: "python peps"
Results:
https://peps.python.org/

The one that is very popular among python developers is `PEP 8` which is a style guide for python code. A style guide is basically a document that defines a bunch of rules for formating and styling our code. If you follow these convensions the code that you write will end up being consistant with other people's code.

`PEP 8` documentation:
https://peps.python.org/pep-0008/

```cmd
$ pip install -U autopep8
```

////////////////////////////////////////////////////////////////////////////////////

### 9- Running Python Code-2cfdl0o7nv

Search an extension named `Code Runner`

////////////////////////////////////////////////////////////////////////////////////

### 10- Python Implementations-tgmt8u0lfg

////////////////////////////////////////////////////////////////////////////////////

### 11- How Python Code is Executed-gidwbufhim


`Java Code` => `Java Bytecode` => `Machine Code`

`Java Code` => `Compiler` converts it into `Java Bytecode` => `Java Virtual Machine` converts it into `Machine Code`


`Python Code` => `Python Bytecode` => `Machine Code`

`Python Code` => `CPython` converts it into `Python Bytecode` => `Python Virtual Machine` converts it into `Machine Code`

////////////////////////////////////////////////////////////////////////////////////

### 12- Quiz-hzwz1ve3ra

////////////////////////////////////////////////////////////////////////////////////

####################################################################################

## 2- Primitive Types

####################################################################################

////////////////////////////////////////////////////////////////////////////////////

### 1- Variables-r80549shcd

```python
students_count = 1000
rating = 4.99
is_published = True
course_name = "Python Programming"
```

Python is a case-sensitive language.
In Python, `boolean` values will always start with capital letters, like `True` and `False`

////////////////////////////////////////////////////////////////////////////////////

### 2- Variable Names-zudbog5ymw

////////////////////////////////////////////////////////////////////////////////////

### 3- Strings-w1bhzon3dn

```python
course = "Python Programming"
message = """
Hi John, 

This is Mosh from codewithmosh.com

Blah blah blah
"""

# To get the length of string
print(len(course))

# To get the first character of a string
print(course[0])

# To get the last character of a string
print(course[-1])

# To get a new string containing the first 3 characters of original string
print(course[0:3])

# To get a new string that exactly the same as original string
print(course[0:])

# To get a new string containing the first 3 characters of original string
print(course[:3])

# To get the copy of original string
print(course[:])
```

////////////////////////////////////////////////////////////////////////////////////

### 4- Escape Sequences-vt3stkufee

```python
# course = "Python Programming"
course = "Python \"Programming"
```

`Backslash` is an `escape character` and `backslash` + `escape character` is an `escape sequence`.
Here are some examples of `escape sequence`.

```python
# \"
# \'
# \\
# \n
```

////////////////////////////////////////////////////////////////////////////////////

### 5- Formatted Strings-ucex482cm7

```python
first = "Usman"
last = "Akram"

# full = first + " " + last

# Above can be achieved using formated string
full = f"{first} {last}"
print(full)
```

////////////////////////////////////////////////////////////////////////////////////

### 6- String Methods-hq5e0i3qzv

Everything in Python is an object.

```python
course = "  python Programming"
print(course.upper())
print(course.lower())
print(course.title())
print(course.strip())
print(course.lstrip())
print(course.rstrip())
print(course.find("Pro"))
print(course.replace("p", "j"))
print("Pro" in course)
print("swift" not in course)
print(course)
```

////////////////////////////////////////////////////////////////////////////////////

### 7- Numbers-j4xvvlfapu

```python
print(10 + 3)
print(10 - 3)
print(10 * 3)
print(10 / 3)
print(10 // 3) # for integer answer
print(10 % 3)
print(10 ** 3) # left to the power of right

# Augmented assignment operator
x = 10
x += 3
```

////////////////////////////////////////////////////////////////////////////////////

### 8- Working with Numbers-j9f2cgc1q3

```python
import math

print(round(2.9))
print(abs(-2.9))

print(math.ceil(2.2))
```

////////////////////////////////////////////////////////////////////////////////////

### 9- Type Conversion-7zlpjmcxt4

Here are some built-in functions for type conversion in Python.

`int(x)`, `float(x)`, `bool(x)`, `str(x)`

```python
x = input("x: ")
# print(type(x))

y = int(x) + 1
print(f"x: {x}, y: {y}")

# Here are some examples of `Falsy` values:
# ""
# 0
# None
```

////////////////////////////////////////////////////////////////////////////////////

### 10- Quiz-l2kjwxnwuw

////////////////////////////////////////////////////////////////////////////////////

####################################################################################

## 3- Control Flow

####################################################################################

////////////////////////////////////////////////////////////////////////////////////

### 1- Comparison Operators-jw74jr9ssz

```python
print("bag" > "apple")
print("bag" == "BAG")
print(ord("b"))
print(ord("B"))
```

////////////////////////////////////////////////////////////////////////////////////

### 2- Conditional Statements-kmlq7fvlyq

```python
temperature = 15
if temperature > 30:
  print("It's warm")
  print("Drink water")
elif temperature > 20:
  print("It's nice")
else:
  print("It's cold")
print("Done")
```

////////////////////////////////////////////////////////////////////////////////////

### 3- Ternary Operator-7qbngvy5mk

```python
age = 22

# if age >= 18:
#   message = "Eligible"
# else:
#   message = "Not eligible"

message = "Eligible" if age >= 18 else "Not eligible"
print(message)
```

////////////////////////////////////////////////////////////////////////////////////

### 4- Logical Operators-5xv5xb30oa

```python
high_income = True
good_credit = True
student = True

if high_income and good_credit:
  print("Eligible")
else:
  print("Not eligible")

if not student:
  print("Eligible")
else:
  print("Not eligible")

if (high_income or good_credit) and not student:
  print("Eligible")
else:
  print("Not eligible")
```

////////////////////////////////////////////////////////////////////////////////////

### 5- Short-circuit Evaluation-xvd3cm6sl1

```python
if high_income and good_credit and not student:
  print("Eligible")
```

One thing we need to know about these boolen operators is that they are `short-circuit`. What do we mean by that?
When python interpreter start evaluation of these type of logical operations it evaluate conditions one by one. If it find that first argument is true it continues the evaluation of second argument if that is also true, all the way to the last argument. However, as soon as one of these arguments is false the evaluation stops.
Similarly in the case of `or` operator, the evaluation immediately stops when at least one expression evaluates as true.
So in Python, logical operators are short-circuit.

////////////////////////////////////////////////////////////////////////////////////

### 6- Chaining Comparison Operators-d61r2nb73j

```python
# age should be between 18 and 65

age = 22
# if age >= 18 and age < 65:
if 18 <= age < 65:
  print("Eligible")
```

////////////////////////////////////////////////////////////////////////////////////

### 7- Quiz-9ujz6tqdn5

////////////////////////////////////////////////////////////////////////////////////

### 8- For Loops-r5sci6ooi9

```python
for number in range(3):
  print("Attempt", number + 1, (number + 1) * ".")

for number in range(1, 4):
  print("Attempt", number, number * ".")

for number in range(1, 10, 2):
  print("Attempt", number, number * ".")
```

////////////////////////////////////////////////////////////////////////////////////

### 9- For..Else-4cr0cbgtiy

```python
successful = False
for number in range(3):
  print("Attempt")
  if successful:
    print("Successful")
    break
else:
  print("Attempted 3 times and failed")
```

The `else` clause is executed if we don't break out of the `for` loop. In other words, if the `for` loop completes then the `else` clause is executed.

////////////////////////////////////////////////////////////////////////////////////

### 10- Nested Loops-k4pr91h040

```python
for x in range(5):
  for y in range(3):
    print(f"({x}, {y})")
```

////////////////////////////////////////////////////////////////////////////////////

### 11- Iterables-nosqa71u58

`range()` and `list` are complex type and iterable.
`String` is also iterable.

```python
print(type(5))

# range() is a complex type
print(type(range(5)))

# String
for x in "Python":
  print(x)

# List
for x in [1, 2, 3, 4]:
  print(x)
```

////////////////////////////////////////////////////////////////////////////////////

### 12- While Loops-lzxt4y60qm

```python
number = 100
while number > 0:
  print(number)
  # number = number // 2
  number //= 2

command = ""
while command.lower() != "quit":
  command = input(">")
  print("ECHO", command)
```

////////////////////////////////////////////////////////////////////////////////////

### 13- Infinite Loops-jyplmuu0ww

```python
while True:
  command = input(">")
  print("ECHO", command)
  if command.lower() == "quit":
    break
```

////////////////////////////////////////////////////////////////////////////////////

### 14- Exercise-qu97p6ev7q

Display even numbers between 1 to 10

```python
count = 0
for number in range(1, 10):
  if number % 2 == 0:
    count += 1
    print(number)

print(f"We have {count} even numbers")
```

////////////////////////////////////////////////////////////////////////////////////

####################################################################################

## 4- Functions

####################################################################################

////////////////////////////////////////////////////////////////////////////////////

### 1- Defining Functions-kmervhvt33

```python
def greet():
  print("Hi there")
  print("Welcome aboard")

greet()
```

////////////////////////////////////////////////////////////////////////////////////

### 2- Arguments-bg7rpc657r

When defining a function in between parenthesis we list our `parameters`.
When calling this function we supply values for those `parameters`. We refer to them as `arguments`.

```python
def greet(first_name, last_name):
  print(f"Hi {first_name} {last_name}")

greet("Usman", "Akram")
```

////////////////////////////////////////////////////////////////////////////////////

### 3- Types of Functions-c5h09acy0s

In programming we have 2 types of functions. Functions that:
1. Perform a task
2. Calculate and return a value

In python all function by default return `None` value. `None` is an object that represents the absence of a value.

```python
def greet(name):
  print(f"Hi {name}")


def get_greeting(name):
  return f"Hi {name}"

print(greet("Usman"))

message = get_greeting("Usman")
file = open("content.txt", "w")
file.write(message)
```

////////////////////////////////////////////////////////////////////////////////////

### 4- Keyword Arguments-opfyhagjbj

```python
def increment(number, by):
  return number + by

print(increment(2, by=1))
```

////////////////////////////////////////////////////////////////////////////////////

### 5- Default Arguments-bo2bsvsra4

```python
def increment(number, by=1):
  return number + by

print(increment(2))
```

////////////////////////////////////////////////////////////////////////////////////

### 6- xargs-yf2o1ihi6a

`*args, wait, what?`

We use square brackets to create list `[2, 3, 4, 5]` and parantheses to create tuples `(2, 3, 4, 5)`.
`tuple` is similar to `list` in that it's a collection of objects. The difference is that that we cannot modify this collection. We cannot add new object to this `tuple`.
These `tuple` are just like `list` are iterables. So we can iterate over them which means we can use them in loops.

```python
# def multiply(x, y):
#   return x * y

# multiply(2, 3)

def multiply(*numbers):
  total = 1
  for number in numbers:
    total *= number
  return total

print(multiply(2, 3, 4, 5))
```

////////////////////////////////////////////////////////////////////////////////////

### 7- xxargs-xwr4ffxbe7

`**args`

When we use double estaric `**` with parameters we can pass multiple key/value pairs or multiple keyword arguments to a function. And python will automatically package them into a `dictionary`.

```python
def save_user(**user):
  print(user) # {'id': 1, 'name': 'John', 'age': 22}
  print(user["name"])

save_user(id=1, name="John", age=22)
```

////////////////////////////////////////////////////////////////////////////////////

### 8- Scope-375aqwz5qe

Don't modify global variable inside function. It's a bad practice.

```python
message = "a"

def greet():
  # Don't modify global variable inside function. It's a bad practice.
  global message
  message = "b"

greet()
print(message)
```

////////////////////////////////////////////////////////////////////////////////////

### 9- Debugging-jp5ulqchiy

```python
def multiply(*numbers):
  total = 1
  for number in numbers:
    total *= number
    return total

print("Start")
print(multiply(1, 2, 3))
```

////////////////////////////////////////////////////////////////////////////////////

### 10- VSCode Coding Tricks - Windows-ul0388ymz2

////////////////////////////////////////////////////////////////////////////////////

### 11- VSCode Coding Tricks - Mac-k98nb8wsl6

////////////////////////////////////////////////////////////////////////////////////

### 12- Exercise-x0uxui4pju

////////////////////////////////////////////////////////////////////////////////////

### 13- Solution-gac3q8aywz

```python
def fizz_buzz(input):
  if (input % 3 == 0) and (input % 5 == 0):
    return "FizzBuzz"
  if input % 3 == 0:
    return "Fizz"
  if input % 5 == 0:
    return "Buzz"
  return input

print(fizz_buzz(3))
```

////////////////////////////////////////////////////////////////////////////////////

####################################################################################

## 5- Data Structures

####################################################################################

////////////////////////////////////////////////////////////////////////////////////

### 1- Lists-l8bubjmcmw

```python
letters = ["a", "b", "c"]
matrix = [[0, 1], [2, 3]]

zeros = [0] * 5 # create a list containing 5 zeros
combined = zeros + letters # concat 2 lists

numbers = list(range(20)) # create a list containing numbers from 0 to 20

chars = list("Hello World")

print(zeros)
print(combined)
print(numbers)
print(chars)
print(len(chars))
```

////////////////////////////////////////////////////////////////////////////////////

### 2- Accessing Items-wl2hac6efb

```python
letters = ["a", "b", "c", "d"]

print(letters[0]) # get first item of a list
print(letters[-1]) # get last item of a list

# slicing a list
print(letters[0:3]) # get first 3 items of a list
print(letters[:3]) # get first 3 items of a list
print(letters[0:]) # get a copy of original list
print(letters[:]) # get a copy of original list
print(letters[::2]) # get every second item of original list

letters[0] = "A" # modify first item of a list

print(letters) # ['A', 'b', 'c', 'd']

numbers = list(range(20))
print(numbers[::2]) # get all the even numbers of the list
print(numbers[::-1]) # get all the item in the original list but in reverse order
```

////////////////////////////////////////////////////////////////////////////////////

### 3- List Unpacking-nil8obhux5

```python
numbers = [1, 2, 3, 4, 5]
# first = numbers[0]
# second = numbers[1]
# third = numbers[2]
# fourth = numbers[3]
# fifth = numbers[4]

first, second, third, fourth, fifth = numbers # list unpacking
firstOne, secondOne, *other = numbers # list unpacking and packing, get only initial 2 items

print(firstOne) # 1
print(secondOne) # 2
print(other) # [3, 4, 5]

first, *other, last = numbers # list unpacking and packing, get first and last item
print(first, last) # 1 5
print(other) # [2, 3, 4]
```

////////////////////////////////////////////////////////////////////////////////////

### 4- Looping over Lists-pbqr3vvpqx

```python
letters = ["a", "b", "c"]
for letter in letters:
  print(letter)
```

What if we want to get index of each item as well. For that we have a build-in function `enumerate()` that returns enumerate object which is `iterable`. In each iteration this enumerate object will give us a `tuple`. As we know `tuple` is like a `list` but it's read-only, we cannot add new items to it.

```python
letters = ["a", "b", "c"]
for letter in enumerate(letters):
  print(letter)
  print(letter[0], letter[1])

# Output of above loop
# (0, 'a')
# 0 a
# (1, 'b')
# 1 b
# (2, 'c')
# 2 c
```

As we already know the concept of list unpacking, we can use list unpacking technique to unpack `tuple` as well because `tuple` is like a `list`.

```python
letters = ["a", "b", "c"]
for index, letter in enumerate(letters):
  print(index, letter)

# Output of above loop
# 0 a
# 1 b
# 2 c
```

////////////////////////////////////////////////////////////////////////////////////

### 5- Adding or Removing Items-d77psu5qsv

```python
letters = ["a", "b", "c"]

# Add
letters.append("d") # add new item at the end of a list
letters.insert(0, "-") # add new item at a specific index
print(letters)

# Remove
letters.pop() # remove last item
letters.pop(0) # remove an item from a specific index
letters.remove("b") # remove an item without specifying it's index, `remove()` will remove first occurrance of letter "b"
del letters[0:3] # remove a range of items
letters.clear() # remove all the items in a list
print(letters)
```

////////////////////////////////////////////////////////////////////////////////////

### 6- Finding Items-6simq3isw4

```python
letters = ["a", "b", "c"]

print(letters.index("b")) # 1

if "d" in letters:
  print(letters.index("d"))

print(letters.count("d")) # return the number of occurrances of the given item in this list
```

////////////////////////////////////////////////////////////////////////////////////

### 7- Sorting Lists-g4k2tziv4r

In python `sort()` method update the original list. If we don't want to modify the original list we have an other function `sorted()`. It does not modify the original list rather create a new sorted list. `sorted()` function accepts second optionial argument to specify sort order.

```python
numbers = [3, 51, 2, 8, 6]

numbers.sort() # asending order
print(numbers) # [2, 3, 6, 8, 51]

numbers.sort(reverse=True)
print(numbers) # [51, 8, 6, 3, 2]

print(sorted(numbers)) # [2, 3, 6, 8, 51]
print(numbers) # [51, 8, 6, 3, 2]

print(sorted(numbers, reverse=True)) # [51, 8, 6, 3, 2]
```

```python
items = [
  ("Product1", 10),
  ("Product2", 9),
  ("Product3", 12),
]

def sort_item(item):
  return item[1]

items.sort()
print(items) # [('Product1', 10), ('Product2', 9), ('Product3', 12)]

items.sort(key=sort_item)
print(items) # [('Product2', 9), ('Product1', 10), ('Product3', 12)]
```

////////////////////////////////////////////////////////////////////////////////////

### 8- Lambda Functions-p4sw7br2d4

```python
items = [
  ("Product1", 10),
  ("Product2", 9),
  ("Product3", 12),
]

# items.sort(key=lambda parameters:expression)
items.sort(key=lambda item: item[1])
print(items) # [('Product2', 9), ('Product1', 10), ('Product3', 12)]
```

////////////////////////////////////////////////////////////////////////////////////

### 9- Map Function-z48vyiui6a

```python
items = [
  ("Product1", 10),
  ("Product2", 9),
  ("Product3", 12),
]

# prices = []
# for item in items:
#   prices.append(item[1])

# print(prices) # [10, 9, 12]

x = map(lambda item: item[1], items)
print(x) # <map object at 0x00000146317C6470>

prices = list(x)
print(prices) # [10, 9, 12]
```

////////////////////////////////////////////////////////////////////////////////////

### 10- Filter Function-hngz10h6oj

```python
items = [
  ("Product1", 10),
  ("Product2", 9),
  ("Product3", 12),
]

x = filter(lambda item: item[1] >= 10, items)
print(x) # <filter object at 0x000001B15C476410>

filtered = list(x)
print(filtered) # [('Product1', 10), ('Product3', 12)]
```

////////////////////////////////////////////////////////////////////////////////////

### 11- List Comprehensions-8hdneus8qr

```python
items = [
  ("Product1", 10),
  ("Product2", 9),
  ("Product3", 12),
]

# prices = list(map(lambda item: item[1], items))
# [expression for item in items]
prices = [item[1] for item in items]

print(prices) # [10, 9, 12]

# filtered = list(filter(lambda item: item[1] >= 10, items))
filtered = [item for item in items if item[1] >= 10]

print(filtered) # [('Product1', 10), ('Product3', 12)]
```

////////////////////////////////////////////////////////////////////////////////////

### 12- Zip Function-0zyphoyt2h

We can combine 2 or more than 2 lists into a list of `tuple`.

```python
list1 = [1, 2, 3]
list2 = [10, 20, 30]

print(zip("abc", list1, list2)) # <zip object at 0x000001D7384BFA40>

print(list(zip("abc", list1, list2))) # [('a', 1, 10), ('b', 2, 20), ('c', 3, 30)]
```

////////////////////////////////////////////////////////////////////////////////////

### 13- Stacks-mu4riv4ace

`LIFO` => `LastIn - FirstOut`

Basically, we can use a `list` object as a `stack`.

```python
browsing_session = []
browsing_session.append(1) # append item to the top of the stack
browsing_session.append(2)
browsing_session.append(3)
print(browsing_session)

last = browsing_session.pop() # remove the item on top of the stack
print(last)

print(browsing_session)

if browsing_session:
  print("redirect", browsing_session[-1]) # get the item on top of the stack

if not browsing_session:
  print("disable back button")
```

////////////////////////////////////////////////////////////////////////////////////

### 14- Queues-yykyls5qv7

`FIFO` => `FirstIn - FirstOut`

```python
from collections import deque
queue = deque([])
queue.append(1)
queue.append(2)
queue.append(3)

queue.popleft()
print(queue)

if not queue:
  print("empty")
```

////////////////////////////////////////////////////////////////////////////////////

### 15- Tuples-uvc8dovkku

A `tuple`  is basically a read-only list. We can use it to contain a sequence of objects but we cannot modify the sequence.

```python
# point = (1, 2)
# OR
point = 1, 2
oneItemTuple = 1, # Add a trailing comma, if contain only one item
emptyTuple = () # Define empty `tuple`

print(type(point)) # <class 'tuple'>

# Similar to list, we can concatinate two or more tuples
combined = (1, 2) + (3, 4)
print(combined) # (1, 2, 3, 4)

# Multiplication to repeat a `tuple`
multiply = (1, 2) * 3
print(multiply) # (1, 2, 1, 2, 1, 2)

# Convert list into a `tuple`
convert = tuple([1, 2])
print(convert) # (1, 2)

# Convert string into `tuple`
convert = tuple("Hello World")
print(convert) # ('H', 'e', 'l', 'l', 'o', ' ', 'W', 'o', 'r', 'l', 'd')

point = (1, 2, 3)
print(point[0:2]) # (1, 2)

# Unpack `tuple` like `list`
x, y, z = point

# Similar to lists, we can use the `in` operator to check the existance of an item
if 10 in point:
  print("exists")
```

////////////////////////////////////////////////////////////////////////////////////

### 16- Swapping Variables-tmaex4o7ss

```python
x = 10
y = 11

# z = x
# x = y
# y = z
# OR
x, y = y, x

print("x", x)
print("y", y)
```

////////////////////////////////////////////////////////////////////////////////////

### 17- Arrays-1dkc1zldrg

We have learned a lot about lists in Python. These lists are very useful but if we are dealing with a large sequence of numbers we have a more efficient datatype in python called `array`.
These arrays take less memory and perform a little bit faster. But note that you will see the difference only if you are dealing with a large list of numbers. Let's say 10,000 or more. So for 90% of the cases you will use lists but if you run program and you see some performance problems then you can see if you can solve the problem by replacing a `list` with an `array`. If you don't have any performance problems don't try to optimize.

```python
from array import array
numbers = array("i", [1, 2, 3])
print(numbers) # array('i', [1, 2, 3])

# Similar to list we have methods for adding new objects, removing existing ones, pop(), remove() exactly like lists
numbers.append(4) # append a number to the end of the array
print(numbers) # array('i', [1, 2, 3, 4])

numbers.insert(2, 1) # add a number to the specific index
print(numbers) # array('i', [1, 2, 1, 3, 4])

# However unlike lists the objects in this array are typed. So every object in this array should be integer.
# If we try to put a floating point number here or any other kind of object will get an error.

numbers[0] = 1.0 # TypeError: 'float' object cannot be interpreted as an integer
```




Send B form for Zahra Kips adimission (practicles).
0318 1117411





////////////////////////////////////////////////////////////////////////////////////

### 18- Sets-jxnlkv5cpo

In Python, we have another very useful data structure called `set` which is basically a collection with no duplicates.
Similar to `list` we can add new items to a `set` or remove an existing one.

```python
numbers = [1, 1, 2, 3, 4]
uniques = set(numbers)

print(uniques) # {1, 2, 3, 4}

second = {1, 4} # Declare and initialize a `set`

second.add(5)
print(second) # {1, 4, 5}

second.remove(5)
print(second) # {1, 4}

print(len(second)) # 2
```

```python
numbers = [1, 1, 2, 3, 4]
first = set(numbers)
second = {1, 5}

# To get the union of 2 sets
print(first | second) # {1, 2, 3, 4, 5}

# To get the intersection of 2 sets
print(first & second) # {1}

# To get the difference of 2 sets
print(first - second) # {2, 3, 4}

# To get the symetic difference (items that are either in the first or second set but not both)
print(first ^ second) # {2, 3, 4, 5}

if 1 in first:
  print("yes")
```

One thing we need to know about sets is that Unlike lists they unordered collection. Which means the items we have in the set are not in sequence so we cannot access them using an index.

////////////////////////////////////////////////////////////////////////////////////

### 19- Dictionaries-wjgwg73cox

In Python, we can only use imutable types for the keys, so quite often we use `string` and `number` but the value can be any type.

```python
# Define a dictionary
point = {"x": 1, "y": 2}
# OR
point = dict(x=1, y=2)

point["x"] = 10
point["z"] = 20

print(point) # {'x': 10, 'y': 2, 'z': 20}

# To get value against a key
print(point["a"])
# OR
print(point.get("a")) # None
print(point.get("a", 0)) # 0

del point["x"]
print(point) # {'y': 2, 'z': 20}

# To check the existance of a key
if "a" in point:
  print(point["a"])
```

```python
point = {"x": 1, "y": 2}

for key in point:
  print(key, point[key])

# Output
# x 1
# y 2

# tuple
for x in point.items():
  print(x)

# Output
# ('x', 1)
# ('y', 2)

# unpacked tuple
for key, value in point.items():
  print(key, value)

# Output
# x 1
# y 2
```

////////////////////////////////////////////////////////////////////////////////////

### 20- Dictionary Comprehensions-pog00cdupw

```python
values = []
for x in range(5):
  values.append(x * 2)

print(values) # [0, 2, 4, 6, 8]

# Using list comprehension
values = [x * 2 for x in range(5)]
print(values) # [0, 2, 4, 6, 8]

# Using set comprehension
values = {x * 2 for x in range(5)}
print(values) # {0, 2, 4, 6, 8}

# Using dictionary comprehension
values = {x: x * 2 for x in range(5)}
print(values) # {0: 0, 1: 2, 2: 4, 3: 6, 4: 8}
```

////////////////////////////////////////////////////////////////////////////////////

### 21- Generator Expressions-pe0q01autg

There are situations that you might be working with a very large data set or perhaps an infinit stream of data. In those situation you should not store all those value in memory. Because, that is very memory inefficient. For example what if instead of range of 10 here we had a range of 1,000,000,000. We don't want to store billion objects in memory. In situations like this it's more efficient to use a generator object. Generator objects are iterable so just like lists we can iterate over them. In each iteration it generates or spid out a new value. So, unlike lists they do not store all the values in memory they generate a new value in each iteration.

```python
# `values` is a list
values = [x * 2 for x in range(10)]

print(values) # [0, 2, 4, 6, 8, 10, 12, 14, 16, 18]

# `values` is no longer a list, it's a generator object
values = (x * 2 for x in range(10))

print(values) # <generator object <genexpr> at 0x000001C322988380>

for x in values:
  print(x)
```

Let's check the size of generator object.

```python
from sys import getsizeof

values = (x * 2 for x in range(1000))
print("gen:", getsizeof(values)) # gen: 200

values = (x * 2 for x in range(100000))
print("gen:", getsizeof(values)) # gen: 200

values = [x * 2 for x in range(100000)]
print("list:", getsizeof(values)) # list: 800984
```

Just be aware that generator objects don't sore all the items in memory you won't be able to get the total number of item you working with.

////////////////////////////////////////////////////////////////////////////////////

### 22- Unpacking Operator-ulsr2hnjaj

In Python, we have unpacking operator `print(*numbers)`. In JavaScript we have spread opertor `console.log(...numbers)`. This is exactly the same.

The good thing about this unpack operator is that we can unpack any iterable, it doesn't have to be a list.

```python
numbers = [1, 2, 3]
print(numbers) # [1, 2, 3]
print(1, 2, 3) # 1 2 3

# We unpack a container, take out it's individual elements and pass them as arbitraty arguments to the print function.
print(*numbers) # 1 2 3

values = list(range(5))
print(values) # [0, 1, 2, 3, 4]

values = [*range(5)]
print(values) # [0, 1, 2, 3, 4]

values = [*range(5), *"Hello"]
print(values) # [0, 1, 2, 3, 4, 'H', 'e', 'l', 'l', 'o']

first = [1, 2]
second = [3]
values = [*first, *"a", *second, *"Hello"]
print(values) # [1, 2, 'a', 3, 'H', 'e', 'l', 'l', 'o']
```

We can also unpack dictionaries but we need to use 2 asterics `**`.

```python
first = {"x": 1}
second = {"x": 10, "y": 2}
combined = {**first, **second, "z": 1}

print(combined) # {'x': 10, 'y': 2, 'z': 1}
```

////////////////////////////////////////////////////////////////////////////////////

### 23- Exercise-yphpekgwgu

```python
from pprint import pprint
sentence = "This is a common interview question"

char_frequency = {}
for char in sentence:
  if char in char_frequency:
    char_frequency[char] += 1
  else:
    char_frequency[char] = 1

print(char_frequency)
# Output of above statement
# {'T': 1, 'h': 1, 'i': 5, 's': 3, ' ': 5, 'a': 1, 'c': 1, 'o': 3, 'm': 2, 'n': 3, 't': 2, 'e': 3, 'r': 1, 'v': 1, 'w': 1, 'q': 1, 'u': 1}

pprint(char_frequency, width=1)
```

As we already know `dictionary` like `set` is unordered collection. We cannot sort them. We can only sort `list`. So, we need to pull out the items from this dictionary and put them in a list for sorting. So basically, we need to take out each key value pair, converted to a `tuple` and then put in a list. Will end up with a list of tuples that we can easily sort.

```python
from pprint import pprint
sentence = "This is a common interview question"

char_frequency = {}
for char in sentence:
  if char in char_frequency:
    char_frequency[char] += 1
  else:
    char_frequency[char] = 1

print(char_frequency)
# Output of above statement
# {'T': 1, 'h': 1, 'i': 5, 's': 3, ' ': 5, 'a': 1, 'c': 1, 'o': 3, 'm': 2, 'n': 3, 't': 2, 'e': 3, 'r': 1, 'v': 1, 'w': 1, 'q': 1, 'u': 1}

# pprint(char_frequency, width=1)

# sorted() function takes an iterable and sorts it. `.items()` returns all the key value pairs as tuples.
print(sorted(char_frequency.items()))
# Output of above statement
# [(' ', 5), ('T', 1), ('a', 1), ('c', 1), ('e', 3), ('h', 1), ('i', 5), ('m', 2), ('n', 3), ('o', 3), ('q', 1), ('r', 1), ('s', 3), ('t', 2), ('u', 1), ('v', 1), ('w', 1)]
# As you can see, this list is not sorted because by default `sorted()` doesn't know how to sort these tuples.

print(sorted(char_frequency.items(), key=lambda kv: kv[1]))
# Output of above statement
# [('T', 1), ('h', 1), ('a', 1), ('c', 1), ('r', 1), ('v', 1), ('w', 1), ('q', 1), ('u', 1), ('m', 2), ('t', 2), ('s', 3), ('o', 3), ('n', 3), ('e', 3), ('i', 5), (' ', 5)]

print(sorted(char_frequency.items(), key=lambda kv: kv[1], reverse=True))
# Output of above statement
# [('i', 5), (' ', 5), ('s', 3), ('o', 3), ('n', 3), ('e', 3), ('m', 2), ('t', 2), ('T', 1), ('h', 1), ('a', 1), ('c', 1), ('r', 1), ('v', 1), ('w', 1), ('q', 1), ('u', 1)]

char_frequency_sorted = sorted(char_frequency.items(), key=lambda kv: kv[1], reverse=True)

print(char_frequency_sorted[0]) # ('i', 5)
```

////////////////////////////////////////////////////////////////////////////////////

####################################################################################

## 6- Exceptions

####################################################################################

////////////////////////////////////////////////////////////////////////////////////

### 1- Exceptions-xhppqxrqdp

```python
numbers = [1, 2]
print(numbers[3])
```

```python
age = int(input("Age: "))
```

////////////////////////////////////////////////////////////////////////////////////

### 2- Handling Exceptions-1yfk90l4w0

What we have in the `else` clause will only be executed if we don't have any exceptions. This is very similar to `for-else` loop.

```python
try:
  age = int(input("Age: "))
except ValueError as ex:
  print("You didn't enter a valid age.")
  print(ex) # invalid literal for int() with base 10: 'a'
  print(type(ex)) # <class 'ValueError'>
else:
  print("No exceptions were thrown.")
print("Execution continues")
```

When handling the exception we can optionally define a variable that will include the detail about the exception, mostly the error message and some times additional arguments.

////////////////////////////////////////////////////////////////////////////////////

### 3- Handling Different Exceptions-8kdl2c45r9

```python
try:
  age = int(input("Age: "))
  xfactor = 10 / age
except ValueError:
  print("You didn't enter a valid age.")
except ZeroDivisionError:
  print("Age cannot be 0.")
else:
  print("No exceptions were thrown.")
```

```python
try:
  age = int(input("Age: "))
  xfactor = 10 / age
except (ValueError, ZeroDivisionError):
  print("You didn't enter a valid age.")
except ZeroDivisionError:
  print("Age cannot be 0.")
else:
  print("No exceptions were thrown.")
```

Note that we get a single error on the terminal. In other words, the code that we have inside `except ZeroDivisionError:` block was not executed. Otherwise we will see the other message (Age cannot be 0.) as well.

////////////////////////////////////////////////////////////////////////////////////

### 4- Cleaning Up-555mvpxuyc

There are times when we need external resources like files, network connections, databases and so on. Whenever we use these resources after we have done we need to release them. For example: when we open a file we should always close it after we have done otherwise an other process or another program may not able to open that file.

`finally:` is always executed whether we have exception or not. And we use it to release external resources. So this is the perfect place to close files, database connections, network connections and so on.

```python
try:
  file = open("app.py")
  age = int(input("Age: "))
  xfactor = 10 / age
  
  # Move bellow line to `finally:`
  # file.close()
except (ValueError, ZeroDivisionError):
  print("You didn't enter a valid age.")
else:
  print("No exceptions were thrown.")
finally:
  file.close()
```

////////////////////////////////////////////////////////////////////////////////////

### 5- The With Statement-bz96wmy6om

In the last lecture we have learnt that we use `finally:` clause to release external resources. We also have shorter and clear way to achieve the same thing without the `finally` clause. But it doesn't always work, it works for certain kinds of objects.
Whenever we open a file using the `with` statement Python will automatically call `file.close()` whether we have `finally` clause of not. In other words the `with` statement is used to automatically release external resources.

```python
try:
  with open("app.py") as file:
    print("file opened")

  age = int(input("Age: "))
  xfactor = 10 / age
  
  # Move bellow line to `finally:`
  # file.close()
except (ValueError, ZeroDivisionError):
  print("You didn't enter a valid age.")
else:
  print("No exceptions were thrown.")
```

////////////////////////////////////////////////////////////////////////////////////

### 6- Raising Exceptions-vs0n4pri8g

```python
def calculate_xfactor(age):
  if  age <= 0:
    raise ValueError("Age cannot be 0 or less.")
  return 10 / age

try:
  calculate_xfactor(-1)
except ValueError as error:
  print(error)
```

This is how we can raise exception in our code. But this is not recommended because raising exception is costly.

////////////////////////////////////////////////////////////////////////////////////

### 7- Cost of Raising Exceptions-eq7x7e5806

```python
from timeit import timeit

code1 = """
def calculate_xfactor(age):
  if  age <= 0:
    raise ValueError("Age cannot be 0 or less.")
  return 10 / age

try:
  calculate_xfactor(-1)
except ValueError as error:
  # print(error)
  pass
"""

code2 = """
def calculate_xfactor(age):
  if  age <= 0:
    return None
  return 10 / age


xfactor = calculate_xfactor(-1)
if (xfactor == None):
  pass
"""

print("first code=", timeit(code1, number=10000)) # first code= 0.003987700038123876
print("second code=", timeit(code2, number=10000)) # second code= 0.000977399991825223
```

As a general rule of thumb, when you want to raise exceptions in your functions think twice. See if you handle the situation with simple if statement whether there is a performance difference or not your code will end up being a little bit cleaner. So raise exception if you realy have to.

////////////////////////////////////////////////////////////////////////////////////

####################################################################################

## 7- Classes

####################################################################################

////////////////////////////////////////////////////////////////////////////////////

### 1- Classes-g2ufymeupu

Every object that we have in Python is created using a class which is a blueprint for creating objects of that type.

////////////////////////////////////////////////////////////////////////////////////

### 2- Creating Classes-b5s4ojn8qe

All function in Python classes should have atleast one parameter and by convention we call that parameter `self`.

```python
class Point:
  def draw(self):
    print("draw")

point = Point()
print(type(point)) # <class '__main__.Point'>
print(isinstance(point, Point)) # True
```

////////////////////////////////////////////////////////////////////////////////////

### 3- Constructors-5w3tw21wh5

`__init__` is a magic method.
`self` is the referance of current object.

```python
class Point:
  def __init__(self, x, y):
    self.x = x
    self.y = y

  def draw(self):
    print(f"Point ({self.x}, {self.y})") # Point (1, 2)

point = Point(1, 2)

print(point.x) # 1
point.draw()
```

////////////////////////////////////////////////////////////////////////////////////

### 4- Class vs Instance Attributes-jeddn6mjf2

Instance attribute belongs to `object`. But we can also define `class` attributes. These are the attributes that we define at `class` level, and they are the same across all instances of a class.

```python
class Point:
  default_color = "red" # class level attribute

  def __init__(self, x, y):
    self.x = x
    self.y = y

  def draw(self):
    print(f"Point ({self.x}, {self.y})") # Point (1, 2)

Point.default_color = "yellow"

point = Point(1, 2)
print(point.default_color) # yellow
print(Point.default_color) # yellow
point.draw()

another = Point(3, 4)
print(another.default_color) # yellow
another.draw()
```

////////////////////////////////////////////////////////////////////////////////////

### 5- Class vs Instance Methods-3rb1b3rxs8

There are times that we don't realy need an existing object that's when we use a class method. For example, let's say in our program there are lot of cases where you want to creat a `point` object with these initial values `Point(0, 0)`. This is one way to create an object that is perfectly fine. But we can come up with a different way to create a `point` object with these (0, 0) value like this `Point.zero()`. In this case `zero()` is the method that is defined at the class level. And when we call it will return a point object initialized with these value (0, 0).
In this example, we refer to this `zero()` method as a `factory method`. 

All factory function in Python classes should have atleast one parameter and by convention we call that parameter `cls`. By convention whenever we define a class method we call it's first parameter `cls`. To make this method a class method we need to decorate it by putting `@classmethod` keyworld above the method definition. This is what we call a `decorator` and it's a way to extend the behavior of a method and function.

```python
class Point:
  default_color = "red" # class level attribute

  def __init__(self, x, y):
    self.x = x
    self.y = y

  @classmethod
  def zero(cls):
    return cls(0, 0)

  def draw(self):
    print(f"Point ({self.x}, {self.y})") # Point (1, 2)

point = Point.zero()
point.draw()
```

////////////////////////////////////////////////////////////////////////////////////

### 6- Magic Methods-977vv8dktr

These are the methods that have 2 underscores at the beginning and end of the name and called automatically by Python interpreter depending on how we use our object and classes. For example `__init__` method called by Python interpreter automatically when we create a new object.

```python
class Point:
  def __init__(self, x, y):
    self.x = x
    self.y = y

  def draw(self):
    print(f"Point ({self.x}, {self.y})") # Point (1, 2)

point = Point(1, 2)

print(point) # <__main__.Point object at 0x000002F5C37FA660>
```

`__init__` and `__str__` are examples of two useful magic methods in Python.
`__str__` method converts an object into a string.

```python
class Point:
  def __init__(self, x, y):
    self.x = x
    self.y = y

  def __str__(self):
    return f"({self.x}, {self.y})"

  def draw(self):
    print(f"Point ({self.x}, {self.y})") # Point (1, 2)

point = Point(1, 2)

print(point) # (1, 2)
```

////////////////////////////////////////////////////////////////////////////////////

### 7- Comparing Objects-45zxie4fz0

`__eq__` => equality => `==`
`__ne__` => inequality => `!=`
`__lt__` => less-than => `<`
`__gt__` => greater-than => `>`

```python
class Point:
  def __init__(self, x, y):
    self.x = x
    self.y = y

point = Point(1, 2)
other = Point(1, 2)
print(point == other) # False
```

```python
class Point:
  def __init__(self, x, y):
    self.x = x
    self.y = y

  def __eq__(self, other):
    return self.x == other.x and self.y == other.y

  def __gt__(self, other):
    return self.x > other.x and self.y > other.y

point = Point(1, 2)
other = Point(1, 2)
print(point == other) # True
print(point > other) # False
print(point < other) # False
```

When we implement `__gt__` magic method, Python would automatically figerout what to do if we use less than `<` operator.

////////////////////////////////////////////////////////////////////////////////////

### 8- Performing Arithmetic Operations-lajebe8gdp

Numaric magic methods:
`__add__`, `__sub__`, `__mul__`, etc


```python
class Point:
  def __init__(self, x, y):
    self.x = x
    self.y = y

point = Point(10, 20)
other = Point(1, 2)

print(point + other) # TypeError: unsupported operand type(s) for +: 'Point' and 'Point'
```

```python
class Point:
  def __init__(self, x, y):
    self.x = x
    self.y = y

  def __add__(self, other):
    return Point(self.x + other.x, self.y + other.y)

point = Point(10, 20)
other = Point(1, 2)
combined = point + other

print(combined.x) # 11
print(combined.y) # 22
```

////////////////////////////////////////////////////////////////////////////////////

### 9- Making Custom Containers-jxbzqzy52o

```python
class TagCloud:
  def __init__(self):
    self.tags = {}

  def add(self, tag):
    self.tags[tag.lower()] = self.tags.get(tag.lower(), 0) + 1

  # def __getitem__(self, key):
  def __getitem__(self, tag):
    return self.tags.get(tag.lower(), 0)

  # def __setitem__(self, key, value):
  def __setitem__(self, tag, count):
    self.tags[tag.lower()] = count

  def __len__(self):
    return len(self.tags)

  # Make iterable so we can iterate over it using for loop
  def __iter__(self):
    return iter(self.tags)


cloud = TagCloud()
cloud.add("Python")
cloud.add("python")
cloud.add("python")

print(cloud.tags) # {'python': 3}

# Get tags count (value) by tag key
print(cloud["python"]) # 3

# Set tags count (value)
cloud["python"] = 10
print(cloud["python"]) # 10

# Get the number of tags in the object
print(len(cloud)) # 1

# Iterate over class object
for tag in cloud:
  print(tag, cloud[tag]) # python 10
```

////////////////////////////////////////////////////////////////////////////////////

### 10- Private Members-rs6cp7ocyq

```python
class TagCloud:
  def __init__(self):
    self.__tags = {}

  def add(self, tag):
    self.__tags[tag.lower()] = self.__tags.get(tag.lower(), 0) + 1

  # def __getitem__(self, key):
  def __getitem__(self, tag):
    return self.__tags.get(tag.lower(), 0)

  # def __setitem__(self, key, value):
  def __setitem__(self, tag, count):
    self.__tags[tag.lower()] = count

  def __len__(self):
    return len(self.__tags)

  # Make iterable so we can iterate over it using for loop
  def __iter__(self):
    return iter(self.__tags)


cloud = TagCloud()
cloud.add("Python")
cloud.add("python")
cloud.add("python")

print(cloud.__tags) # {'python': 3}

# Get tags count (value) by tag key
print(cloud["python"]) # 3

# Set tags count (value)
cloud["python"] = 10
print(cloud["python"]) # 10

# Get the number of tags in the object
print(len(cloud)) # 1

# Iterate over class object
for tag in cloud:
  print(tag, cloud[tag]) # python 10

print(cloud.tags["PYTHON"])
```

////////////////////////////////////////////////////////////////////////////////////

### 11- Properties-k2p9kaicpd

////////////////////////////////////////////////////////////////////////////////////

### 12- Inheritance-3i6x4ap6jh

////////////////////////////////////////////////////////////////////////////////////

### 13- The Object Class-vs09zajpvt

////////////////////////////////////////////////////////////////////////////////////

### 14- Method Overriding-aoqtqejc8l

////////////////////////////////////////////////////////////////////////////////////

### 15- Multi-level Inheritance-oeeoxjdfcq

////////////////////////////////////////////////////////////////////////////////////

### 16- Multiple Inheritance-vm9reeqyn7

////////////////////////////////////////////////////////////////////////////////////

### 17- A Good Example of Inheritance-sjyilt34j7

////////////////////////////////////////////////////////////////////////////////////

### 18- Abstract Base Classes-fai8hiowzd

////////////////////////////////////////////////////////////////////////////////////

### 19- Polymorphism-l2t6kri71u

////////////////////////////////////////////////////////////////////////////////////

### 20- Duck Typing-jsze4bhqsa

////////////////////////////////////////////////////////////////////////////////////

### 21- Extending Built-in Types-j0n4lmo5bg

////////////////////////////////////////////////////////////////////////////////////

### 22- Data Classes-lwrwade1aw

////////////////////////////////////////////////////////////////////////////////////

####################################################################################

## 8- Modules

####################################################################################

////////////////////////////////////////////////////////////////////////////////////

### 

////////////////////////////////////////////////////////////////////////////////////

####################################################################################

## 9- Python Standard Library

####################################################################################

////////////////////////////////////////////////////////////////////////////////////

### 

////////////////////////////////////////////////////////////////////////////////////

####################################################################################

## 10- Python Package Index

####################################################################################

////////////////////////////////////////////////////////////////////////////////////

### 

////////////////////////////////////////////////////////////////////////////////////

####################################################################################

## 11- Popular Python Packages

####################################################################################

////////////////////////////////////////////////////////////////////////////////////

### 

////////////////////////////////////////////////////////////////////////////////////

####################################################################################

## 12- Building Web Applications with Django

####################################################################################

////////////////////////////////////////////////////////////////////////////////////

### 

////////////////////////////////////////////////////////////////////////////////////

####################################################################################

## 13- Machine Learning with Python

####################################################################################

////////////////////////////////////////////////////////////////////////////////////

### 

////////////////////////////////////////////////////////////////////////////////////
