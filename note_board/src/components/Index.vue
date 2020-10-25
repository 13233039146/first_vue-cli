<template>
    <div>
        <span>这是留言板</span>
        <hr>
        <input type="text" v-model="msg">
        <input type="button" @click="commit" value="发表留言">
        <ul>
            <li v-for="(info, index) in msg_list" :key="index">{{ info }}
                <a href="javascript:"  @click="delete_data">删除</a>
            </li>
        </ul>
        <span>留言总数:{{ msg_list.length }}</span>
        <input type="button" @click="del_all" value="全部删除">
    </div>
</template>

<script>
export default {
    name: "Index",
    data: function () {
        return {
            msg: '',
            msg_list:
                localStorage.getItem('message') ?
                JSON.parse(localStorage.getItem('message')) : [],
        }
    },
    methods: {
        commit(){
            this.msg_list.unshift(this.msg);
            localStorage.message = JSON.stringify(this.msg_list);
            this.msg = '';
        },
        delete_data(index){
            this.msg_list.splice(index, 1);
            console.log(this.msg_list);
            localStorage.message = JSON.stringify(this.msg_list);
        },
        del_all(){
            this.msg_list = [];
            localStorage.clear();
        }
    },
}
</script>

<style scoped>

</style>
