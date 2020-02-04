axios.defaults.headers.common['Authorization'] = "iat0d2m0";
axios.defaults.headers.get['Content-Type'] = "application/vnd.api+json";


Vue.component('pets', {
    props: ['Animal'],
    template: '#pets-template',
    let: vm = new Vue({
        el: '#app',
        data: {
            filters: [{
                fieldName: "statuses.name",
                operation: "equals",
                criteria: "Available"
            }, {
                fieldName: "species.singular",
                operation: "equals",
                criteria: ["Cat", "Dog"],
            }],
            filterRadius: {
                miles: "10",
                postalcode: "97024",
            },
            result: [],
        },


        methods: {
            getPets: function() {
                axios
                    .get(
                        "https://api.rescuegroups.org/v5/public/animals/search/available/?include=pictures,species&fields[animals]=name,sex,breedPrimary,descriptionText,id,sizeGroup&fields[pictures]=large&fields[species]=singular"
                    )
                    .then(res => {
                        this.result = res.data
                        console.log(this.result);
                    })
                    .catch(error => {
                        console.log(error)
                        this.errored = true
                    })
                    .finally(() => this.loading = false)
            }
        },
        mounted: function() {
            this.getPets();
        },
    }),
})