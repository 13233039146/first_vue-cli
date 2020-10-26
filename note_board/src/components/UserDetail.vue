<template>
    <div>
        <span>用户详情页</span>
        <hr>
        <table border="1" cellspacing="2">
            <caption>用户信息表</caption>
            <tr>
                <td>姓名</td>
                <td>年龄</td>
                <td>生日</td>
                <td>工资</td>
            </tr>
            <tr>
                <td>{{ us.username }}</td>
                <td>{{ us.age }}</td>
                <td>{{ us.birthday }}</td>
                <td>{{ us.salary }}</td>
            </tr>
        </table>
    </div>
</template>

<script>
export default {
    data() {
        return {
            us: '',
        }
    },
    created() {
        let users = JSON.parse(localStorage.users);
        console.log(this.$route.params.username)
        for (let i = 0; i < users.length; i++) {
            console.log(users[i].username);
            if (users[i].username == this.$route.params.username) {
                this.us = users[i]
            }
        }
        console.log(users.length, typeof users)


    },
    name: "UserDetail"
}
</script>

<style scoped>

</style>
