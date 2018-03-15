import * as classnames from 'classnames';
import * as React from 'react';
import { connect } from 'react-redux';
import { getFormError } from 'shared/Component/common';
import { updateFormInput } from 'shared/Component/action';
import * as Uuid from 'uuid/v4';

interface Props {
    children?: any;
    defaultValue?: string;
    error?: any;
    form?: any;
    formName: string;
    helperText?: string;
    id?: string;
    label: string;
    name: string;
    onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    pattern?: string;
    required?: boolean;
    success?: any;
    type?: string;
    clientValidate?: boolean;
    classNames?: classnames;
}

type State = {
    generatedId: string,
    isFirstLoad: boolean,
};

const patterns: object = {
    email: {
        message: 'Incorrect email address!',
        value: '[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$',
    },
    password: {
        message: 'Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters',
        value: '(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}',
    },
};

@connect(state => ({
    form: state.form,
}), null)
export default class Input extends React.Component<Props, State> {

    constructor(props) {
        super(props);
        this.state = {
            generatedId: props.id ? props.id : Uuid(),
            isFirstLoad: true,
        };
    }
    public onChange(e: React.ChangeEvent<HTMLInputElement>) {
        if (this.props.onChange) {
            this.props.onChange(e);
        }
        this.setValue(e.target.value);
    }
    public setValue(value: string) {
        if (this.props.formName && this.props.name) {
            updateFormInput(this.props.formName, this.props.name, value);
        }
    }
    public onBlur(e: React.FocusEvent<HTMLInputElement>) {
        if (this.props.onBlur) {
            this.props.onBlur(e);
        }
    }
    public ConvertToString(value?: any, objectName?: string): string {
        let message = null;
        if (value == null) {
            return null;
        }
        switch ((typeof value).toString()) {
            case 'string[]':
                message = (value as string[]).join(', ');
                break;
            case 'object':
                message = (value as object)[objectName ? objectName : 0];
                break;
            case 'function':
                message = this.ConvertToString(value());
                break;
            case 'string':
                message = value;
                break;
        }
        return message;
    }
    public format(value: string, ...items: string[]) {
        let tempValue = value;
        if (tempValue == null) {
            return null;
        }
        items.forEach((item, index) => {
            tempValue = tempValue.replace(`{${index}}`, item);
        });
        return tempValue;
    }
    public getCurrentValue() {
        const { form, formName, name } = this.props;
        return form && form[formName] && form[formName][name] ? form[formName][name] : '';
    }
    public componentDidMout() {
        this.setValue(this.props.defaultValue);
    }
    public render() {
        const {
            children,
            name,
            label,
            required,
            error,
            success,
            helperText,
            pattern,
            type,
            clientValidate,
            formName,
            classNames,
        } = this.props;
        const {
            generatedId,
        } = this.state;
        const value = this.getCurrentValue();
        const generatedPattern = pattern && clientValidate
            ? pattern
            : patterns[name] && clientValidate
                ? patterns[name]
                : null;
        const formError = formName ? getFormError(this.props.form[formName])[name] : '';
        const errorMessage = formError ? formError : generatedPattern ? generatedPattern.message : this.format(this.ConvertToString(error, name), label, value);
        const successMessage = this.format(this.ConvertToString(success, name), label, value);
        return type === 'hidden'
            ? (<input
                id={generatedId}
                name={name}
                value={value}
                type={type ? type : 'text'}
                className={classnames('validate', {
                    invalid: errorMessage,
                    valid: successMessage,
                })}
                required={required}
                pattern={generatedPattern ? generatedPattern.value : null}
                onChange={e => this.onChange(e)}
                onBlur={e => this.onBlur(e)}
            />)
            : (
                <div className={classnames('input-field col', { 's12': !classNames }, classNames)}>
                    <input
                        id={generatedId}
                        name={name}
                        value={value}
                        type={type ? type : 'text'}
                        className={classnames('validate', {
                            invalid: errorMessage,
                            valid: successMessage,
                        })}
                        required={required}
                        pattern={generatedPattern ? generatedPattern.value : null}
                        onChange={e => this.onChange(e)}
                        onBlur={e => this.onBlur(e)}
                    />
                    <label htmlFor={generatedId}>{label}</label>
                    <span className="helper-text"
                        data-error={errorMessage}
                        data-success={successMessage}>{helperText}</span>
                    {children}
                </div>
            );
    }
}
