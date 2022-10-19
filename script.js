console.log('JS OK');

const app = new Vue({
    el: "app",
    data() {
        return {
            albums: [],
        };
    },
    mounted() {
        this.getAlbums();
    },
    methods: {
        getAlbums() {
            axios
                .get('/php-ajax-dischi/api/data-vue.php')
                .then((response) => {
                    console.log(response);
                    if (response.status === 200) {
                        this.albums = response.data;
                        console.log(this.albums);
                    }
                })
                .catch((error) => console.log(error));
        },
    },
})