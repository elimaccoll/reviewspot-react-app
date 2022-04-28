General

- Abstract pagination arrows
- - Pass in prev, next, loadPrev() and loadNext()

ReviewList and AlbumList

- Change them to take in a list of reviews/albums respectively to render

ReviewListItem

- No indication as to what album they are for

ReviewPage

- Ability to edit review/rating

CommentListItem (used on ReviewPage)

- Need to be able to associate comment with author
- - Abiliy for author to edit or delete comment

Navbar

- Placement of Logout button (move to ProfilePage??)

RatingBar

- XX / 10 text wraps as screen shrinks

ProfilePage

- Links to reviews from home page and user profile page DONT WORK (need the album id) | make change in ReviewListItem
- Conditional rendering for moderator
- Conditional rendering for account owner
- - delete account, edit bio

EditBioModal

- Connect to state to actually update on profile page

Home

- Should I even render recent comments on small screens
