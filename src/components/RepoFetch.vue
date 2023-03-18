<template>
    <h1>RepoNet</h1>
    <h2>{{ msg }}</h2>

    <section>
        <div>
            <div>
                <!-- <router-link to="/">Home</router-link> -->
            </div>
      </div>
        <div>
            <label htmlFor="username">
                <input type="text" placeholder="username" v-model="searchRepo" />
                <button @click="sumbmitSearch">Submit</button>
            </label>
        </div>
        <div v-if="errorMessage">
            <p>Something went wrong, please try again.</p>
        </div>
        <div v-if="loading">
            <p>Loading...</p>
        </div>
        <table v-else>
            <tr>
                <th>Name</th>
                <th>Url</th>
                <th>ID</th>
            </tr>
            <tr v-for="item in filterRepos" v-bind:key="item.id">
                <td>{{ item.name }}</td>
                <td>{{ item.url }}</td>
                <router-link :to="{ name: 'repoDetails', params: { id: item.id }}"><td>{{ item.id }}</td></router-link>
            </tr>
        </table>
        <div>
            <button @click="previous">prev</button>
            <button @click="next">next</button>
        </div>
    </section>
</template>

<script>
import axios from 'axios';

export default {
    name: "RepoFetch",
    props: {
        msg: String
    },
    data(){
        return {
            repos: null,
            loading: true,
            pageNumber: 1,
            perPage: 5,
            searchRepo: "pjmiles",
            errorMessage: false,
            id: ""
        }
    },
    methods: {
        async fetchRepos(){
            try {
                const response = await axios.get(`${this.base_url}${this.searchRepo}/repos`)
                this.repos = response.data
            } catch(err) {
                console.error(err)
                this.errorMessage = true
            } finally {
                this.loading = false
                this.searchRepo = ""
            }
        },
        next(){
            if(this.pageNumber < this.totalPages){
                this.pageNumber++
            }
        },
        previous(){
            if(this.pageNumber > 1){
                this.pageNumber--
            }
        },
        sumbmitSearch(){
            if(this.searchRepo){
                this.loading = true
                this.fetchRepos()
            }
        },
    },
    mounted(){
        this.fetchRepos()
    }, 
    computed: {
        filterRepos(){
            const indexOfLastPage = this.pageNumber * this.perPage
            const indexOfFirstPage = indexOfLastPage - this.perPage
            return this.repos.slice(indexOfFirstPage, indexOfLastPage)
        },
        totalPages(){
            return Math.ceil(this.repos.length / this.perPage)
        }
    },
}
</script>

<style scoped>


</style>