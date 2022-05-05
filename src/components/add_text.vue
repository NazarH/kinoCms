
<script scoped>
Vue.component('some-text', {
    model:{
        prop: 'value',
        prop: 'input',
    },
    props:{
        value: String,
        input: String
    },
    template:
    <input type='text' placeholder='Название кинотеатра' v-bind:value='someText' @input='someText = $event.target.value'>
    
});
</script>

<style scoped>

</style>