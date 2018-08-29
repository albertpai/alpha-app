import React from 'react';
import './Contact.less';
import * as typeformEmbed from '@typeform/embed';

export default class Contact extends React.Component {

    constructor(props) {
        super(props);
        this.element = null;
    }

    componentDidMount() {
        if (this.element) {
            typeformEmbed.makeWidget(this.element, "https://adam1238.typeform.com/to/Mw8MZU", {
                hideHeaders: true,
                hideFooter: true,
                opacity: 50
            });
        }
    }

    render() {
        return (
            <div className="container-contact">
                <div className="flex-item-contact">

                </div>
            </div>
        );
    }
}
