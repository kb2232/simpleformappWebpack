# simple notes for learners form based

### simple git commands to keep in mind I use all the time
  1. git init
  2. git add .
  3. git commit -m "..."
  4. git push origin master
  5. git remote -v
  6. git branch 
  7. git branch -a (list all branches - both local and remote)
  8. git branch -a -v  (list all branches - both local and remote - and what they point to)
  9. git branch --no-merged (you can find out which of your local branches have not been integrated into your current HEAD branch, yet)
  10. git branch --merged (branches already merged)
  11. git branch [name of new branch]   (create new branch)
  12. git checkout [name of branch to switch to]

### app overview
  1. create a simple input text box to make call to outside api
  2. show images of the input
  3. i make use of passing props, classes, backend api call with axios
  4. api call to unsplash.com for photos
  
  ```
  APP ---- SEARCH-BAR
  |
  |
  IMAGE-LIST

  searchbar will pass an array of images to image-list component
  ```