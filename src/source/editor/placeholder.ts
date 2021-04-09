import {createElement} from "../../util";
export default class Placeholder{
    private text: string;
    constructor(text: string) {
        this.text=text;
    }
    create(){
        const content = createElement('div');
        content.className='placeholder'
        content.innerHTML=this.text;
        return content;
    }
}
