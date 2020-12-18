<template>
  <client-only>
  <mailchimp-subscribe
    url="https://lekolabs.us10.list-manage.com/subscribe/post-json"
    user-id="d8cc1aa4fe3affefec46eba91"
    list-id="8284aa85c3"
  >
    <template v-slot="{ subscribe, setEmail, error, success, loading }">
      <form class="SubscribeForm" :class="{'has-error' : error, 'is-loading': loading}" @submit.prevent="subscribe">
      	<label class="SubscribeForm-label Paragraph Paragraph--smaller">Stay up to date on all the Leko news !</label>
      	<div class="SubscribeForm-fields">
      		<input type="email" pattern="[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+.[a-zA-Z.]{2,15}" class="SubscribeForm-input" placeholder="Email" @input="setEmail($event.target.value)" />
      		<button type="submit" class="SubscribeForm-submit"><span class="u-relative">Subscribe</span></button>
      		<span class="SubscribeForm-status"></span>
          <transition><div class="SubscribeForm-feedback SubscribeForm-feedback--error" v-if="error" v-html="error"></div></transition>
          <transition><div class="SubscribeForm-feedback SubscribeForm-feedback--success" v-if="success">Thank you for your submission!</div></transition>
      	</div>
      </form>
    </template>
  </mailchimp-subscribe>
</client-only>
</template>
