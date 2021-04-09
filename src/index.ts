import Menu from "./source/menu/index";
import EditorContent from './source/editor/index';
import './assets/style/base.less';
import {addEventListener, appendChild, createElement} from "./util";
import {Settings} from "./types";
class Editor{
    private readonly baseElm: HTMLElement;
    private defaultActions = new Menu().create();
    private defaultClasses = {
        container:'easy-richeditor',
        actionbar: 'actionbar',
        button: 'button',
        content: 'content',
        selected: 'button-selected'
    }
    constructor(element: HTMLElement){
        this.baseElm = element;
        this.baseElm.classList.add('easy-richeditor');
    }
    createAction(){
        return Object.keys(this.defaultActions).map(action => this.defaultActions[action])
    }
    createActionBar(content: HTMLElement,onChange:(html: string) => void, classes: {[key: string]:string}){
        const actionbar = createElement('div')
        actionbar.className = classes.actionbar
        const actions = this.createAction();
        actions.forEach(action => {
            const button = createElement('button')
            button.className = classes.button
            button.innerHTML = action.icon
            button.title = action.title
            button.setAttribute('type', 'button')
            button.onclick = () => action.clickCallback() && content.focus()

            if (action.state) {
                const handler = () => button.classList[action.state() ? 'add' : 'remove'](classes.selected)
                addEventListener(content, 'keyup', handler)
                addEventListener(content, 'mouseup', handler)
                addEventListener(button, 'click', handler)
            }

            appendChild(actionbar, button)
        })

        return actionbar;
    }
    init(settings:Settings){
        const classes = { ...this.defaultClasses, ...settings.classes }
        const content = new EditorContent(settings,classes).create();
        const actionbar = this.createActionBar(content, settings.onChange,classes);
        appendChild(this.baseElm, actionbar)
        appendChild(this.baseElm, content)

        return this.baseElm
    }
}
export default Editor

