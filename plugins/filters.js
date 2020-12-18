import Vue from 'vue'

Vue.filter('nl2br', value => {
	if (!value) return ''
	value = value.replace(/\n/g, '<br />');
	return value;
})

Vue.filter('nl2li', value => {
	if (!value) return ''
	value = value.replace(/- /g, '<li>').replace(/\n/g, '</li>');
	return value;
})
