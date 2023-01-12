# ASSESSMENT 4: Ruby Coding Practical Questions
# MINASWAN ✌️

# --------------------1) Create a method that takes in a number and determines if the number is even or odd. Use the test variables provided.

# PSEUDOCODE
# declare method named even_or_odd that takes in a number and determines whether the number is even or odd
# input: Integer
# output: "#{Integer} is odd / even"
# use conditional and string interpolation

num1 = 7
# Expected output: '7 is odd'
num2 = 42
# Expected output: '42 is even'
num3 = 221
# Expected output: '221 is odd'

def even_or_odd(n)
    if n % 2 == 0
        p "#{n} is even"
    else
        p "#{n} is odd"
    end
end

# even_or_odd num3

# -------------------2) Create a method that takes in a string and removes all the vowels from the string. Use the test variables provided. 
# HINT: Check out this resource: https://ruby-doc.org/core-2.6/String.html#method-i-delete

# PSEUDOCODE
# create method that takes in a string and removes all the vowels
# input: string
# output: string with no vowels
# use delete method to filter out all vowels

beatles_album1 = 'Rubber Soul'
# Expected output: 'Rbbr Sl'
beatles_album2 = 'Sgt Pepper'
# Expected output: 'Sgt Pppr'
beatles_album3 = 'Abbey Road'
# Expected output: 'bby Rd'

def no_vowels(str)
    str.delete 'aeiouAEIOU'
end

# p no_vowels beatles_album2

# -------------------3) Create a method that takes in a string and checks if the string is a palindrome. A palindrome is the same word spelled forward or backward. Use the test variables provided.

# PSEUDOCODE
# create method that takes a string and checks if it is a palindrome
# input: string
# output: "#{string} is / is not a palindrome"
# use reverse method to compare reversed string to original string


palindrome_tester1 = 'Racecar'
# Expected output: 'Racecar is a palindrome'
palindrome_tester2 = 'LEARN'
# Expected output: 'LEARN is not a palindrome'
palindrome_tester3 = 'Rotator'
# Expected output: 'Rotator is a palindrome'

def pali_or_not(str)
    str_lower = str.downcase
    if str_lower == str_lower.reverse
        "#{str} is a palindrome"
    else 
        "#{str} is not a palindrome"
    end
end

# p pali_or_not palindrome_tester1
# p pali_or_not palindrome_tester2
# p pali_or_not palindrome_tester3