import { SALEOR_API_URL, SALEOR_API_TOKEN } from '$env/static/public';

/// <references types="houdini-svelte">

/** @type {import('houdini').ConfigFile} */
const config = {
	schemaPath: './schema.graphql', // local schema file
	sourceGlob: 'src/**/*.{svelte,ts,js}', // source files
	watchSchema: {
		url: SALEOR_API_URL
	},
	apiUrl: SALEOR_API_URL,
	runtimeDir: '.houdini',
	plugins: {
		'houdini-svelte': {}
	},
	headers: {
		Authorization: `Bearer ${SALEOR_API_TOKEN}`
	}
};

export default config;
