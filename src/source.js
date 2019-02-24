let reactButton = false;

const clickReact = () => {
    reactButton = !reactButton;
    render();
}

const render = () => {

    const reactTemplate = (
        <div id="divOne">
            <h1>React toggle</h1>
            <button id="reactButton" onClick={clickReact}>
                {reactButton? 'Hide summary' : 'Show summary'}
            </button>
            {reactButton && <div><h2>Declarative</h2><p>React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes. Read more on </p><h2>Component-Based</h2><p>Build encapsulated components that manage their own state, then compose them to make complex UIs. Since component logic is written in JavaScript instead of templates, you can easily pass rich data through your app and keep state out of the DOM.</p></div>}
        </div>
    );
    ReactDOM.render(reactTemplate, document.getElementById('root'));
} 

render();