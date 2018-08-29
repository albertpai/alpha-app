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
                    Contact info: 
                                Many Hands London
            
                                Visit Us!
                                100 Clements Road
                                London SE16 4DG
            
                                Contact:
                                info@manyhandslondon.co.uk
                                0207 101 4669
            
                                First Name:
                                Last Name:
                                Email Address:
                                Password:
            
                                +++Sign Up+++         ==>JOIN<==
                                
                                
                                Many Hands is part of the Shapes Collective.
                                www.shapescollective.com
                </div>
            </div>
        );
    }
}
