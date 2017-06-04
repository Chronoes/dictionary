# Dictionary application
Application will have at least 3 types of users
* Anonymous
* Regular
* Admin

At least 3 pages
* Homepage
* Word page
* Admin landing page


## Users
### Anonymous
Ability to search and log in

### Regular
Anonymous user plus ability to suggest words and their changes. These actions will be pending for approval from admin.

### Admin
Anonymous user plus CRUD on words. In addition, merge changes from users for words.

## Homepage
Homepage needs at least two elements: ability to search and login

### Searching
* Filters
    * language
    * theme
    * type
    * exact or fuzzy match
    * include description text
* Results
    * word matches
    * word type
    * word theme
    * translation

### Login
Login top left or top right corner. Username and password + ability to register new account.

Research best solutions for these

## Word page

Represents a word and different meanings. Useful as single page representation

* Anonymous and logged in user must see in results:
    * pronounciation
    * declension
    * example usage
    * description
    * media
* Admin must see:
    * ^ all of the above
    * source(s) of word
    * user who added


## Admin page
### Navbar
* CRUD word form
* view and merge pending changes
