import techItems from '/src/assets/data/tech-list';
export class TechTagObject {

    static DEFAULT_PATH = '/src/assets/icons/tech/null.svg';

    constructor(id) {
        const record = techItems.find(t =>t.id === id);

        if (record) {
            this._title = record.title;
            this._domain = record.domain;
            this._iconPath = record.iconPath || TechTagObject.DEFAULT_PATH;
            this._useFrequency = record.useFrequency;
        } else {
            this._title = "Unkown";
            this._domain = "Unknown";
            this._iconPath = TechTagObject.DEFAULT_PATH;
            this._useFrequency = 'Unknown';
        }
    }

    get title() {
        return this._title
    }
    get domain() {
        return this._domain;
    }
    get iconPath() {
        return this._iconPath;
    }
    get useFrequency() {
        const USAGE = [
            'rarely',
            'occasionally',
            'regularly',
            'daily'
        ]
        return USAGE[this._useFrequency];
    }
    /**
     * CONSTRUCTS THE TECHSTACK OBJECT AND RETURNS IT
     * @returns {techTagItem} The json object that holds all techstack item data (title,domain,logo)
     */
    getTechTagItem() {
        return {
            title: this.title,
            domain: this.domain,
            iconPath: this.iconPath,
            useFrequency: this.useFrequency
        }
    }
}