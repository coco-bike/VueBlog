<template>
    <Editor v-on:contentChange="contentEvent"></Editor>
</template>
<script>
import Editor from "./../components/Editor.vue"

export default {
    components:{
        Editor
    },
    data() {
        return {
            content:""
        }
    },
    methods: {
        contentEvent:function(data){
            this.$emit("contentChange",data);
        }
    },

}
</script>
