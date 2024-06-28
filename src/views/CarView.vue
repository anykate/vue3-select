<script setup>
import carsData from '@/assets/data.json'
import { onBeforeMount, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const car = ref(null)
const route = useRoute()
const router = useRouter()
const { id } = route.params

onBeforeMount(() => {
    car.value = carsData.find((c) => c.id === parseInt(id))
})
</script>

<template>
    <div
        v-if="car"
        class="container my-5"
    >
        <div class="row mb-5">
            <div class="col-md-10">
                <div class="card mb-4">
                    <div class="card-body">
                        <h1>Car View</h1>
                        <p>Make: {{ car.make }}</p>
                        <p>Body: {{ car.body }}</p>
                        <p>Price: {{ car.price }}</p>
                        <p>Year: {{ car.year }}</p>
                    </div>
                </div>

                <button
                    class="btn btn-outline-dark mb-4 btn-lg d-flex align-items-center gap-2"
                    @click="router.push({ name: 'Cars' })"
                >
                    <i
                        class="bi bi-arrow-left-circle-fill"
                        style="font-size: 2rem"
                    ></i>
                    CarList
                </button>

                <div class="links">
                    <router-link :to="{ name: 'Manufacturer' }">
                        Manufacturer
                    </router-link>
                    |
                    <router-link :to="{ name: 'Dealer' }">Dealer</router-link>
                </div>
            </div>
        </div>
        <router-view />
    </div>

    <div v-else>
        {{ router.push({ name: 'NotFound' }) }}
    </div>
</template>

<style scoped>
.router-link-exact-active {
    color: green;
    text-decoration: none !important;
}
.links {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
}
</style>
