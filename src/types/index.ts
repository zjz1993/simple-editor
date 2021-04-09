export interface Settings{
    onChange?:(html: string) => void
    classes?: {[key: string]:string}
    placeHolder?:string;
}
