###Ember.js

Ember has "Handlebar" while Angular has "Dirty Checking" 

Angular tracks the previous values for these various expressions. If it notices a change, the corresponding Angular directive is given a chance to reflect those changes in the DOM. So if employee.fullname() changes, the interpolation directive (the fancy name for the double curly-braces syntactic sugar) has a chance to reflect this change in the DOM.

