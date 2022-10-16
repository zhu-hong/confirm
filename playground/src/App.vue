<script>
import { useConfirm } from '../../src'
export default {
  methods: {
    useConfirm,
  },
}
</script>

<template>
  <main class="w-screen h-screen flex justify-center items-center">
    <button @click="useConfirm({ isDanger: true })">哔哔哔</button>
  </main>
</template>
