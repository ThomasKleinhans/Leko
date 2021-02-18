<template>
	<section class="project-details LayoutTwo-vertical LayoutTwo-dark">

		<div class="LayoutTwo-text LayoutTwo-size50 text-paraph">
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
		<div class="LayoutTwo-text LayoutTwo-size50 buttons">
            <header class="bottom-buttons">
                <div @click="copyPage()" class="big-button">
                    share
                </div>
                <div @click="goUp()" class="big-button">
                    <svg width="18px" height="30px" viewBox="0 0 18 30" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                        <g id="Page-projet" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                            <g id="1440/1440_LEKO_PROJECT-05" transform="translate(-1201.000000, -3827.000000)" fill="#111111" fill-rule="nonzero">
                                <g id="Group" transform="translate(580.000000, 3372.000000)">
                                    <g id="Group-10" transform="translate(490.000000, 330.000000)">
                                        <polygon id="→" transform="translate(139.840000, 139.840000) rotate(-90.000000) translate(-139.840000, -139.840000) " points="146.8 148.68 154.68 139.84 146.8 131 145.32 132.4 151.16 138.72 125 138.8 125 141 151.16 140.92 145.32 147.28"></polygon>
                                    </g>
                                </g>
                            </g>
                        </g>
                    </svg>
                </div>
            </header>
		</div>
        <div class="clipboard" id="clipboard">
            <svg width="12px" height="9px" viewBox="0 0 12 9" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <title>Stroke 1544</title>
                <g id="Specs-ℹ️" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                    <g id="1440_Détails_04" transform="translate(-1181.000000, -492.000000)" fill="#FFFFFF" fill-rule="nonzero">
                        <g id="Group-8" transform="translate(1105.000000, 410.000000)">
                            <g id="Group-2" transform="translate(0.000000, 71.000000)">
                                <g id="Group" transform="translate(65.000000, 0.000000)">
                                    <polygon id="Stroke-1544" points="21.3399231 11.2488019 22.6600769 12.7511981 15.1718397 19.3311034 11.340056 15.96532 12.659944 14.4626905 15.171 16.668"></polygon>
                                </g>
                            </g>
                        </g>
                    </g>
                </g>
            </svg>
            copied to clipboard
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
                let clipboard = document.getElementById('clipboard')
                clipboard.classList.add('active')
                setTimeout(function(){
                    clipboard.classList.remove('active')
                }, 2000);
            }
        }

	}
</script>

<style lang="scss" scoped>
.project-details{

    .clipboard{
        opacity: 0;
        position: absolute;
        background: #111111;
        color: white;
        padding: 5px 10px;
        border-radius: 3px;
        left: 50%;
        bottom: 10%;
        transform: translateX(-50%);

        &.active{
            animation: fadeIn 0.5s linear forwards;
        }
    }
    background: white;
    color: #111111;

    h3{
        color: #111111;
    }
    p{
        color: #AAAAAA;
        width: 200px;
        margin-bottom: 20px;
    }

    .text-paraph{
        max-width: 300px;
        padding: 0;    
        margin: 20vh 4.8vw;
    }

    .buttons{
        width: 100%;
        display: flex;
        justify-content: flex-end;
        align-items: flex-end;
        margin: 40px;
        height: 100%;
        padding: 0;
    }

    .bottom-buttons{
        margin-bottom: 40px;
        display: flex;
        justify-content: flex-end;
        align-items: flex-end;
        flex-direction: column; 
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
        transition: 0.2s;
        background: #FFFFFF;

        &:hover{
            background: #F4F4F4;
        }
    }
    @media screen and (max-width: 990px) {
        
        .text-paraph{
            max-width: 200px;
            padding: 0;    
            margin: 20vh 4.8vw;
        }

        .buttons{
            width: calc(50vw - 200px);
        }

    }

    @media screen and (max-width: 768px) {
        
        .text-paraph{
            max-width: 150px;
            padding: 0;    
            margin: 20vh 4.8vw;
        }

        .buttons{
            width: calc(50vw);
        }
        
        .big-button{
            height: 250px;
            width: 250px;
        }

    }
    @media screen and (max-width: 430px) {
        
        .fp-tableCell{
            display: flex;
            flex-direction: row;

            .LayoutTwo-size50{
                &.text-paraph{ 
                    height: 70%;
                    justify-content: center;
                    align-items: flex-start;
                    padding-top: 10px;
                }
                width: 100%;
                height: 30%;
                max-width: none;
                display: flex;
                margin: 0;
                justify-content: center;
                align-items: flex-end;
                .bottom-buttons{
                    margin: 0px;
                    justify-content: space-between;
                    width: 50%;
                    align-items: center;
                    flex-direction: row;
                }
                .big-button{
                    width: 70px;
                    height: 70px;
                    font-size: 20px;
                }
            }
        }

    }
}
</style>