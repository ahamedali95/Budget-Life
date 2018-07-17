# Life Budget Application

Life Budget is a *single-age, full-stack* web application built using **ReactJS** and **Ruby on Rails**. It is a simple budgeting application that allow users to track their recent transactions whether it is an expense or income and add an event which describes a particular event they want to take part in the future and allow them to keep track of their savings for that particular event. They can also add bills to their expenditures which serves as a remainder on when the bill is due and the due amount. Life Budget effectively uses **CRUD functionality, dynamic routing using React Routers, RESTful JSON API using Rails** to give a feel of an dynamic web application. Moreover, this application implements the core concept of *relational* database as a foundation to relate data to one another so that information can be efficiently retrieved. The relationships are formed using ActiveRecord associations.

Following is the Entity Relationship Diagram that describes the entities/models and associations between these entities:

![imageedit_14_9756746858](https://user-images.githubusercontent.com/24445922/41814444-47ac9a64-771a-11e8-8137-5d6c90e179e7.png)


Following is the tree-like React Component Hierarchy that describes the component structure of the application's front-end:

<pre>
 ┬  
 ├ App
     ┬  
     ├  NavBar
     ├  HomeContainer
         ┬  
         ├  LatestBills
         └  LatestEvents
     ├  TransactionContainer
         ┬  
         ├  TransactionForm
         └  TransactionList
     ├  BillContainer
         ┬  
         ├  BillForm
         ├  CategorySelection
         └  BillsCollection
     └  EventContainer
         ┬  
         ├  EventForm
         ├  EventsCollection
         └  Event
</pre>

**Notable tools:**

- **Semantic UI React** - front-end framework that helps to add stylish and responsive layouts to the user interface using pre-made, react-like components.
- **Rack Cors** - a Rails gem that allows support for Cross-Origin Resource Sharing(CORS) to allow the resources of a Rails web server to be accessed by a web page from a different domain.
- **Serializer** - a Rails gem that allows to build JSON APIs through serializer objects. This provides a dedicated place to fully customize the JSON output.

**Planned Features:**

- Open Authorization(OAuth)
- Interactive graphs to represent data

**Link to Backend application:**
https://github.com/ahamedali95/Budget-Life-back-end

**Demo:**
