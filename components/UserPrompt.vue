<template>
    <div class="user-prompt">
        <QuestionComp :value="question" @update="handleUpdateQuestion"  class="mb-4" />
        <StudentAnswer :value="studentAnswer"  @update="handleUpdateStudentAnswer" class="mb-4"/>
        <div class="submit text-right">
            <el-button type="primary" @click="handleSubmit">提交</el-button>
        </div>
    </div>
</template>

<!-- script setup -->
<script setup>
import { useLLM } from '~/hooks/useLLM';
import { systemPrompt } from '../config'
import { ref } from 'vue';
const question = ref('');
const studentAnswer = ref('');
const handleUpdateQuestion = (val) => {
    question.value = val;
}

const handleUpdateStudentAnswer = (val) => {
    studentAnswer.value = val;
}

const responseText = ref('');
const emit = defineEmits(['getResponse']);

// 获取props中的clearAnswer
const props = defineProps({
    clearAnswer: Function
})


const handleSubmit = async () => {
    // clearAnswer();
    props.clearAnswer && props.clearAnswer();

    const messages = [];
    if(question.value.length === 0){
        return
    }
    if(studentAnswer.value.length === 0){
        return
    }

    messages.push({
        role: 'system',
        content: systemPrompt
    })

    // LLM输入为messages
    messages.push({
        role: 'user',
        content: `%question ${question.value}`
    })

    messages.push({
        role: 'user',
        content:`%answer ${studentAnswer.value}` 
    })

    const { body } = await fetch('/api/fetchLLM', {
        method: 'POST',
        body: JSON.stringify({
            messages
        })
    });


    useLLM({
        onChunk: (val)=>{
            responseText.value += val.data;
            emit('getResponse', responseText.value);
        },
        onReady: (val)=>{
        },
        stream: body
    });

}
</script>

<style lang="scss" scoped>
</style>