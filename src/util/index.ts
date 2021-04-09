const addEventListener = (parent, type, listener) => parent.addEventListener(type, listener)
const appendChild = (parent, child) => parent.appendChild(child)
const removeChild = (parent, child) => parent.removeChild(child)
const createElement = tag => document.createElement(tag)
const queryCommandState = command => document.queryCommandState(command)
const queryCommandValue = command => document.queryCommandValue(command)

const exec = (command, value = null) => document.execCommand(command, false, value);
export {
    addEventListener,
    appendChild,
    removeChild,
    createElement,
    queryCommandState,
    queryCommandValue,
    exec
}
