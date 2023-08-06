<template>
    <div class="user-prompt">
        <QuestionComp class="mb-4" />
        <StudentAnswer class="mb-4"/>
        <div class="submit text-right">
            <el-button type="primary" @click="hnadleSubmit">提交</el-button>
        </div>
    </div>
</template>

<!-- script setup -->
<script setup>
import { useLLM } from '~/hooks/useLLM';
const handleSubmit = () => {
    console.log('submit');
}
</script>

<style lang="scss" scoped>
</style>