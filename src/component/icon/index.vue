<template>

    <div class="view-icon" :class="theme">
        <i class="fa" :class="icon" aria-hidden="true" v-if="icon.indexOf('fa-')==0"></i>
        <span class="glyphicon" :class="icon" aria-hidden="true" v-if="icon.indexOf('glyphicon-')==0"></span>
        <i class="icon" :class="icon" aria-hidden="true" v-if="icon.indexOf('ion-')==0"></i>
    </div>

</template>

<script>
    export default {
        name: 'Icon',
        props: {
            theme: {
                type : String,
                default : 'black'
            },
            icon: [String, Number],
        }
    }
</script>
