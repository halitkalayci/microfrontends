<template>
    <button @click="increment" class="bg-gray-500 text-white font-bold py-2 px-4 rounded">
        Clicked {{ count }} times
    </button>
</template>

<script>

export default {
    data() {
        return {
            count:0
        };
    },

    methods:
    {
        increment() {
            this.count++;
        }
    }
}

</script>