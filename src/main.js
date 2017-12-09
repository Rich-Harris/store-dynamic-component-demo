import App from './App.html';
import Foo from './Foo.html';
import Bar from './Bar.html';
import { Store } from 'svelte/store.js';
import useLocalStorage from './useLocalStorage.js';

const components = { Foo, Bar };

const store = new Store({
	type: 'Foo'
});

store.compute('thing', ['type'], type => {
	return components[type];
})

window.store = store;

// save data to localStorage every time our state changes
useLocalStorage(store, 'my-app');

const app = new App({
	target: document.body,
	store
});

export default app;