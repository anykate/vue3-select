<template>
    <nav
        class="navbar navbar-expand-lg bg-dark"
        data-bs-theme="dark"
    >
        <div class="container-fluid">
            <router-link
                class="navbar-brand"
                :to="{ name: 'Home' }"
            >
                Home
            </router-link>
            <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span class="navbar-toggler-icon"></span>
            </button>
            <div
                id="navbarNav"
                class="collapse navbar-collapse"
            >
                <ul class="navbar-nav ms-auto d-flex align-items-center gap-1">
                    <li class="nav-item">
                        <router-link
                            class="nav-link"
                            :to="{ name: 'Cars' }"
                        >
                            Cars
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link
                            class="nav-link"
                            :to="{ name: 'About' }"
                        >
                            About
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<style scoped>
.router-link-exact-active {
    color: yellow;
    background-color: darkslategray;
    padding: 4px;
    text-decoration: none !important;
}
</style>
