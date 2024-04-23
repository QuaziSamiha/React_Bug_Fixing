# React_Bug_Fixing

<!-- GitHub Link -->
[Link Text](https://github.com/QuaziSamiha/React_Bug_Fixing.git)

## Total 5 Bugs

* Bug 1 Fixed
sorting is applied to at first to name. if name are same, then sorting is applied to score

* Bug 2 Fixed 
Bug: name value was undefined for input field. here extracting the name value from the input field referenced 
by addPersonInputRef. so to get the value of the input field, need to access the current property 
of the addPersonInputRef object

* bug 4 Fixed
To solve Bug 4 and ensure that the layout responds to window resize events without requiring a render, the ResizeObserver API is used to dynamically update the container width.

* Bug 5 Fixed
The useEffect hook is missing its dependency array, causing it to run on every render. To fix this, 
dependencies 'score' added to the useEffect hook so that it only runs when necessary.
   

