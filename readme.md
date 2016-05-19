![ember logo][logo]
================================

[logo]: https://upload.wikimedia.org/wikipedia/en/6/69/Ember.js_Logo_and_Mascot.png

###What is Ember.js?  
Ember.js is an open-source JavaScript web framework, based on the model–view–controller (MVC) pattern. It allows developers to create scalable single-page web applications by incorporating common idioms and best practices into the framework.  Its Rails for Javascript!

###Ember.js vs Angular
####Angular 
* Easier to learn and apply 
* Doesn't use terminology like MVC - instead uses Scopes, directives and transclusion.
* Newest versions don't support Component functionality

####Ember.js
* Approach is very opinionated, similar to Rails
* Easier to set up structures within its confines because of its fixed notions on how things work out.
* Uses two-way bindings for registering HTML updates - Handlebars - {{ expression }}
* Works on the MVC approach which is widely understood
* Uses Components to handle reusable and dynamic functionality

####Components
When a component is used inside a template, it has the ability to send actions to that template's controller and routes. These allow the component to inform the application when important events, such as the user clicking a particular element in a component, occur.

Components are designed to be reusable across different parts of your application. In order to achieve this reusability, it's important that the actions that your components send can be specified when the component is used in a template.

####Templates
Ember uses the Handlebars templating library to power your app's user interface. Handlebars templates contain static HTML and dynamic content inside Handlebars expressions, which are invoked with double curly braces: {{}}.

Dynamic content inside a Handlebars expression is rendered with data-binding. This means if you update a property, your usage of that property in a template will be automatically updated to the latest value.

####Other General Comparisons
Ember uses "Handlebar" while Angular has "Dirty Checking." Both scan the scope of the files for updates and changes.

Has a built in concatenator and minifier for production running - this means that you wouldn't need to use Gulp. 

Angular tracks the previous values for these various expressions. If it notices a change, the corresponding Angular directive is given a chance to reflect those changes in the DOM. So if employee.fullname() changes, the interpolation directive (the fancy name for the double curly-braces syntactic sugar) has a chance to reflect this change in the DOM.

####Who uses Ember? 
 - Zendesk
 - Groupon
 - Yahoo
 - Square
 - TimBuk2
 - Karma 


