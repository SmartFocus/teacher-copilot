<template>
    <div class="main-wrapper">
        <UserPrompt @getResponse="updateText" :clearAnswer="clearText"/>
        <CopliotAnswer ref="copliot"/>
    </div>
</template>

<script setup>
// 更新CopliotAnswer 中text的方法为updateText
import { ref, onMounted } from 'vue';

// 获取CopliotAnswer组件的ref
const copliot = ref(null);

// 封装更新CopliotAnswer 中text的方法为updateText
const updateText = (val) => {
    copliot.value.updateText(val);
}

const clearText = () => {
    copliot.value.clearText();
}

</script>

<style lang="scss" scoped>
.main-wrapper{
    padding: 20px;
}
</style>