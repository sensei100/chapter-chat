Possible pages for the app:

Home: Book of the month, find/create book club
Book Club Home: Current book, members
Featured Books: Current club reads, most popular
About: Explanation of the app 
Book Details: Posts of book discussion, basic book info from api
Member profile: Shows books read, all posts/comments

Models:
Clubs: have many books, have many users (name, location)
Books: have many posts, belongs to clubs, belongs to users, has many comments through posts (how do I make this info from api?, post_id, user_id)
Users: belongs to clubs, have many posts, have many comments, have many books (club_id, post_id, comment_id, book_id)
Posts: belongs to books, belongs to users, have many comments(content, user_id, book_id)
Comments: belong to posts, belong to members(post_id, user_id)

