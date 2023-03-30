import http from '@/http-common'


class getPostDataService {
    getPost(): Promise<any> {
        return http.get('/posts')
    }

    getUsers(): Promise<any> {
        return http.get('/users')
    }

    getTodos(): Promise<any> {
        return http.get('/todos')
    }

    getComments(): Promise<any> {
        return http.get('/comments')
    }

    getAlbums(): Promise<any> {
        return http.get('/albums')
    }

}


export default new getPostDataService();