All 3)

Make pizza-parlor db
CREATE TABLE "pizza" (
	"id" SERIAL PRIMARY KEY,
	"name" VARCHAR(100) NOT NULL,
	"description" VARCHAR(1000) NOT NULL,
	"price" NUMERIC (20, 2) NOT NULL,
	"image_path" VARCHAR(1000) NOT NULL
);

Populate pizza with data

create orders table in postico

create line item table

run npm install

npm run server

open a new terminal tab using cmd + t
start react client app
((Do we need to import react? ))

Import react on each ind ccomponenet?


npm
run client
__________________________________



Tasks:
-Build server /api/order POST route
Post datas shouldbe an object
{customer_name
VARCHAR,
 street_address,
 "".
 city,
 "",
  zip,
  5 digit #,
   type,
   BOOLEAN total
   number with a $}(maybe a function sum?
   )

pizza id array as an object
"pizza":[{
"id":"1",
"quantity":"1",
}]





POSTMAN-
Body type
Raw radio button
BLUE dropdown appears
SELECT JSON




-api/order GET route
returns an array of orders


Find images of pizza we want to offer
allow users to select or remove pizza they want to order.
BUTTON- ADD REMOVE onclick,


show a cart intop right of page that adds each pizza together and shows  total,

add nextBUTTON to go to next page for details of order

ORDER DETAILS PAGE SHOWS
NAME
street_Address
city
zip
pickup or delivery button or checkbox. (toggle? boolean)

total should show upper corner of this too.

NEXT Button to go to checkout page.




-api/pizza GET route
-Inventory tasks and add cards as needed
-Project running for all team members
-Create Project
-Add pizza to cart
-Order- Select Pizza
5173 display all pizzas on screen



-Order - display all pizzas
-Remove pizza from cart
-Order - Checkout
-Admin - Orders
-Styling
-Back to previous page
-Display list of pizza for each order
-Add pictures to the 'public/images' folder
-Add button on orders page to track delivery status
-Create order details views.
-Test GET, POST, DELETE, and PUT route with postman.

on checkout (CANNOT EDIT- just display)
sends userinfo, total and pizza array to the server

aftercheckout done
customer is
brought to
home page where all pizzas are orderable again... Reset

each order should start blank, (do not save prev customer in form)
CLEAR FORM


ADMIN ORDERS-
localhost/5173/admin
only available to people who go to the above path

NAME
TIME
ORDER TOTAL for each order

(we need to capture the time that order was done)
____________________________________________________

Stretch

Material UI
styling

ALLOW back LINK, to history. (previous page)
ALLOW ALL the way to home.

Display list of pizzas for each order on
orders page.
Add pics to public images folder for each pizza

Add track your delivery
BUTTON

create route localhost 5173/order/1
so that people can see the order detail of that order
_______________________________________________________
Week 2-
assign tasks and work on pull requests.

Retrospects
_______________________________________________________
Header, PizzaDisplay = Tracy
Orderlist, Checkout - Moor Money

