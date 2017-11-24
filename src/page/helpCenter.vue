<template>
    <div class="help-center">
        <ryt-header :title="headerTitle" :backUrl="backUrl"></ryt-header>
        <div class="main">
            <div class="center-msg">
                <h4>1.什么是智阳钱包？</h4>
                <p>智阳钱包是智阳网络技术（上海）有限公司与兴业银行于合作，由兴业银行推出的一款余额理财工具，除了具备与其他余额理财产品相似的“7×24小时交易”、“T+0赎回到账”等特性外，“掌柜钱包”还具备“1分钱起购”、“当日申购无上限”、“具备目前业内最高当日赎回额度3000万元”和“赎回资金瞬间到账等独特创新特点。</p>
                <h4>2.怎么给钱包存钱？</h4>
                <p>用户需要在智阳平台注册并绑定银行卡，只能选择一个银行账户与智阳钱包进行关联。可以关联银行卡与智阳钱包之间进行资金转账，保证安全！</p>
                <h4>3.什么时候开始赚钱？</h4>
                <p>周一至周四15点前转入，算当日买入，第二个工作日就有收益了，再过一天你的收益就显示在钱包里了。 最失误的做法：周末不是交易日，所以周五15点至周日24点转入，与下周一15点前买入是一样的哦。</p>
                <h4>4.收益怎么算？</h4>
                <p>当日收益=（钱包确认资金/10000）×每万份收益。假设您的已确认资金为9000元，当天的每万份收益为1.30元， 代入公式计算，您当日的收益为：1.17元。</p>
                <h4>5.提问：什么时候能看到我赚的钱啊？</h4>
                <p>回答：</p>
            </div>
        </div>
    </div>
</template>
<script>
    import header from '../components/header/header'
  import { Toast } from 'mint-ui';
    export default {
        components: {
            'ryt-header': header 
        },
        data() {
            return { 
                backUrl: '/',
                headerTitle:'帮助中心'
            };
        },
        methods: {
        }
    };
</script>