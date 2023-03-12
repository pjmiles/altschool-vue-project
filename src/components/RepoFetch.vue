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
import { ref } from 'vue';

const API = 'https://api.github.com/users/pjmiles/repos'

export default {
    name: "RepoFetch",
    props: {
        msg: String
    },
    // async setup(){
    //     const repo = ref([])

    //     const getRepo = async () => {
    //         await axios.get(API)
    //         .then((response) => {
    //             this.repo = response.data
    //             console.log("Its working", response)
    //         })
    //         await getRepo();
    //         return {
    //             repo
    //         }
    //     }
    // },
    name: "RepoFetch",
    props: {
        msg: String
    },
    mounted(){
        axios.get(API)
        .then((resp) => {
            this.repo = resp.data
            console.log(resp.data)
        })
    },
    data(){
        return {repo: undefined}
    },
}
</script>

<style scoped>


</style>