import App from './App.svelte';
import {getSearchParams} from './utils'

const params = getSearchParams()

var app = new App({
	target: document.body,
	props: {
		page: params.page || 0
	}
});

export default app;