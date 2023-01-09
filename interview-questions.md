# ASSESSMENT 4: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What is object-oriented programming? How is it different than functional programming?

Your answer: Object-oriented programming, AKA OOP, is a type of programming in which everything is an object, coming from a class. For example, in Ruby, the number 15 is considered to be an object, coming from the class of Integer.

Researched answer: Object-oriented programming is a programming model that revolves around objects instead of functions and logic. In OOP, everything is an object, which means that everything is an instance of a class.

1. What is the difference between a Float and an Integer in Ruby?

Your answer: A Float is a class that lays out objects of partial numbers. An Integer is a class that lays out objects of whole numbers. An example of an Integer would be 17, while an example of a Float would be 17.0 or 17.6. While using irb in terminal, in order to receive an output of a Float, you must first introduce a Float to the initial input. For example, an input of 5/2 would output 2, whereas an input of 5/2.5 would then output 2.5.

Researched answer: An Integer is a whole number whereas a Float is a partial number. Examples are 2 and 2.5, respectively.

1. Ruby has an implicit return. What does that mean?

Your answer: While not 100% sure, I believe that implicit return means that the return statement is implied within Ruby. For example, if I was creating a method using def and end, in between the def and end i could write the code:
'Hello There!'
without an actual 'return' keyword. When I perform a method call on that method, it would automatically return 'Hello There!' even though I did not code in a return keyword.

Researched answer: Implicit return means that there is no need to use the word return in order to get a return in the output of code. As long as a return is the last expression in the code path of a given piece of code, implicit return will automatically have that return in the output even without using return.

1. What is a block in Ruby?

Your answer: A block is an anonymous function that is used with a method. Blocks use the "do and end" keywords or curly braces. An example of a block would be if I wanted to use the ".times" method to print 'hello' 3 times, I would use the code:
3.times do
    p 'hello'
end

Researched answer: A block is defined as a little anonymous function that can be passed into methods. Blocks start and end with do and end statements, but can also be enclosed within code brackets {}.

1. How do you extract a value in a Ruby hash?

Your answer: You can extract a value in a Ruby hash by using .values on the hash to get all of the values within that hash. If you want a specific value, you can use bracket notation to enclose the specific key you want the value of. For example, from the hash called example_hash = {:today=>"Workout day", :tomorrow=>"Rest day"}, we could print all the values using example_hash.values or only the value of today using example_hash[:today].

Researched answer: Extract a value in a Ruby hash using bracket notation with the key inside. An example would be name_of_hash[:key_name].

## Looking Ahead: Terms for Next Week

1. Class Inheritance: Class inheritance is a mechanism that allows the programmer to make one class adopt the characteristics of a different class.

2. RSpec: A testing framework for Ruby, similar to jest for Javascript.

3. CRUD: Stand for create, read, update, delete. An application is considered to be a full-stack application when all parts of CRUD are fulfilled and operational.

4. Test-driven development: A process in which software development is repeatedly tested before being fully developed.

5. HTTP: Stands for hypertext transfer protocol. It is used for communication between browsers and servers, and is the foundation of any data exchange on the Web.
