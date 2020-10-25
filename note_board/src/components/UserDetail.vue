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
                <td>{{ $route.params.username }}</td>
                <td>{{ $route.params.age }}</td>
                <td>{{ $route.params.birthday }}</td>
                <td>{{ $route.params.salary }}</td>
            </tr>
        </table>
    </div>
</template>

<script>
export default {
    name: "UserDetail"
}
</script>

<style scoped>

</style>
