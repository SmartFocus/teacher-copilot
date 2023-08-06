<template>
    <div class="question-wrapper">
        <!--el textarea -->
        <el-input v-model="textarea" :row="4" type="textarea" placeholder="请输入题目"></el-input>
    </div>
</template>

<script setup>
import {ref} from 'vue';
const textarea = ref('');

// get props
const props = defineProps({
    msg: String
})


</script>
