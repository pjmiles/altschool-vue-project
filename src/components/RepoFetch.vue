<template>
<div class="container-fluid position-relative">
    <nav class="navbar fixed-top navbar-light bg-dark">
        <div class="container-fluid">
            <h1 class="navbar-brand text-primary"><strong>RepoNet</strong></h1>
        </div>
    </nav>

    <section>
        <div>
            <label htmlFor="username">
                <input type="text" placeholder="username" v-model="searchRepo" class="border border-primary mt-4 p-1 "/>
                <button type="button" class="btn btn-outline-primary" @click="sumbmitSearch">Submit</button>
            </label>
        </div>
        <!-- <div>
            <div class="text-center">
                <img src="" class="rounded" alt="repo-owner">
            </div>  
        </div> -->
        <div v-if="errorMessage">
            <p>Something went wrong, please try again.</p>
        </div>
        <div v-if="loading">
            <p>Loading...</p>
        </div>
        <div v-else class="row row-cols-2 justify-content-center mt-4">
            <div v-for="item in filterRepos" v-bind:key="item.id" class="card text-dark m-2 bg-light col-lg-3 col-sm-5 ">
                <div class="card-header">{{ item.name }}</div>
                    <div class="card-body">
                        <h5 class="card-title">{{ item.full_name }}</h5>
                        <p class="card-text">{{ item.id }}</p>
                        <router-link :to="{ name: 'repoDetails', params: { id: item.id }}"><td>{{ item.id }}</td></router-link>
                        <i></i>
                    </div>
                </div>
            <div>
        </div>
    </div>
</section>
</div>
        <footer class="footer py-3 bg-light mb-md-0 fixed-bottom" >
            <button class="btn btn-outline-primary" @click="previous">prev</button>
            <button class="btn btn-outline-primary" @click="next">next</button>
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
        getRepoDetails(){
            params
        }
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