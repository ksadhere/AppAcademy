# Problem Solving

## Polya: How To Solve Any Problem

You'll learn a lot here at App Academy but what do you do when you come across a problem you don't know how to solve?

You're going to learn four steps to solve any problem. You read that right: you can apply these steps to ANY problem, from whiteboard interviews to building projects to refactoring legacy code.

- Understand the problem
- Make a plan
- Carry out the plan
- Look back and improve your solution
  Credit to mathematician George Polya for coming up with these steps.

1. Understand the problem
   Seems obvious, right? Don't take this step lightly! This is the most important and usually the most difficult step. If you understand the problem, the plan becomes obvious. If you have a solid plan, the code is easy to write. First, you must understand the problem.

Let's say you're in a job interview and are given the following problem:

Given an array nums, write a function to move all 0's to the end of it while
maintaining the relative order of the non-zero elements.

Input: [0,1,0,3,12] Output: [1,3,12,0,0]

- You must do this in-place without making a copy of the array.
- Minimize the total number of operations.
  You have a limited amount of time so you may be tempted to start coding as soon as possible. Resist the temptation! Take a few minutes, read over the problem to make sure you understand.

What is the problem asking you to do?
Can you restate the problem in your own words?
Do you understand all of the words in the problem?
Do you have enough information to solve the problem?
Are there any constraints or edge cases to consider?
You should be speaking these thoughts out-loud to your interviewer. Practice sharing your thoughts out-loud while you are pair programming as well. Sometimes there is not enough information to solve the problem and you need to ask a question to clarify. Interviewers will often leave out information or constraints to see if you pick up on it and ask them.

Remember, asking great questions is more impressive than knowing all the answers!

2. Make a plan
   Once you have a good understanding of the problem, you may again be tempted to start writing code. Hang on! A few minutes spent planning can save you hours of coding down the wrong path.

Break down the problem into smaller steps
Draw out the problem
Solve a simpler version of the problem
Look for patterns
Work backwards
Guess and check
In computer science, like any science, it's perfectly reasonable to come up with a hypothesis (guess) then test it out (check). Get creative!

In interviews and pair programming, communication is key. Get used to sharing your thought process and plan out loud. A good approach is to ask: "Here's what I'm thinking. Am I on the right track?"

Here's a plan for the zeroes problem:

1. Set a pointer to the last element in the array.
2. Walk through each element of the array.
3. If the element is zero, swap its position with the element at the pointer,
   then decrement the pointer.
   Sounds good! Now you can start coding!

4. Carry out the plan
   This is the easiest of all the steps but it's also the one where most people get stuck. The reason for that is usually from coding without a plan, or executing a flawed plan because they don't quite understand the problem. If you've put time into steps 1 and 2, step 3 is mostly remembering syntax.

function moveZeroes(nums) {
// 1. Set a pointer to the last element in the array.

    // 2. Walk through each element of the array.

    // 3. If the element is zero, swap its position with the element at the pointer,
    // then decrement the pointer.

}
Here, you can take your plan and dropped it straight into your code via comments. Now, you just have to translate the comments into code.

function moveZeroes(nums) {
// 1. Set a pointer to the last element in the array.
let last = nums.length - 1;

    // 2. Walk through each element of the array.
    for (let i = 0 ; i < last ; i++) {

        // 3. If the element is zero,
        if (nums[i] == 0) {
            // swap its position with the element at the pointer
            [nums[i], nums[last]] = [nums[last], nums[i]];

            // then decrement the pointer.
            last--;
        }
    }

    return nums;

} 4. Look back and improve your solution
Once you've come up with a solution, it's always good to revisit your code and make improvements. Sometimes that means fixing bugs or testing edge cases. Sometimes it means optimizing your code for readability or efficiency.

If you run your solution to move all zeroes to the right side of the array, you get this:

> moveZeroes([0,1,0,3,12])
> [12, 1, 3, 0, 0]
> Looks great! ...or does it? Upon closer inspection, you might realize that your code does not maintain the relative order of the non-zero elements, violating one of the problem constraints. Since you've taken the time to understand the problem up front, you are able to catch this error. So, how do you solve it? By following the problem-solving steps, of course!

Restart with understanding the problem. Walking through the test array manually shows that after seeing the first zero, the algorithm swaps the last element in the array, giving us [12,1,0,3,0]. Instead of swapping it, what if you remove the zero, then push it onto the end? (plan)

