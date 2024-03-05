import { Dictionary } from "../../dictionary/app.dictionary";

export class ComponentBase {
    dictionary: Dictionary = {};
    private lang: string = 'en-EN';

    constructor(viewName: string) {
        const file = `../assets/internationalization.${this.lang}.json`;
        fetch(file).then(res => res.json()).then(json => {
            json.filter(t => t.path.startsWith(viewName)).forEach(element => {
                this.addValue(element.key, element.value);
            });
        });
    }

    private addValue = (key: string, value: string) => {
        this.dictionary[key] = value;
    }
}