# ActiveRecordsCodeChallenge

Instructions:

# Project Name

This is a sample project that demonstrates how to use Active Record association macros and query methods.

### shell

$ git clone [https://github.com/njambi-muhoro/ActiveRecordsCodeChallenge.git]
Then, cd into the project directory and install the required gems:

shell
$ cd ActiveRecordsCodeChallenge
$ bundle install
Next, create the database and run the migrations:

ruby

$ rake db:migrate

## License

This project is licensed under the terms of the MIT license.

## Installation

To install this project, clone the repository and run the following commands:
rake db:create
rails db:migrate
rails db:seed



### Deliverables:

Create classes and methods with Active Record association macros and query methods.
Set up migration for the reviews table.
Create the Review class and Review instances with seeds.rb.
Implement object association methods for Review, Product, and User.
Implement aggregate and association methods for Review, Product, and User.

### Migrations:

Create a migration for the reviews table.
Include columns for establishing relationships to a Product and a User, a star_rating column, and a comment column.

### Object Association Methods:

Implement Review#user and Review#product.
Implement Product#reviews and Product#users.
Implement User#reviews and User#products.
Aggregate and Association Methods:

Implement Review#print_review.
Implement Product#leave_review, Product#print_all_reviews, and Product#average_rating.
Implement User#favorite_product and User#remove_reviews.

### Conclusion
Congratulations! You have completed the Code Challenge README. Make sure all of your methods are working correctly and that your code is error-free before submitting. Happy coding

## Usage

To test the code in the console, run the following command:

rails console

Then, you can create sample instances and test the models and associations:

```ruby
# create a new product
product = Product.create(name: 'Sample Product', price: 9.99)

# create a new user
user = User.create(name: 'John Doe', email: 'john.doe@example.com')

# leave a review for the product
product.leave_review(user, 4, 'This is a great product!')

# print all reviews for the product
product.print_all_reviews

# get the average rating for the product
product.average_rating

# get the favorite product of the user
user.favorite_product

# remove all reviews for the user
user.remove_reviews

```