function moveZeroes(nums) {
// 1. Set a pointer to the last element in the array.
let last = nums.length - 1;

    // 2. Walk through each element of the array.
    for (let i = 0 ; i < last ; i++) {

        // 3. If the element is zero,
        if (nums[i] == 0) {
            // Remove the zero at i,
            nums.splice(i, 1);

            // push it onto the end of the array
            nums.push(0);

            // then decrement the pointer.
            last--;
        }
    }

    return nums;

}
Now your code returns [1, 3, 12, 0, 0]. Wonderful! But are you done?

You could end here but your interviewer might point out that splice() can get rather expensive if the array is large. Although the code is perfectly functional, it is possible to improve the efficiency. Use Polya's steps to try it out on your own.

Stuck? Take a step back
If you ever run into trouble while problem solving, take a step back. So, if your code isn't working, step back and re-examine your plan. Outline the plan in comments or pseudocode. If you're having trouble coming up with a plan, take a step back and make sure you really understand the problem. Ask questions if you need to. Most people will get stuck on Step 3 but the problem usually lies in Step 1 or 2.

Keep in mind that if you've put the time into steps 1 and 2, step 3 should be easy. It also works in any language. Here's the exact same plan, executed in Python.

def move_zeroes(nums):

    # 1. Set a pointer to the last element in the array.
    last = len(nums) - 1

    # 2. Walk through each element of the array.
    i = 0
    while i < last:

        # 3. If the element is zero,
        if nums[i] == 0:
            # Remove the zero at i,
            nums.pop(i)
            # push it onto the end of the array
            nums.append(0)
            # then decrement the pointer.
            last -= 1

        i += 1

    return nums

## Introduction to Pseudocode

At this point in the course, you've started encountering problems that are more challenging for you. You might read through the problem and have a good idea about how to approach the problem logically, but maybe you're not quite sure how to translate that logical plan into working code.

In this reading, you'll learn how to use pseudocode to help bridge the gap between your logical plan and your code implementation. You will learn:

### What pseudocode is (and what it isn't)

#### What is Pseudocode?

Pseudocode can be thought of as a "fake" version of your code. When you write pseudocode, you are writing a plan for a solution that includes the logic, but not necessarily the syntax or methods.

1. Understand the Problem
   After thinking about what you learned in math class, you can type out a few short comments summarizing your understanding of the problem. For example, you can jot down what you know about prime numbers, some details about the problem, and start thinking about the data types involved and any potential edge cases you might have to account for.

// definition of prime: a number is prime if it has only two factors, itself and 1
// goal: return a boolean of whether a given number is prime or not
// input: number (integer)
// output: true or false (boolean)
// edge cases: 0? 1? does it have to be larger than one to be prime?
You've just completed step 1 of Polya, in pseudocode.

2. Make a Plan
   Next, you can make a plan for solving the problem. Your pseudocode will focus on the logic you will use to solve the problem, and will not focus on specific methods and syntax. It can be helpful to write out a series of steps you will take to solve the problem. However, it's also ok to get your basic ideas down first and re-order them once you have everything figured out. For example:

// 1. Check if number is greater than 2
// - if not, return false (edge cases - not prime)

// 2. Iterate from 2 up to number (exclusive)
// - Check if i is a divisor of the number (use %)
// - if it is, return false (not prime)

// 3. After loop completes, return true 3. Carry Out the Plan
Next, you're ready to write your code. Now is the time to turn your logical plan into JavaScript methods and syntax. You can do this by typing code between the lines of your pseudocoded notes as you follow your plan. This is when you will work out the important details, such as the exact range of the while loop and how/where you will have to increment your counter.

function isPrime(number) {
// 1. Check if number is greater than 2
// - if not, return false (edge cases - not prime)
if (number < 2) {
return false;
}

// 2. Iterate from 2 up to number (exclusive)
// - Check if i is a divisor of the number (use %)
// - if it is, return false (not prime)
let i = 2;
while (i < number) {
if (number % i === 0) {
return false;
}
i++;
}

// 3. After loop completes, return true
return true;
}

#### What is NOT Pseudocode?

Pseudocode is a great tool to help you break down problems, plan out a logical solution, and then implement that solution into working code. But when pseudocode is used incorrectly, it can lead to some bad habits that are difficult to correct. As you practice your pseudocode, watch out for these two potential pitfalls.

Pitfall #1: Taking the "pseudo" out of pseudocode
Coming back to the definition, pseudocode is fake code, and it's important to keep it that way! If you find yourself starting to make comments that focus more on syntax and methods, then you are no longer pseudocoding. This is a problem because it means you are skipping the first few steps of Polya and jumping right to a solution instead of taking the time to fully understand the problem and make a plan first.

What does this pitfall look like?

// Pitfall #1: Taking the "pseudo" out of pseudocode
// DON'T DO THIS!!!

