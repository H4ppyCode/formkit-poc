<script setup>
import Button from '@/components/button/Button.vue'
import FormkitCustomSecond from "~/components/formkit-custom2/formkit-custom-second.vue";
</script>

<template>
  <FormKit type="form">
    <FormKit type="hello" />
    <Button class="text-black">Click me</Button>
  </FormKit>
    <formkit-custom-second />
</template>