const heading = React.createElement(
  "div",
  {},
  React.createElement("div", { id: "parent1" }, [
    React.createElement("h1", {}, "iam h1 tag"),
    React.createElement("h2", {}, "iam h2 tag"),
  ]),
  React.createElement("div", { id: "parent2" }, [
    React.createElement("h1", {}, "iam 2nd tag"),
    React.createElement("h2", {}, "iam 2d small tag"),
  ])
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);
