<template>
    <div class='buttons'>
        <h3>按钮</h3>
        <div class="mar">
            <p>基础按钮：</p>
            <ryt-button>默认按钮</ryt-button>
            <ryt-button type="primary">主要按钮</ryt-button>
            <ryt-button type="success">成功按钮</ryt-button>
            <ryt-button type="warning">警告按钮</ryt-button>
            <ryt-button type="danger">危险按钮</ryt-button>
        </div>
        <div class="mar">
            <p>圆角按钮：</p>
            <ryt-button round>默认按钮</ryt-button>
            <ryt-button type="primary" round>主要按钮</ryt-button>
            <ryt-button type="success" round>成功按钮</ryt-button>
            <ryt-button type="warning" round>警告按钮</ryt-button>
            <ryt-button type="danger" round>危险按钮</ryt-button>
        </div>
        <div class="mar">
            <p>按钮尺寸：</p>
            <ryt-button type="primary">默认按钮</ryt-button>
            <ryt-button type="primary" size="medium">中等按钮</ryt-button>
            <ryt-button type="primary" size="small">小型按钮</ryt-button>
            <ryt-button type="primary" size="mini">迷你按钮</ryt-button>
        </div>
        <div class="mar">
            <p>图标按钮</p>
            <ryt-button type="primary" icon="ryt-icon-edit">编辑</ryt-button>
            <ryt-button type="primary" icon="ryt-icon-edit"></ryt-button>
            <ryt-button type="primary">编辑<i class="ryt-icon-edit ryt-icon-right"></i></ryt-button>
        </div>
        <div class="mar">
            <p>禁用按钮</p>
            <ryt-button :disabled="true" >禁用</ryt-button>
            <ryt-button :disabled="true" type="primary">禁用</ryt-button>
            <ryt-button :disabled="true" type="success">禁用</ryt-button>
            <ryt-button :disabled="true" type="warning">禁用</ryt-button>
            <ryt-button :disabled="true" type="danger">禁用</ryt-button>
            
        </div>
        <div class="mar">
            <p>加载按钮</p>
            <ryt-button :loading="true">加载</ryt-button>
        </div>
        <div class="mar">
            <p>按钮组</p>
            <ryt-button-group>
                <ryt-button type="primary" icon="ryt-icon-edit">编辑</ryt-button>
                <ryt-button type="primary" icon="ryt-icon-edit"></ryt-button>
                <ryt-button type="primary">编辑<i class="ryt-icon-edit ryt-icon-right"></i></ryt-button>
            </ryt-button-group>
        </div>
    </div>
</template>
<script>
    import rytButton from '../button/button.vue';
    import rytButtonGroup from '../button/button-group.vue';
    export default {
        components: {
            'ryt-button': rytButton,
            'ryt-button-group': rytButtonGroup
        }
    };
</script>
<style lang="scss" rel="stylesheet/scss">
.buttons{
    margin-top: 20px;
    p{
        margin-bottom: 10px;
    }
    .mar{
        margin:10px 0;
    }
}
</style>
