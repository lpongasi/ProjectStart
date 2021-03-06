﻿import * as React from 'react';
import { postPageData, postPageDataActionId } from 'shared/AppModels/PageDataController';
import { IPageDataEntity } from 'shared/AppModels/PageDataEntity';
import {
    Connector,
    FormInputs,
} from 'shared/Component/common';
import { Form } from 'shared/Form/Common';
import Input from 'shared/Form/Input';
import { ModalClose } from 'shared/modal';
import Modal from 'shared/modal';

type Props = {
    createPageForm?: IPageDataEntity;
    createPageModal?: any;
};

@Connector<any, Props, any>(state => ({
    createPageForm: FormInputs<IPageDataEntity>(state.form[postPageDataActionId]),
    createPageModal: state.form['create-page-modal'],
}))
export default class CreatePage extends React.Component<Props, any> {
    public form: Form;
    constructor(props) {
        super(props);
        this.form =
            Form
                .createFrom(postPageDataActionId)
                .addInputs([
                    {
                        name: 'name',
                        label: 'Name',
                    },
                    {
                        name: 'title',
                        label: 'Title',
                    },
                    {
                        name: 'description',
                        label: 'Description',
                    },
                    {
                        name: 'keywords',
                        label: 'Keywords',
                    },
                ]);
        this.formSubmit = this.formSubmit.bind(this);

    }
    public formSubmit(e) {
        e.preventDefault();
        postPageData(this.props.createPageForm).then(response => {
            if (response.success) {
                ModalClose('create-page-modal', {});
            }
        });
    }
    public render() {
        const form = this.form;
        const parentData = this.props.createPageModal as IPageDataEntity;
        return (
            <form method="post" id={form.id} onSubmit={this.formSubmit}>
                <Modal
                    id="create-page-modal"
                    header="Create - New Page"
                    footerCloseText="Cancel"
                    options={{ dismissible: false }}
                    footer={(<button type="submit" className="btn waves-effect waves-green">Create</button>)}
                >
                    {parentData && parentData.name && (<h4>New sub page for {parentData.name}</h4>)}
                    <div className="row">
                        {form.inputs.map(item => (
                            <Input key={item.id} {...item} />
                        ))}
                    </div>
                </Modal>
            </form>
        );
    }
}
