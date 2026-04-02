function customRender(reactElement, container) {

    // const domElement = document.createElement(reactElement.type)
    // domElement.innerHTML = reactElement.children
    // domElement.setAttribute('title', reactElement.props.title)
    // domElement.setAttribute('class', reactElement.props.className)
    // container.appendChild(domElement)

    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    for (const prop in reactElement.props) {
        if (prop === 'children') continue;
            domElement.setAttribute(prop, reactElement.props[prop])
    }
    container.appendChild(domElement)
}

const reactElement = {
    type: 'h1',
    props: {
        title: 'Hello World',
        className: 'title',
    },
    children: 'Hello AI - IT World',
}

const mainContainer = document.querySelector('#root')

customRender(reactElement, mainContainer)