import * as React from 'react';
import Modal from 'shared/modal';
import Input from 'shared/Form/Input';

export default class CreatePage extends React.Component {
    public render() {
        return (
            <form method="post">
                <Modal
                    id="create-page-modal"
                    header="Create - New Page"
                    footerCloseText="Cancel"
                    options={{ dismissible: false }}
                    footer={(<button type="submit" className="btn waves-effect waves-green">Submit</button>)}
                >
                    <Input
                        formName="CreatePage"
                        label="Title"
                        name="title"
                        type="text"
                        clientValidate={false}
                        required
                    />
                    <Input
                        formName="CreatePage"
                        label="Description"
                        name="description"
                        type="text"
                        clientValidate={false}
                        required
                    />
                    <Input
                        formName="CreatePage"
                        label="Keywords"
                        name="keywords"
                        type="text"
                        clientValidate={false}
                        required
                    />
                </Modal>
            </form>
        );
    }
}

