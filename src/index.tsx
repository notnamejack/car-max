import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './app';
import './normalize.css';
import './styles.css';
import { HashRouter } from 'react-router-dom';

const domNode = document.getElementById('root') as HTMLDivElement;
const root = createRoot(domNode);
root.render(
	<StrictMode>
		<HashRouter>
			<App />
		</HashRouter>
	</StrictMode>
);
