import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './pages/App';
import theme from './pages/theme';

import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';

const render = () => {
    const container = document.getElementById('App');
    const root = ReactDOM.createRoot(container); // createRoot(container!) if you use TypeScript
    root.render(
        <ThemeProvider theme={theme}>
            {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
            <CssBaseline />
            <App />
        </ThemeProvider>);
}

render();
if (module.hot) {
    module.hot.accept(render);
}