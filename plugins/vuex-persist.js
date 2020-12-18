import VuexPersistence from 'vuex-persist'

export default ({ store, route }) => {
  window.onNuxtReady(() => {

  	let page = route.name

  	if (page == 'careers') {
	    new VuexPersistence({
	    	key: 'careers',
	    	storage: sessionStorage,
	    	reducer: (state) => ({careers: state.careers})
	    }).plugin(store);
  	}

  	if (page == 'team') {
			new VuexPersistence({
	    	key: 'team',
	    	storage: sessionStorage,
	    	reducer: (state) => ({team: state.team})
	    }).plugin(store);
		}

  });

}
