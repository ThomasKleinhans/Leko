<template>
	<section class="project-details LayoutTwo-vertical LayoutTwo-dark">

		<div class="LayoutTwo-text LayoutTwo-size50">
            <header>
                <div v-for="(item, index) in infos" :key="item.nodeType+index">
                    <h3 v-if="item.nodeType == 'heading-3'">
                        {{item.content[0].value}}
                    </h3>
                    <p v-else>
                        {{item.content[0].value}}
                    </p>
                </div>
            </header>
		</div>
		<div class="LayoutTwo-text LayoutTwo-size50">
            <header class="bottom-buttons">
                <div @click="copyPage()" class="big-button">
                    share
                </div>
                <div @click="goUp()" class="big-button">
                    ^
                </div>
            </header>
		</div>

	</section>

</template>

<script>
	export default {

		props: {
            infos: Array,
            projectId: String
        },
        methods:{
            goUp(){
			    history.replaceState({}, document.title, window.location.href.split('#')[0]);
			    history.replaceState({}, document.title, window.location.href = window.location.href + '#Hero');
            },
            copyPage(){
                const el = document.createElement('textarea');
                el.value = window.location.hostname+"/projects?id="+this.projectId;
                document.body.appendChild(el);
                el.select();
                document.execCommand('copy');
                document.body.removeChild(el);
            }
        }

	}
</script>

<style lang="scss" scoped>
.project-details{
    
    background: white;
    color: #111211;

    h3{
        color: #111111;
    }
    p{
        color: #AAAAAA;
        width: 200px;
        margin-bottom: 20px;
    }

    .big-button{
        height: 280px;
        width: 280px;
        border-radius: 999%;
        border: 2px solid #F4F4F4;
        margin-bottom: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 40px;
        cursor: pointer;
    }
}
</style>