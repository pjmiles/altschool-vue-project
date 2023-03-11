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
import axios from 'axios';

const API = 'https://api.github.com/users/pjmiles/repos'

export default {
    name: "RepoFetch",
    props: {
        msg: String
    },
    mounted(){
        axios.get(API)
        .then((resp) => {
            console.log(resp.data)
        })
    }
}
</script>

<style scoped>


</style>