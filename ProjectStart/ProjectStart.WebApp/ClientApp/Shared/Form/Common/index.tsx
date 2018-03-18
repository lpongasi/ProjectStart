import * as Uuid from 'uuid/v4';
import { InputProps } from 'shared/Form/Input';

export class Form {
    public id: string;
    public inputs: InputProps[] = [];
    constructor(id: string) {
        this.id = id ? id : Uuid();
    }
    public static createFrom(formId: string): Form {
        return new Form(formId);
    }
    public addInput(input: InputProps): Form {
        const transformInput = { ...input, id: input.id ? input.id : Uuid(), formName: this.id };
        this.inputs.push(transformInput);
        return this;
    }
    public addInputs(inputs: InputProps[]): Form {
        inputs.forEach(e => {
            e.id = e.id ? e.id : Uuid();
            e.formName = this.id;

        });
        this.inputs = this.inputs.concat(inputs);
        return this;
    }
}