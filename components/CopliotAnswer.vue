<template>
  <div :class="['mt-3 rounded', text.length > 0 && 'border']">
      <MdPreview v-model="text"  />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { MdEditor,MdPreview } from 'md-editor-v3';
import 'md-editor-v3/lib/style.css';
const text = ref('');


// 暴露更新text的方法， 可以通过ref调用
const updateText = (val) => {
    text.value = val;
} 

const clearText = () => {
    text.value = '';
}

// 给父组件暴露updateText
defineExpose({
    updateText,
    clearText
})

</script>