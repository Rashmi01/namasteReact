  /**
   * <div id="parent">
   *    <div id="child">
   *        <h1></h1>
   *        <h2> </h2>
   *    </div>
   *  <div id="child2">
   *        <h1></h1>
   *        <h2> </h2>
   *    </div>
   * </div>
   */

  const parent = React.createElement("div", {id:"parent"}, 
    [React.createElement("div", {id:"child"},[
            React.createElement("h1", {}, "im h1 tag"), 
            React.createElement("h2", {}, "im h2 tag")
        ]),
    React.createElement("div", {id:"child"},[
            React.createElement("h1", {}, "im h1 tag"), 
            React.createElement("h2", {}, "im h2 tag")
        ])]
  )
  console.log(parent);

  //const header = React.createElement("h1", {id:"heading"}, "Hello World from React !!");
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(parent);