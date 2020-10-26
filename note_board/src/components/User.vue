<template>
    <div>
        <h2>用户列表页</h2>
        <hr>
        <el-table :data="users">
            <el-table-column label="姓名">
                <template slot-scope="scope">
                    <span style="margin-left: 10px">{{ scope.row.username }}</span>
                </template>
            </el-table-column>
            <el-table-column label="年龄">
                <template slot-scope="scope">
                    <span style="margin-left: 10px">{{ scope.row.age }}</span>
                </template>
            </el-table-column>
            <el-table-column label="生日">
                <template slot-scope="scope">
                    <i class="el-icon-time"></i>
                    <span style="margin-left: 10px">{{ scope.row.birthday }}</span>
                </template>
            </el-table-column>
            <el-table-column label="工资">
                <template slot-scope="scope">
                    <span style="margin-left: 10px">{{ scope.row.salary }}</span>
                </template>
            </el-table-column>
            <el-table-column label="操作1">
                <template slot-scope="scope">
                    <router-link :to="`/userDetail/${scope.row.username}`">
                        <el-button size="mini" type="warning">查看详情</el-button>
                    </router-link>
                </template>
            </el-table-column>
            <el-table-column label="操作2">
                <el-button size="mini" type="danger" @click="delete_user(index)">删除</el-button>
            </el-table-column>

        </el-table>
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
    data() {
        return {
            users: localStorage.users ? JSON.parse(localStorage.users) : [],
            // users:[
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
        delete_user(index) {
            this.users.splice(index, 1);
            localStorage.users = JSON.stringify(this.users);
        }
    },
}
</script>

<style scoped>

</style>
