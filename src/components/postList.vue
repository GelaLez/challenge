<template>    
    Total de elementos: {{ totalList }}

    <RouterLink :to="{ path: '/post/' + post.userId }" v-for="post in arrayPosts" @click="viewItem(post)"
        data-bs-toggle="modal" data-bs-target="#staticBackdrop">
        <ul class="list-group">
            <li class="list-group-item" aria-current="true">
                <h6>User: {{ findUser(post.userId) }}</h6> Title:{{ post.title }}
            </li>
        </ul>
    </RouterLink>
    <!-- Modal -->
    <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
        aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="staticBackdropLabel">{{ postItem.title }}</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    {{ postItem.body }}
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Aceptar</button>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script  lang="ts">

import { typePost } from '../types/postTypes.interface'
import getPostDataService from '../services/postAPI'
import { ResponseType } from '../types/responseType.interface'
import { usersType } from './types/usersTypes.interface'
import Modal from './modal.vue'


export default {

    name: "MiComponentePostList",
    data() {
        return {
            arrayPosts: [] as typePost[],
            arrayUsers: [] as usersType[],
            postItem: {},
            modalActive: false,
        }
    },
    computed: {
        totalList() {
            return this.arrayPosts.length
        }
    },
    components: { Modal },
    methods: {
        viewItem(item) {
            console.log(item.id)
            getPostDataService.getPostId(item.id)
                .then((responce: ResponseType) => {
                    console.log("item:" + responce.data)
                    this.postItem = responce.data
                    this.modalActive = true
                })
        },
        findUser(id) {
            let a = this.arrayUsers.filter(function (a) {
                return a.id === id
            })
            a = a.length ? a[0].name : ''
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


    },

    toggleModal() {
        if (this.allowClose) {
            this.modalActive = !this.modalActive
            if (!this.modalActive) {
                this.modalID = null
                clearTimeout(this.cancelTimeOut)
            }
        }

        console.log(this.modalActive);
    },
}
</script>  


<style>
.modal-title {
    margin-bottom: 0;
    line-height: 1.5;
    color: black;
}

.modal-body {
    position: relative;
    flex: 1 1 auto;
    padding: 1rem;
    color: black;
}
</style>