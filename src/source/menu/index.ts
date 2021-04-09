import {exec, queryCommandState} from "../../util";

class Menu{
    private menu
    constructor() {
        this.menu = {
            bold: {
                icon: '<b>B</b>',
                title: 'Bold',
                state: () => queryCommandState('bold'),
                clickCallback: () => exec('bold')
            },
            italic: {
                icon: '<i>I</i>',
                title: 'Italic',
                state: () => queryCommandState('italic'),
                clickCallback: () => exec('italic')
            },
            underline: {
                icon: '<u>U</u>',
                title: 'Underline',
                state: () => queryCommandState('underline'),
                clickCallback: () => exec('underline')
            }
        };
    }
    create(){
        return this.menu;
    }
}
export default Menu;
