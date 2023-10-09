CLEAR DATABASE

MERGE BUGS

[x] Reviews don't disappear on delete after editing them
[] Can only rate 0 if you don't click the rating when creating a new review
[x] album title disappears on review edit
[x] moderator badge doesn't always render
[x] bug in album-info that stopped comments from being written
[x] editing review on album page makes number of reviews go away
[x] avgRating always comes back null
[x] updating ratings is one step behind
[] Liking review updates the Update time

TODO:

[x] REDO REVIEW REDUCER
[x] FIX LIKES
[x] Rendering Hottest Takes on home page
[x] - Add visual indicator if liked or not
[x] Album name disappearing from userProfile reviewlistitem when liked
[x] - Need to send back albumName with liked review or store it some other way
[] Check general responsiveness of everything
[x] Add time created/updated to reviews
[] - Add time updated to comments
[x] Live update number of comments on reviews
[x] Liking reviews
[x] - Fix link area on reviewListItem to be able to like a post without going to its page
[x] - Have to be logged in to like
[x] - Clean up user reducer for LIKE_REVIEW
[x] User profile page doesn't update when clicking profile on navbar
[] Login credentials
[x] Change profile links to use id instead of username
[x] Search for albums
[x] Home page
[x] - New releases -- albums
[x] - Conditionally render reviews based on login
[x] Manage state better -- Refresh page on state change
[x] - Fix comment state
[x] - Fix review state
[x] Need to be logged in to comment (reuse same modal to redirect to login)
[x] Conditionally render the 'Write Review' button if the user has already written a review
[x] - Editing reviews (load user's content)
[x] Figure out comment logistics
[x] - Do we want to allow user comments on own post
[x] - Do we want to allow user multiple comments on a single post
[x] Profile page
[x] - Get user reviews
[x] - finish edit bio
[x] Report page
[x] Change some reponses to give certain information
[x] - Total number of comments on a review (saves a get request)
[x] - Album name with a review instead of just albumId (saves a get request)
[] Error handling for all axios requests
[] - 401 for logout is most important
[] Moderator functionality
[] - Banning users
[x] - Reports
[] Checking if user is banned
[] Redirecting from pages users do not have permission for
[] - General user cant access reports page
[x] - Logged in users cant access login or register page
[x] Add a Review popularity bar (confusing with just the spotify popularity bar)
[] Pagination
[X] Role badges
[x] Toast messages
[] Clean up styling for AlbumListItem -- album title, artist, and responsiveness of image
[] Navbar responsiveness is a little weird

NEW STUFF
[] - Indicate a post has been reported by you (hide it?)
[] - Fix going to profile from comment author
[] - Fix reports page - weird for comments
[] - auto redirect for page not found
