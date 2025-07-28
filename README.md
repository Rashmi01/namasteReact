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
