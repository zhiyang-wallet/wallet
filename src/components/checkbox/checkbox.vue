<template>
    <a class="mint-cell ryt-checkbox">
        <div class="mint-cell-left"></div> 
        <div class="mint-cell-wrapper">
            <div class="mint-cell-title">
                <label class="mint-checklist-label">
                    <span class="mint-checkbox">
                        <input type="checkbox" class="mint-checkbox-input" :value="options"> 
                        <span class="mint-checkbox-core"></span>
                    </span>
                    <span class="mint-checkbox-label">{{options}}</span>
                </label>
            </div> 
            <div class="mint-cell-value"><span></span></div>
        </div>
        <div class="mint-cell-right"></div>
    </a>
</template>
<script>
    export default{
        props: {
            options: {
                type: String
            }
        }
    }
</script>