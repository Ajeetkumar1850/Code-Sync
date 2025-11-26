import React from 'react';
import modal from './modal';
// main fun
function App() {
    const [show , setShow] = React.useState(false);
    return (
        <div>
            <h2>React portal example</h2>

            <button onClick={() => setShow(true)}>open Modal</button>
            <modal>
            {show ({
                title: 'My Modal',
                content: 'This is the content of the modal.',
                onClose: () => setShow(false)
            })}
            </modal>
        </div>
    );
}