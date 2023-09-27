// const heading = React.createElement(
//     "h1",
//     {
//       id: "title",
//       style: {
//         background:"red",
//       },
//       className:"title"
//     },
//     "heading"
//   );

const heading = React.createElement(
    "h1",
    {
        id: "title",
        style: {
            background: "blue",
            fontFamily: "Arial, sans-serif", // Replace with the desired font family
            color: "white", // You can also set the font color
        },
        className: "title",
    },
    "heading"
);
  const heading1 = React.createElement(
    "h1",
    {
      id: "title",
    },
    "heading1"
  );

  const heading3 = React.createElement(
    "h4",
    {
        id:"title",
        style: {
            backgroundImage: "linear-gradient(45deg, #ff5733, #33ff57)",
            WebkitBackgroundClip: "text", // For Safari
            color: "transparent",
        },
        className:"title",
    },
    "Sarvesh"
  )
  
  const container = React.createElement(
    "div",
    {
      id: "container",
    },
    [heading, heading1,heading3]
  );
  
  // create root using createRoot
  const root = ReactDOM.createRoot(document.getElementById("root"));
  // passing react element inside root
  root.render(container);