<script setup>
import carsData from '@/assets/data.json'
import { computed, ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const make = ref('All')

const cars = computed(() => {
    return make.value === 'All'
        ? carsData
        : carsData.filter((car) => car.make === make.value)
})

const handleChange = () => {
    router.push({ name: 'Cars', query: { make: make.value } })
}
</script>

<template>
    <h1 class="my-3">Our Cars</h1>
    <div class="form-floating">
        <select
            id="floatingSelect"
            v-model="make"
            class="form-select"
            aria-label="Floating label select example"
            @change="handleChange"
        >
            <option selected>All</option>
            <option value="Chevrolet">Chevy</option>
            <option value="Porsche">Porsche</option>
            <option value="Audi">Audi</option>
        </select>
        <label for="floatingSelect">Select make of car...</label>
    </div>
    <div class="row mx-0">
        <div class="col-md-10 mx-auto">
            <div class="cards">
                <div
                    v-for="car in cars"
                    :key="car.id"
                    class="card"
                    @click="
                        router.push({ name: 'Car', params: { id: car.id } })
                    "
                >
                    <h2>{{ car.make }}</h2>
                    <p>{{ car.price }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.cards {
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    margin-top: 140px;
    justify-content: start;
    align-items: center;
    gap: 10px;
}

.card {
    box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.207);
    width: 20rem;
    padding: 15px;
    margin-right: 5px;
    cursor: pointer;
    min-height: 100px;
}

.links {
    padding: 20px;
}

.links a {
    margin: 0 5px;
}
</style>
