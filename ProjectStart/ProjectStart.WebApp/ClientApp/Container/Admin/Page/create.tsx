﻿import * as React from 'react';
import { connect } from 'react-redux';
import Modal from 'shared/modal';
import Input from 'shared/Form/Input';
import { Form } from 'shared/Form/Common';
import { postPageData, postPageDataActionId } from 'shared/AppModels/PageDataController';


class CreatePage extends React.Component {
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
                    {
                        type: 'hidden',
                        name: 'parentId',
                    },
                ]);
        this.formSubmit = this.formSubmit.bind(this);

    }
    public formSubmit(e) {
        e.preventDefault();
        postPageData(this.props.createPageForm).then(response => {
            if (response.success) {
                var elem = document.getElementById('create-page-modal');
                var instance = M.Modal.getInstance(elem);
                instance.close();
            }
        });
    }
    public render() {
        const form = this.form;
        return (
            <form method="post" id={form.id} onSubmit={this.formSubmit}>
                <Modal
                    id="create-page-modal"
                    header="Create - New Page"
                    footerCloseText="Cancel"
                    options={{ dismissible: false }}
                    footer={(<button type="submit" className="btn waves-effect waves-green">Create</button>)}
                >
                    <div className="row">
                        {form.inputs.map(item => (
                            <Input
                                key={item.id}
                                formName={form.id}
                                label={item.label}
                                name={item.name}
                                type={item.type}
                                defaultValue={item.value}
                                classNames={item.classNames}
                            />
                        ))}
                    </div>
                </Modal>
            </form>
        );
    }
}

export default connect(state => ({
    createPageForm: state.form[postPageDataActionId],
}))(CreatePage);
