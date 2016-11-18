Possible pages for the app:

Home: Book of the month, find/create book club
Book Club Home: Current book, members
Featured Books: Current club reads, most popular
About: Explanation of the app 
Book Details: Posts of book discussion, basic book info from api
Member profile: Shows books read, all posts/comments

Models:
Clubs: have many books, have many users, have one curent book (name, location)
Books: have many posts, belongs to clubs, belongs to users, has many comments through posts (how do I make this info from api?, post_id, user_id)
Users: belongs to clubs, have many posts, have many comments, have many books (club_id, post_id, comment_id, book_id)
Posts: belongs to books, belongs to users, have many comments(content, user_id, book_id)
Comments: belong to posts, belong to members(post_id, user_id)
Current-book: belongs to club

Javascript and AngularJS:
- Use bower to handle front end assets
- Angular templates (angular-rails-templates)
- Angular UI Router
- Angular Devise (front end authentication)
- Moment.js (Not sure if I need this)
- Bootstrap or Semantic UI?

Thoughts on authentication and showing information:
- Need 3 levels of access: admin, member, user
  - admin should be able to edit/delete clubs
  - members should be able to post on a club page
  -users can view all information, but need to join to participate
- admin should be assigned when someone creates a club
-member status should be assigned when someone clicks join
- edit club button should only be seen by admin
-join button should only be seen by non-members

Need to set up login and new user sign up
Need to create a reading profile that can be updated by user

