<template>
    <div class="icon-tip">
        <div class="tip-box">{{tip}}</div>
    </div>
</template>

<script>
    export default {
        name: "icon-tip",
        props:{
            tip:{
                type:String,
                default:''
            }
        }
    }
</script>

<style scoped lang="less">
    .icon-tip{
        display: inline-block;
        margin-right: 10px;
        margin-top: 10px;
        .tip-box{
            display: inline-block;
            font-size: 18px;
            line-height: 1em;
            background-color: rgba(62,175,124,0.6);
            color: #ffffff;
            padding: 5px 10px;
            border-radius: 4px;

        }
    }
</style>