<template>
    <div class="choose-bank">
        <ryt-header :title="headerTitle" :backUrl="backUrl"></ryt-header>
        <div class="main">
            <mt-search autofocus v-model="value" placeholder="请输入关键字" :result="filterResult"></mt-search>
            <mt-index-list>
                <mt-index-section v-for="item in alphabet" :index="item.initial" >
                <mt-cell v-for="cell in item.cells" :title="cell"></mt-cell>
                </mt-index-section>
            </mt-index-list>
        </div>
    </div>
</template>
<script>
  import header from '../components/header/header'
    const NAMES = ['Aaron', 'Alden', 'Austin', 'Baldwin', 'Braden', 'Carl', 'Chandler', 'Clyde', 'David', 'Edgar', 'Elton', 'Floyd', 'Freeman', 'Gavin', 'Hector', 'Henry', 'Ian', 'Jason', 'Joshua', 'Kane', 'Lambert', 'Matthew', 'Morgan', 'Neville', 'Oliver', 'Oscar', 'Perry', 'Quinn', 'Ramsey', 'Scott', 'Seth', 'Spencer', 'Timothy', 'Todd', 'Trevor', 'Udolf', 'Victor', 'Vincent', 'Walton', 'Willis', 'Xavier', 'Yvonne', 'Zack', 'Zane'];
    export default {
        components: {
            'ryt-header': header 
        },
        data() {
            return { 
                headerTitle:'选择银行',
                backUrl: '/',
                value: '',
                alphabet: [],
                defaultResult: [
                    'Apple',
                    'Banana',
                    'Orange',
                    'Durian',
                    'Lemon',
                    'Peach',
                    'Cherry',
                    'Berry',
                    'Core',
                    'Fig',
                    'Haw',
                    'Melon',
                    'Plum',
                    'Pear',
                    'Peanut',
                    'Other'
                ]
            };
        },
        methods: {
            
        },
        computed: {
            filterResult() {
                return this.defaultResult.filter(value => new RegExp(this.value, 'i').test(value));
            }
        },
        created() {
            'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').forEach(initial => {
                let cells = NAMES.filter(name => name[0] === initial);
                this.alphabet.push({
                initial,
                cells
                });
            });
        }
    };
</script>