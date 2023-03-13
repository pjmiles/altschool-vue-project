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
            <tr v-for="item in repos" v-bind:key="item.id">
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
    methods: {
        async fetchRepos(){
            try {
                const response = await axios.get(API)
                this.repos = response.data
            } catch (error) {
                console.error(error)
            }
        }
    }, 
    mounted(){
        this.fetchRepos()
    }, 
    data(){
        return {repos: undefined}
    },
}
</script>

<style scoped>


</style>