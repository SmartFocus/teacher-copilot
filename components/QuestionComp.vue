<template>
    <div class="question-wrapper">
        <el-input v-model="textarea" :row="4" type="textarea" placeholder="请输入题目"></el-input>
    </div>
</template>

<script setup>
import {ref} from 'vue';
const textarea = ref('');

// 获取props，读取里面的value
const props = defineProps({
    value: String
})

// 赋值给textarea
textarea.value = props.value;

// 获取emit
const emit = defineEmits(['update']);

// 监听textarea的变化，触发emit
watch(textarea, (val) => {
    emit('update', val);
})






</script>
