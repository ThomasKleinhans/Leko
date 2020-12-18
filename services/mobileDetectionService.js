export default () => {
	if(process.client) {
		return 'ontouchstart' in document.documentElement;
	}
}
