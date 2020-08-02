import Vue from 'vue'
import VueMeta from 'vue-meta'

Vue.use(VueMeta, {
  keyName: 'head',
  refreshOnceOnNavigation: true,
  ssrAttribute: 'data-vue-meta-server-rendered'
})
