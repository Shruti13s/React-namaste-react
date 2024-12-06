//create element
const heading = React.createElement(
  "h1",
  { id: "vv", abc: "kkk" },
  "Hello world from react!!!"
);
const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

/*
<div class="parent">
  <div class="child">
  <h1></h1>
  </div>
</div>

*/
//creating child elements
// const parent = React.createElement(
//   "div",
//   { class: "parent" },
//   React.createElement(
//     "div",
//     { class: "child" },
//     React.createElement("h1", {}, "Hi I'm h1")
//   )
// );
// root.render(parent);

//create sibling elements

/* <div>
  <div>
    <h1>i am 1</h1>
    <h2>i am 2</h2>
  </div>
</div>; */
// const parent = React.createElement(
//   "div",
//   { class: "parent" },
//   React.createElement("div", { class: "child" }, [React.createElement("h1",{},"i am 1"),React.createElement("h2",{},"i am 2")]
// ));
// root.render(parent);

//nested
/* <div class="parent">
  <div class="child1">
    <h1>i am 1</h1>
    <h2>i am 2</h2>
  </div>
  <div class="child2">
    <h1>i am 1</h1>
    <h2>i am 2</h2>
  </div>
</div>;
*/
const parent = React.createElement("div", { class: "parent" }, [
  React.createElement("div", { class: "child1" }, [
    React.createElement("h1", {}, "I am h1"),
    React.createElement("h2", {}, "I am h2"),
  ]),
  React.createElement("div", { class: "child2" }, [
    React.createElement("h1", {}, "I am h1"),
    React.createElement("h2", {}, "I am h2"),
  ]),
]);
root.render(parent);
