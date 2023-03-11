<template>
    <h1>RepoNet</h1>
    <h2>{{ msg }}</h2>

    <section>
        <table>
            <tr>
                <th>Name</th>
                <th>Url</th>
                <th>ID</th>
            </tr>
            <tr v-for="item in repo" v-bind:key="item.id">
                <td>{{ item.name }}</td>
                <td>{{ item.url }}</td>
                <td>{{ item.id }}</td>
            </tr>
        </table>
    </section>
</template>

<script>
import axios from 'axios';

const API = 'https://api.github.com/users/pjmiles/repos'

export default {
    name: "RepoFetch",
    props: {
        msg: String
    },
    data(){
        return {repo: undefined}
    },
    mounted(){
        axios.get(API)
        .then((resp) => {
            this.repo = resp.data
            console.log(resp.data)
        })
    }
}
</script>

<style scoped>


</style>