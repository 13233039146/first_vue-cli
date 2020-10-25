<template>
    <div>这是用户页
        <hr>
        <table border="1px" cellspacing="0">
            <tr>
                <td>姓名</td>
                <td>年龄</td>
                <td>生日</td>
                <td>工资</td>
                <td>操作1</td>
                <td>操作2</td>
            </tr>
            <tr v-for="(user,index) in users" :key="index">
                <td>{{ user.username }}</td>
                <td>{{ user.age }}</td>
                <td>{{ user.birthday }}</td>
                <td>{{ user.salary }}</td>
                <td><input type="button" value="删除" @click="delete_user(index)"></td>
                <td>
                    <router-link :to="`/userDetail/${user.username}/${user.age}/${user.birthday}
                    /${user.salary}`"><input type="button" value="查看详情"></router-link>
                </td>
            </tr>
        </table>
        <hr>
        <div>添加用户板块</div>
        姓名:<input type="text" v-model="username"><br>
        年龄:<input type="text" v-model="age"><br>
        生日:<input type="text" v-model="birthday"><br>
        工资<input type="text" v-model="salary"><br>
        <input type="button" value="添加" @click="add_user">
    </div>

</template>

<script>
export default {
    name: "User",
    data: function () {
        return {
            users: localStorage.users ? JSON.parse(localStorage.users) : [],
            // [
            // {username: '张三', age: 18, birthday: '2000-10-10', salary: 8000},
            // {username: '李四', age: 19, birthday: '1998-11-02', salary: 9000},
            // {username: '王五', age: 20, birthday: '2015-05-05', salary: 9500},
            // {username: '赵六', age: 21, birthday: '1980-12-12', salary: 8500},
            // ],
            username: '',
            age: '',
            birthday: '',
            salary: '',
        }
    },
    methods: {
        add_user() {
            this.users.push({
                username: this.username, age: this.age,
                birthday: this.birthday, salary: this.salary,
            });
            localStorage.users = JSON.stringify(this.users);
            this.username = this.age = this.birthday = this.salary = '';
        },
        delete_user(index){
            this.users.splice(index,1);
            localStorage.users = JSON.stringify(this.users);
        }
    },
}
</script>

<style scoped>

</style>
