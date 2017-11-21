<template>
    <label
        class="ryt-checkbox"
        :class="{
            'is-disabled': isDisabled,
            'is-checked': isChecked
        }"
        role="checkbox"
    >
        <span class="ryt-checkbox_input"
            :class="{
                'is-disabled': isDisabled,
                'is-checked': isChecked
            }"
        >
            <span class="ryt-checkbox_inner"></span>
            <input
                class="ryt-checkbox_original"
                type="checkbox"
                :name="name"
                :disabled="isDisabled"
                v-model="model"
            >
        </span>
        <span 
            class="el-checkbox_label"
            v-if="$solots.default"
        >
            <slot></slot>
        </span>
    </label>
</template>
<script>
    export default{
        props: {
            isDisabled: Boolean,
            isChecked: Boolean,
            name: {
                type: String,
                default: ''
            },
            
        }
    };
</script>