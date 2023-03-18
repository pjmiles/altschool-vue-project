<template>
<div class="container-fluid position-relative">
    <nav class="navbar fixed-top navbar-light bg-light">
        <div class="container-fluid">
            <h1 class="navbar-brand"><strong>RepoNet</strong></h1>
        </div>
    </nav>

    <section>
        <div>
            <label htmlFor="username">
                <input type="text" placeholder="username" v-model="searchRepo" />
                <button @click="sumbmitSearch">Submit</button>
            </label>
        </div>
        <div>
            <div class="text-center">
                <img src="" class="rounded" alt="repo-owner">
            </div>  
        </div>
        <div v-if="errorMessage">
            <p>Something went wrong, please try again.</p>
        </div>
        <div v-if="loading">
            <p>Loading...</p>
        </div>
        <!-- <table >
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
        </table> -->
        <div v-else class="row row-cols-2 justify-content-md-center">
            <div v-for="item in filterRepos" v-bind:key="item.id" class="card text-dark bg-light col">
                <div class="card-header">{{ item.name }}</div>
                    <div class="card-body">
                        <h5 class="card-title">{{ item.full_name }}</h5>
                        <p class="card-text">{{ item.id }}</p>
                        <i></i>
                    </div>
                </div>
            <div>
        </div>
    </div>
</section>
</div>
        <footer class="footer mt-auto py-3 bg-light">
            <button @click="previous">prev</button>
            <button @click="next">next</button>
        </footer>
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
                console.log(response)
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