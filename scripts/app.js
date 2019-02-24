"use strict";

var reactButton = false;

var clickReact = function clickReact() {
    reactButton = !reactButton;
    render();
};

var render = function render() {

    var reactTemplate = React.createElement(
        "div",
        { id: "divOne" },
        React.createElement(
            "h1",
            null,
            "React toggle"
        ),
        React.createElement(
            "button",
            { id: "reactButton", onClick: clickReact },
            reactButton ? 'Hide summary' : 'Show summary'
        ),
        reactButton && React.createElement(
            "div",
            null,
            React.createElement(
                "h2",
                null,
                "Declarative"
            ),
            React.createElement(
                "p",
                null,
                "React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes. Read more on "
            ),
            React.createElement(
                "h2",
                null,
                "Component-Based"
            ),
            React.createElement(
                "p",
                null,
                "Build encapsulated components that manage their own state, then compose them to make complex UIs. Since component logic is written in JavaScript instead of templates, you can easily pass rich data through your app and keep state out of the DOM."
            )
        )
    );
    ReactDOM.render(reactTemplate, document.getElementById('root'));
};

render();
