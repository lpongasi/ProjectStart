import * as classnames from 'classnames';
import * as Uuid from 'uuid/v4';
export class Form {
    public id: string;
    public inputs: Input[] = [];
    constructor(id: string) {
        this.id = id;
    }
    public static createFrom(formId: string): Form {
        return new Form(formId);
    }
    public addInput(input: Input): Form {
        input = input.id ? input.id : Uuid();
        this.inputs.push(input);
        return this;
    }
    public addInputs(inputs: Input[]): Form {
        inputs.forEach(e => {
            e.id = e.id ? e.id : Uuid();
        });
        this.inputs = this.inputs.concat(inputs);
        return this;
    }
}

export class Input {
    type?: string = 'text';
    label?: any | string;
    name: string;
    id?: string;
    classNames?: classnames;
    disabled?: boolean = false;
    textHelper?: string;
    iconPrefix?: string;
    placeholder?: string;
    value?: string;
    options?: Options;
}

export class Options {

}