<template>
    <div>
        <h2>用户详情页</h2>
        <hr>
        <el-table :data="us">
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
        </el-table>
    </div>
</template>

<script>
export default {
    data() {
        return {
            us: [],
        }
    },
    created() {
        let users = JSON.parse(localStorage.users);
        for (let i = 0; i < users.length; i++) {
            console.log(users[i].username);
            if (users[i].username == this.$route.params.username) {
                this.us = Array(users[i])
            }
        }
    },
    name: "UserDetail"
}
</script>

<style scoped>

</style>