// if number < 2
// return false

// while i < number
// if number % i === 0
// return false

// return true
What's wrong with this? It's basically just JavaScript code, in the form of comments! While the plan might be an effective one, it is dangerous because you have taken a shortcut and have probably not fully thought through the logic and brainstormed potential edge cases. This approach might work with some easier problems, but will break down when you encounter more challenging problems.

Pitfall #2: Overdoing It
It's important to remember that pseudocode is a planning tool - it helps you get to a solution, but is not part of the solution itself. As such, it's fine for the pseudocode to be a little messy, and you can think of it as a "first draft" of your work. You don't need perfect grammar or spelling (unless you are using specific variable names), and it's best to use short phrases instead of sentences and paragraphs. When you spend too much time explaning the minor details or perfecting the formatting of your plan, you risk running out of time for implementing the actual solution.

What does this pitfall look like?

// Pitfall #2: Overdoing It
// DON'T DO THIS!!!

// A number is prime if it has only two factors, itself and 1.
// So I will need to check all of the integers between the number and zero to see if the integer is a factor of my given number.
// But 0 might be problematic, because it doesn't have any factors. And 1 is definitely not prime.

// So first, I'll check to see if the number is greater than 2, and if it is....
Would this long narrative help you tranlate your plan into working JavaScript? Probably not! While all of these ideas might be running through your head, you will need to organize and summarize them to write effective pseudocode.

## Commenting Your Code

You've recently learned how to use pseudocode to help you plan your approach to a solution. At this point, you might be wondering what to do with that pseudocode after you've completed a problem. In this article, you'll learn how to use comments in your code as you move through the final steps of Polya's Problem Solving Framework. Specifically, you will learn:

### Using Comments to Walkthrough, Debug and Optimize a Solution

Once you have a solution in place, it is important to walk through the solution with a few potential inputs to check whether the code behaves as intended. You can use comments in your code to track key variables as you step through the code, line by line. This is the fourth step of Polya: Looking back to improve your solution.

For example, you could use comments to track the variables in the isPrime(number) function from the previous reading. Let's walkthrough the code to check whether 5 is a prime number:

function isPrime(number) { // number = 5
if (number < 2) { // false
return false;
}

let i = 2; // i = 2
while (i < number) { // true
if (number % i === 0) { // 5 % 2 === 0 false
return false;
}
i++; // i = 3
}

return true;
}
As the example above shows, you can use end-of-line comments to track your variables as you step through each section of code. As you move on to a new iteration of the while loop, you can update the values of each variable. If there is a bug in your logic or a syntax error in your code, the comments from this walkthrough should help you to find and fix the bug.

Likewise, this process will also help you to find any inefficiencies or redundancies in your code, and will help you see where you could make changes to optimize your code.

### Keeping or Deleting Comments?

So far, in working through the isPrime(number) problem, you've written a lot of comments in planning, coding out, and walking through the solution.

If you kept all of those comments, your code might look like this:

// definition of prime: a number is prime if it has only two factors, itself and 1
// goal: return a boolean of whether a given number is prime or not
// input: number (integer)
// output: true or false (boolean)
// edge cases: 0? 1? does it have to be larger than one to be prime?

function isPrime(number) { // number = 5
// 1. Check if number is greater than 2
// - if not, return false (edge cases - not prime)
if (number < 2) { // false
return false;
}

// 2. Iterate from 2 up to number (exclusive)
// - Check if i is a divisor of the number (use %)
// - if it is, return false (not prime)
let i = 2; // i = 2
while (i < number) { // true
if (number % i === 0) { // 5 % 2 === 0 false
return false;
}
i++; // i = 3
}

// 3. After loop completes, return true
return true;
}
When you are happy with a solution, it might be tempting to delete all of your planning and walkthrough notes so you can focus on your clean code. Although the example above looks pretty overwhelming, try to resist the temptation to just delete ALL of your comments!

Instead, take a minute or two to clean up those comments. Rather than including all of your planning and walkthrough notes, only include notes that help to explain your completed code. This could include a short description of what the code does, plus an explanation of why you chose to implement code in a certain way if it might be unclear to others.

For the isPrime(number) example, your cleaned-up code might look like this:

function isPrime(number) {
// Base case: any numbers less than 2 are not prime
if (number < 2) {
return false;
}

let i = 2; // start from base case
while (i < number) { // do not include the number itself
if (number % i === 0) { // check if i is a factor of the number
return false;
}
i++;
}

// number must be prime if it has not met any of the above conditions
return true;
}
In this example, minimal comments are included to explain WHAT certain lines of code do, and WHY the programmer made certain choices. This approach is helpful for you to understand your code quickly when you look back at it in the future, and more importantly, will help your future teammates.

