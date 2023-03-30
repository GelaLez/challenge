<template>
    <ul class="list-group" v-for="post in arrayPosts">
        <li class="list-group-item" aria-current="true"> <h6>User: {{ findUser(post.userId) }}</h6>  Title:{{ post.title }} </li>
    </ul>
</template>
  
<script  lang="ts">
import { typePost } from '../types/postTypes.interface'
import getPostDataService from '../services/postAPI'
import { ResponseType } from '../types/responseType.interface'
import { usersType } from './types/usersTypes.interface'


export default {
    name: "MiComponentePostList",
    data() {
        return {
            arrayPosts: [] as typePost[],
            arrayUsers: [] as usersType[]
        }
    },
    methods: {
        findUser(id) {
            let a = this.arrayUsers.filter(function (a) {
                return a.id === id
            })[0].name
            console.log("typeof", typeof (a))
            if (a.length == 1) {
                console.log(a, id)
            }
            return a
        }
    },
    mounted() {
        getPostDataService.getPost()
            .then((response: ResponseType) => {
                this.arrayPosts = response.data
                getPostDataService.getUsers()
                    .then((response: ResponseType) => {
                        this.arrayUsers = response.data
                    })
            })
    }
}
</script>
  
<style lang="scss" scoped></style>