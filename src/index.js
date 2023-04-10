import React from 'react';
import ReactDOM from 'react-dom/client';

//Components
import App from './components/App/App';

//Style
import './styles/global.scss';

//Redux
import { store } from './features/store';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>
);
