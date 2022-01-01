import React from 'react';
import ReactDOM from 'react-dom';
import { SpeechProvider } from '@speechly/react-client';

import {Provider} from './context/context';
import App from './App';
import './index.css';

ReactDOM.render(
    <SpeechProvider appId="7e67cd5e-cfb6-404a-a0e5-48e08c51030d" language="en-US">
        <Provider>
        <App />
        </Provider>
    </SpeechProvider> , 
    document.getElementById('root')
);