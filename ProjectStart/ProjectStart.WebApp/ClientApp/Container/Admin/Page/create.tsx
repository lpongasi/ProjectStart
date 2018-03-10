import * as React from 'react';
import { connect } from 'react-redux';
import Modal from 'shared/modal';
import Input from 'shared/Form/Input';
import { getFormData } from 'shared/Component/common';
import { postPageData, postPageDataActions } from 'shared/AppModels/PageDataController';

class CreatePage extends React.Component {
    constructor(props) {
        super(props);
        this.formSubmit = this.formSubmit.bind(this);
    }
    public formSubmit(e) {
        e.preventDefault();
        postPageData(this.props.createPageForm);
    }
    public render() {
        return (
            <form method="post" onSubmit={this.formSubmit}>
                <Modal
                    id="create-page-modal"
                    header="Create - New Page"
                    footerCloseText="Cancel"
                    options={{ dismissible: false }}
                    footer={(<button type="submit" className="btn waves-effect waves-green">Submit</button>)}
                >
                    <Input
                        formName={postPageDataActions.id}
                        label="Name"
                        name="name"
                        type="text"
                        clientValidate={false}
                    />
                    <Input
                        formName={postPageDataActions.id}
                        label="Title"
                        name="title"
                        type="text"
                        clientValidate={false}
                    />
                    <Input
                        formName={postPageDataActions.id}
                        label="Description"
                        name="description"
                        type="text"
                        clientValidate={false}
                    />
                    <Input
                        formName={postPageDataActions.id}
                        label="Keywords"
                        name="keywords"
                        type="text"
                        clientValidate={false}
                    />
                    <Input
                        formName={postPageDataActions.id}
                        label="Name Url"
                        name="nameUrl"
                        type="text"
                        clientValidate={false}
                    />
                    <Input
                        formName={postPageDataActions.id}
                        label="Parent Url"
                        name="parentUrl"
                        type="text"
                        clientValidate={false}
                    />
                </Modal>
            </form>
        );
    }
}

export default connect(state => ({
    createPageForm: state.form[postPageDataActions.id],
}))(CreatePage);
