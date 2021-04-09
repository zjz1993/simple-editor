import {appendChild, createElement, exec, queryCommandValue, removeChild} from "../../util";
import Placeholder from './placeholder';
import {Settings} from "../../types";

class EditorContent{
    private classes: { [p: string]: string };
    private formatBlock = 'formatBlock'
    private settings: Settings;
    constructor(settings:Settings,classes:{[key: string]:string}) {
        this.classes = classes;
        this.settings = settings;
    }
    addPlaceHolder(content: HTMLElement, placeholderDiv: HTMLElement){
        appendChild(content,placeholderDiv)
    }
    create(){
        const placeholderDiv = new Placeholder(this.settings.placeHolder).create();
        const content = createElement('div')
        content.contentEditable = true
        content.className = this.classes.content
        content.onfocus=function(){
            if (content.contains(placeholderDiv)){
                removeChild(content, placeholderDiv);
            }
        }
        content.onblur=() => {
            if (content.innerHTML === ''){
                this.addPlaceHolder(content,placeholderDiv);
            }
        }
        content.oninput = ({ target: { firstChild } }) => {
            if (firstChild && firstChild.nodeType === 3) exec(this.formatBlock, '<div>')
            else if (content.innerHTML === '<br>') content.innerHTML = ''
            this.settings.onChange && this.settings.onChange(content.innerHTML)
        }
        content.onkeydown = event => {
            if (event.key === 'Enter' && queryCommandValue(this.formatBlock) === 'blockquote') {
                setTimeout(() => exec(this.formatBlock, '<div>'), 0)
            }
        }
        this.addPlaceHolder(content,placeholderDiv);
        return content;
    }
}
export default EditorContent;