### Comments as a Form of Documentation

While commenting your code is an important skill for learning, it is even more important once you are working as a developer on an engineering team. On the job, you will continuously work with code written by others, and they will be working with your code. It is your responsibility to make sure that the code you write will be easily understood by your teammates, so that they can quickly jump in and collaborate.

For example, you might choose to write a function in a certain way so that it can be called from multiple places within a large application. In order for this to work, you may need to add an optional argument that is used in some function calls, but not others. Adding a comment to explain why there is an optional argument, and when it is used, can be incredibly helpful for your current and future teammates. This will help them to quickly understand how a change they make in one place could affect other parts of the application. As you start to work on larger project with larger teams, this form of documentation becomes more and more important.

## Function Expressions

You may have noticed that we've been writing many functions so far in the course! We will continue to do so since functions are the building blocks of the eventual applications that we will build. That being said, let's begin to broaden the way we think about functions. In particular, we'll want think of functions as expressions that we can store in variables - just like our classic data types of number, string, boolean, array, and object!

### Functions as first-class objects

JavaScript is well known for being a programming language that treats functions as "first-class objects." This fancy talk means that you can treat a function as a "normal" value by storing it in a variable. We'll leverage this key concept in very clever ways later in the course. For now, let's begin with a simple example that shows the "first-class object" nature of functions:

let calculateAverage = function(a, b) {
return (a + b) / 2;
};

console.log(calculateAverage(10, 20)); // 15
In the code snippet above, we define the calculateAverage by assigning a variable to contain the function's definition. By doing this, the variable's name is effectively the function's name. So to call the function, we simply refer to the variable name. Note that we do not write the function's name after the function keyword, where we normally would. We will refer to this new way of defining functions as function expression syntax and the classic way of defining functions as function declaration syntax. In general, we can define functions using either syntax:

// function declaration syntax
function myFunctionName(arg1, arg2) {}

// function expression syntax
let myFunctionName = function(arg1, arg2) {};
In the coming sections, we'll highlight moments when we'll prefer one syntax over the other. For now, get acquainted with the new syntax as it is something you'll be seeing a lot of as a programmer!

A peek under the hood
Perhaps you're finding it tough to understand what it means for a variable to contain a function - it is indeed a very abstract idea for new programmers. Let's draw a comparison. We know that when we assign an expression to variable, the expression first evaluates to a single value, which we then store in the variable name:
let myNum = 4 + 4;
console.log(myNum); // prints 8
console.log(myNum \* 3); // prints 24
In the same way we can treat a function definition as an expression that evaluates!

let myFunc = function() {
console.log("I'm a function");
};

console.log(myFunc); // prints [Function: myFunc]
myFunc(); // prints "I'm a function"
Looking at the snippet immediately above, you'll notice that when we print the myFunc variable directly, without calling the function with parentheses, JavaScript simply says the variable contains a function named myFunc ([Function: myFunc]). You can truly imagine a function as a value that we can store and use as we please.

The term anonymous function may also be used to describe a function expression before it is assigned to any variable. Following the example above, we'll use the word anonymous function to describe the function expression before the assignment to the myFunc variable is complete. Once the assignment is complete, it would be silly to refer to myFunc as an anonymous function because an anonymous function has no name.

## Helper Functions

To understand when and how to break down a problem into helper functions, you need to understand how to control the complexity of your programs.

Uncontrolled complexity is the arch-nemesis of a programmer. If we do not understand our programs, we will inevitably introduce bugs. Let's introduce two ideas that will help you in your quest to master the complexity of your programs: Decomposition and Abstraction.

As a programmers our goal is not just to know how to write code. Our goal is to write code that solves a problem. Often times you will be given large, seemingly difficult problem on a technical interview. The key to solve an "unmanageable" problem is to break it down into chunks (functions) that are manageable.

### Decomposition

Decomposition is the process of breaking down a larger problem into its smaller sub-problems. Let's look at an example:

yellStrings(strings)
Let's attempt a problem that lends itself nicely to decomposition.

// yellStrings(strings)
// Write a function that takes in an array of strings as an argument.
// It should return array where every string is "yelled", see the example below:

let yelled = yellStrings(['hello', 'how', 'are', 'you?']);
yelled; //=> ['HELLO!', 'HOW!', 'ARE!', 'YOU?!'];
This seems a bit scary, how can we manage to change all the strings in the array?!? Wait, what if we were given this similar problem instead:

// yellStr(str)
// Write a function that takes in a string as an argument. The function
// should return the string but "yelled", see the example below:

