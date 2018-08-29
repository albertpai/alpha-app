import React from 'react';
import './FAQ.less';

export default class FAQ extends React.Component {
    render() {
        return (
            <div className="container-faq">
                <h2 className="flex-item-faq-title">FAQ</h2>
                <div className="flex-item-faq-text">
                    <p>
                        1) How to visit the site?
                    <br />
                        You can visit us at this address:
                        Many Hands London, 100 Clements Road, London SE16 4DG
                    </p>
                    <p>
                        2) How to contact Many Hands London?
                    <br />
                        Email: info@manyhandslondon.co.uk
                        Phone: 0207 101 4669
                    </p>
                    <p>
                        3) Who is Many Hands London?
                    <br />
                        Many Hands is part of the <a href="https://www.shapescollective.com/">Shapes Collective</a>.
                    </p>
                </div>
            </div>
        );
    }
}