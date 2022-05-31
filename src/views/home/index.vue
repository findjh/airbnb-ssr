<template>
   <div class="text">首页内容</div>
   <el-date-picker v-model="value1" type="date" placeholder="Pick a day" />
</template>
<script setup lang='ts'>
import { getRoomList } from '@/api'
import { ref } from 'vue'
async function getRooms() {
  const data = await getRoomList()
  console.log(data)
}
const value1 = ref('')
getRooms()
</script>
<style lang="scss" scoped>
@import "@/assets/scss/home/index.scss";
</style>
