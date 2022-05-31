<script setup lang="ts">
import { useRouter } from 'vue-router'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import en from 'element-plus/es/locale/lang/en'
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
const router = useRouter()
const locale = ref(zhCn)
const { t, locale: localeLanguage } = useI18n()
console.log(t)
function changeLang(lang:any) {
  console.log(lang)
  locale.value = lang
  localeLanguage.value = lang.name
}
</script>

<template>
  <el-config-provider :locale="locale">
    <el-button type="primary">{{t('message.home')}}</el-button>
    <el-button @click="changeLang(zhCn)">中文</el-button>
    <el-button @click="changeLang(en)">英文</el-button>
    <button @click="()=>{router.push({path:'/home'})}">首页按钮</button>
    <button @click="()=>{router.push({name:'mine'})}">我的按钮</button>
    <router-view></router-view>
  </el-config-provider>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
