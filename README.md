Namaste React

# Parcel is a bundler
- Dev build
- Local Server
- HMR - Hot Module Replacement
- File watching Algortihm
- Caching - Faster build
- Image Optimization
- Minification
- Bundling
- Compress
- Consistent Hashing
- Code Splitting
- differential Bundling -> to make the app run on all the browsers
- Diagnostics
- Error handlings
- HTTPS
- Tree Shaking - remove unused code 
- Different build and production  bundles

# ~ and ^ difference
 "react": "^19.1.0", - will update minor version of react automatically
 "react": "~19.1.0", - will update only major version of react automatically


 # JSX
 - JSX is not HTML. JSX is html / XML like syntax in JS 

 # Babel
- transpile(js compiler) the JSX into js engine understand

- JSX -> createElement to React -> object -> passed to render () 

# REACT Functional component & Class component
- Functional component => js function which return jsx
- Class component => js class which return jsx

# React props
- props are just normal argumebts of the function

# Componenet Composition
- functional componenet inside another functional componenet is Componenet Composition

# Config Driven UI
- UI is driven by config(data)

# Do Not use indexes for Key in React - as it shows antipattern - Always use id in the component

# Food Delivery App Planning nad main structure
  - Header
    - Logo 
    - Nav Items
 - Body
       - Search
       - Restaurant Container
           - Restaurant
 - Footer
       - License
       - Links
   
# React Hooks
- React hook is normal JS utility function given by react 
- useState() - use to generate super powwerful state variables.
- useEffect() 
    - if no dependecy array then useEffect is called everytime when component renders
    - if dependecy array is empty, then useEffect is called only on initial render.
    - if dependency array is [btnNameReact] -> called everytime btnNameReact is updated

- Whenever a state variable changes its state or updates, ireact will re-renders the component

# 2 types of exports
- Named Export (when multiple things needs to be exported from single file)
- Default Export (when only 1 thing needs to export) 

# Reconcilation Algorithm also known as React Fiber -> new algorithm in react 16 which is a new way of finding diff between
-  updated virtual dom and previous virtual DOM. After finding the diff, it updates the ACTUAL DOM
- virtual DOM is just a representation of actual DOM . It is not the real DOM, infact it is normal JS object

- Diff Algorithm
    - Diff algorithm finds out thediffernce between 2 virtual DOMs , i.e. difference between updated virtual DOM and previous virtual DOM

# REACT is fast coz, it is doing efficient DOM manipulation
 - DOM manipulation happens everytime whenever state variable changes

# 2 ways of loading pages with backend data
- Loads -> API call (500ms) -> Render UI
- Loads -> Render UI -> API calls (500ms) -> Inject UI with api data = Better UX

# CORS policy
- browser blocks to access API from one origin to another. i.e. when origin mismatch happens. (calling swiggy api from local host ) 

# Conditional Rendering
- rendering on basis of conditions are called conditional rendering

# use of state variable
- To make component dynamic
- whenever useState variable iscalled, the entire componene re-reners
- Whenever state variables update, react triggers a reconciliation cycle (re-renders the component) and updates only the diff

# use Outlet of react-router-dom for below routing
-           <Header/>
            {/** if path is /  */}
            <Body />
            {/** if path is /about  */}
            <About />
            {/** if path is /contact  */}
            <Contact />

# Link Component 
- link comes from react-router-dom
- works sae as anchor tag
- Do not renders the whole page unlike anchor tag

# 2 types of routing
- client side routing - we are making client side routing in our page. when we are not interacting with server or not fetching anything from server.
- server side routing - 




# Functional Component
-  Functional Component is just a function which returns a piece of JSX

# Class Based Component

- Whenever parent say About component is rendered or mounted and then if it finds another components say (User) to render then the USer class constructor is instantiated i.e. constructor is called and then the render method is called.

# ComponentDidMount is used to make API's call 
- Why -> Coz, react 1st render the component quickly then do api calls and then fill the components with datas fetched from API calls.

# Lifecycle of component rendering when same child component is called twice. Ex- USerClass is a child component and About is a parent component
-    Parent constructor
-    About.js:16 Parent render
-    UserClass.js:7 First Child Component - Rashmi Class Comp propsUSer constructor
-    UserClass.js:16 USer Render
-    UserClass.js:7 Second Child Component - Rashmi Class Comp propsUSer constructor
-    UserClass.js:16 USer Render

     <DOM UPDATED - IN SINGLE  BATCH>

-    UserClass.js:13 First Child Component - Rashmi Class Comp propsUSer component did mount
-    UserClass.js:13 Second Child Component - Rashmi Class Comp propsUSer component did mount
-    About.js:12 Parent component did mount

# Mounting of component is done in 2 phase
- 1st constructor is called, then render method is called, then actually react updates the DOM , once the DOM is updated then React component mount is called
- Render Phase in this phase, react constructor and render is called and updates the DOM. 
- Commit Phase in this phase, componentDidMount is called and hence API calls are made.

# 
- ******* Mounting Life Cycle*******
    - Constructor (dummy)
    - Render (dummy)
    - <HTML> (dummy)
    - Component Did Mount
        <API Call>
        <this.setState> -> State variable is updated

- ******* Updated *******
    - render (API data)
    - <HTML> loaded with new API data
    - componentDidUpdate

- ******* Unmount *******
    - component unmount is called (called when another page is rendered or where the current component is not rendered)
    - used to do cleanup in the code
    - Ex- if we are using setInterval in the code then we wshould be using clear interval in the componentWillUnmount function else, setInterval will keep hanging in the code.

# Chunking, Lazy Loading, Code Splitting, Dynamic Bundling, on Demand loading, Dynamic Import
- When app will load, it will not load the code for grocery, only when i go to Grocery page then Grocery code will get loaded.