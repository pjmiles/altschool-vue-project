<template>
    <h1>RepoNet</h1>
    <h2>{{ msg }}</h2>

    <section>
        <table>
            <tr>
                <th>Name</th>
                <th>Url</th>
                <th>Language</th>
            </tr>
            <tr>
                <td>N1</td>
                <td>U1</td>
                <td>L1</td>
            </tr>
        </table>
    </section>
</template>

<script>
export default {
    name: "RepoFetch",
    props: {
        msg: String
    }
}
</script>

<style scoped>

table {

}

</style>