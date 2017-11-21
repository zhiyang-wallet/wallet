<template>
    <button
        class="ryt-button"
        :type="nativeType"
        :disabled = "disabled"
        :class="[
            type ? 'ryt-button-' + type : '',
            size ? 'ryt-button-' + size : '',
            {
                'is-disabled': disabled,
                'is-loading': loading,
                'is-round': round
            }
        ]"
    >
    <i class="ryt-icon-loading" v-if="loading" @click="handleInnerClick"></i>
    <i :class="icon" v-if="icon && !loading" @click="handleInnerClick"></i>
    <span v-if="$slots.default" @click="handleInnerClick"><slot></slot></span>
    </button>
</template>
<script>
    export default {
        props: {
            nativeType: {
                type: String,
                default: 'button'
            },
            type: {
                type: String,
                default: 'default'
            },
            size: {
                type: String,
                default: ''
            },
            icon:{
                type: String,
                default:''
            },
            disabled: Boolean,
            loading: Boolean,
            round: Boolean
           
        },
        methods: {
            handleInnerClick(evt) {
                if (this.disabled) {
                    evt.stopPropagation();
                }
            }
        }
    }
</script>
<style lang="scss" rel="stylesheet/scss">
    @import "../../style/packages.scss";
</style>