let yelled = yellStr('bootcamp');
yelled; //=> 'BOOTCAMP!'
The yellStr problem above is way more manageable to solve. Let's take a crack at building that function:

function yellStr(str) {
let upperString = str.toUpperCase();
return upperString + '!';
}
Here is where decomposition comes into play. A keen observer will notice that yellStr is a sub-problem of the yellStrings. Using the yellStr function we built above, here is how we can solve it:

function yellStr(str) {
let upperString = str.toUpperCase();
return upperString + '!';
}

function yelledStrings(strings) {
let yelled = [];

for (let i = 0; i < strings.length; i++) {
let string = strings[i];
let newString = yellStr(string);
yelled.push(newString);
}

return yelled;
}
Notice that the yelledStrings function calls the yellStr function multiple times. We already know exactly what the yellStr function does, so we are free to take advantage of it. We are using yellStr as a helper function to solve yelledStrings.

laligatSum(n)
Let's decompose a more complicated problem that deals with prime numbers.

// Write a function laligatSum(n) that takes in a number and returns the
// laligatSum of that number.
// A number's laligat sum is the the sum of all the prime numbers less than or
// equal to that number.
From the description above, the laligat sum of 10 is: 2 + 3 + 5 + 7 = 17

That also means that the laligat sum of 11 is: 2 + 3 + 5 + 7 + 11 = 28

So our function should behave like this:

let result1 = laligatSum(10);
result1; //=> 17

let result2 = laligatSum(11);
result2; //=> 28
We could try to write the whole thing in a single function. Disclaimer! This will look scary and it should! Solving this complex problem in a single function is messy and hard to understand:

// Not decomposed and thus complex:
function laligatSum(n) {
let sum = 0;
for (let i = 2; i <= n; i += 1) {
let prime = true;

    for (let factor = 2; factor < i; factor += 1) {
      if (i % factor === 0) {
        prime = false;
        break;
      }
    }

    if (prime) {
      sum += i;
    }

}
return sum;
}
As you can see, this function is very hard to read and reason about. What if this code contained a bug? How noticeable would it be? If there was an issue with how prime numbers are found, would you know where to look?

Check out how we can dramatically simplify this problem if we split it up into multiple functions:

// Nice and Decomposed:
function isPrime(n) {
for (let i = 2; i < n; i += 1) {
if (n % i === 0) {
return false;
}
}
return true;
}

function laligatSum(n) {
let sum = 0;

for (let i = 2; i <= n; i += 1) {
if (isPrime(i)) { // if i is a prime,
sum += i; // then add it to sum.
}
}

return sum;
}
Notice that we decomposed laligatSum into an isPrime function (and we have seen isPrime before). The key to solving a problem on a technical interview is recognizing familiar sub-problems! Once we make a separate isPrime function, notice how much more intuitive the code in laligatSum is!

When to Decompose into Helper Functions
There is no hard rule to decide on when and how to decompose a large problem into multiple helper functions. Do what makes sense in context of the problem. For example, the question for laligatSum states that we are concerned with prime numbers, and so it would be great if we had a helper function isPrime.

Use your best judgement. If you are finding that a single function is getting overly complicated, split off into another helper function to keep things tidy (in your code and in your brain!).

The more practice and problems you see in your time as a programmer, the better you will get at judging when helper functions should be used.

Tip: Read and review other people's code. This will help you get better ideas on how and when to create helper functions.

### Modular Functions

As you program more complex problems, strive to design your functions so that they are relatively simple and focus on a particular task. We should make our functions so that they are modular. If we make our code modular, and each smaller component is correct and working, then the entire system of our code will be working and easy to maintain. Here's a rule of thumb: if a function you wrote is large and difficult to follow, consider decomposing it by creating a helper function.

### Abstraction

The computing scientist’s main challenge is not to get confused by the complexities of his own making.
— E. W. Dijkstra
Abstraction is the process of hiding details. The human brain is relatively bad at reasoning through complexity. As you will see, computer programs become pretty complex rather quickly and it is hard for the human brain to keep up. The job of a programmer is to manage the complexity by keeping the program modular and hiding details. The act of hiding details allows our minds to focus on other aspects of the program that need attention. Decomposition is a technique that uses abstraction because it hides details. Go back and look at the two laligatSum solutions. The decomposed one exposes less implementation details and is easier to reason about.

When you read the decomposed code for laligatSum, you don't have to have to think much about what goes on when we call the isPrime function. If isPrime is written correctly then we can pretty much tell exactly what it does just from the function name. We use abstraction all the time when we declare variables and define functions.
