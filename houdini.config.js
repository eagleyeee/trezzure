/// <references types="houdini-svelte">

/** @type {import('houdini').ConfigFile} */
const config = {
	watchSchema: {
		url: 'https://trezzure.eu.saleor.cloud/graphql/'
	},
	runtimeDir: '.houdini',
	plugins: {
		'houdini-svelte': {}
	}
};

export default config;
