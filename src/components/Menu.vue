<template>
    <div class="row">
        <!-- 菜单 -->
        <div class="col-sm-12 col-md-8">
            <table class="table">
                <thead class="thead-default">
                    <tr>
                        <th>尺寸</th>
                        <th>价格</th>
                        <th>加入</th>
                    </tr>
                </thead>
                <tbody v-for="item in getMenuItems" v-bind:key="item.name">
                    <tr>
                        <td><strong>{{item.name}}</strong></td>
                    </tr>
                    <tr v-for="option in item.options" v-bind:key="option.size">
                        <td>{{option.size}}</td>
                        <td>{{option.price}}</td>
                        <td><button @click="addToBasket(item,option)" class="btn btn-sm btn-outline-success">+</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
        <!-- {{baskets}} -->

        <!-- 购物车 -->
        <div class="col-sm-12 col-md-4">
            <div v-if="baskets.length > 0">
                <table class="table">
                    <thead class="thead-default">
                        <tr>
                            <th>数量</th>
                            <th>种类</th>
                            <th>价格</th>
                        </tr>
                    </thead>
                    <tbody v-for="item in baskets" :key="item.name">
                        <tr>
                            <td>
                                <button @click="decreaseQuantity(item)" class="btn btn-sm">-</button>
                                <span>{{item.quantity}}</span>
                                <button @click="increaseQuantity(item)" class="btn btn-sm">+</button>
                            </td>
                            <td>{{item.name}}{{item.size}}</td>
                            <td>{{item.price * item.quantity}}元</td>
                        </tr>
                    </tbody>
                </table>
                <p>总价：</p>
            </div>
            <div v-else>
                {{basketsText}}
            </div>
            
            <button class="btn btn-success btn-block">提交</button>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            baskets:[],
            basketsText:"购物车没有任何商品",
            getMenuItems:{
                1:{
                    'name':'榴莲pizza',
                    'discription':'这时喜欢吃榴莲朋友的最佳选择',
                    'options':[{
                        'size':9,
                        'price':38
                    },{
                        'size':12,
                        'price':48
                    }]
                },
                2:{
                    'name':'芝士pizza',
                    'discription':'芝士杀手，弄弄的芝士丝，食欲瞬间爆棚！',
                    'options':[{
                        'size':9,
                        'price':38
                    },{
                        'size':12,
                        'price':48
                    }]
                },
                3:{
                    'name':'夏威夷pizza',
                    'discription':'众多人的默认选择！',
                    'options':[{
                        'size':9,
                        'price':36
                    },{
                        'size':12,
                        'price':46
                    }]
                }
            }
        }
    },
    methods:{
        addToBasket(item,option){
            this.baskets.push({
                name:item.name,
                size:option.size,
                price:option.price,
                quantity:1
            });
        },
        decreaseQuantity(item){
            item.quantity--;
            if(item.quantity <= 0){
                this.removeFromBasket(item);
            }
        },
        increaseQuantity(item){
            item.quantity++;
        },
        removeFromBasket(item){
            this.baskets.splice(this.baskets.indexOf(item),1);
        }
    }
}
</script>
