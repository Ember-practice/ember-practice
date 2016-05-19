###Ember - Getting Started:
=======
#####Installing Ember
Installing is simple.  You use a Node.js Package Manager (npm).  Type the follwing into your command line:

>npm install -g ember-cli@2.5

This npm gives you acces to the 'Ember command line interface (CLI)".  This provides you with a standard project structure, a set of development tools and an add-on system

To create a new project, simply type `ember new` followed by the name of your project:

>ember new super-rentals

The following files and directories are created:  
```
1	|--app   
2 	|--bower_components  
3	|--config  
4	|--dist  
5	|--node_modules  
6	|--public  
7	|--tests  
8	|--tmp  
9	|--vendor  
10  
11	bower.json  
12	ember-cli-build.js  
13	package.json  
14	README.md  
15	testem.js  
```

Next we want to create some routes:

>ember generate route about

For short:

>ember g route about

Here is what appears in your command line:

![Alt text](/images/files.png)

Three files are created:  one for the route handler, one for the template the route handler will render and a test file.  The final file created is the router.

If we open our router, we'll see everything has been routed for us:

![Alt text](/images/routesfile.png)

All the routing and "set up " code has been handled by the genrator for us.  We can now move straight into coding our site

![Alt text](/images/index.png)

Lets see how we're doing.  In your terminal command line type:

>ember serve

After a few seconds a development server will start up.  Navigate to [localhost:4200/about](https://localhost:4200/about) in your browser to see your burgeoning site.

============

####A Contact Route
Lets create a contact route for information about contacting the company.  Once again on your terminal command line, type:

>ember g route contact

In your text editor, go to your `app/templates/contact.hbs`.  This file was created when you generated your new route.  

Lets add the follwing details to your file:

![Alt text](/images/htmlfile.png)

Lets go to our [localhost:4200/contact](https://localhost:4200/contact)













