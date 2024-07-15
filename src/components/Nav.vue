<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
            <router-link class="navbar-brand" to="/"> Event Management</router-link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                        <router-link class="nav-link" to="/"> Home</router-link>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                            data-bs-toggle="dropdown" aria-expanded="false">
                            Services
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li><router-link class="dropdown-item" to="#" >Gym</router-link></li>
                            <li> <router-link class="dropdown-item" to="/" >Catering</router-link></li>
                            <li> <router-link class="dropdown-item" to="/hall" > Hall</router-link></li>
                        </ul>
                    </li>
                    <li class="nav-item text-dark">
                        <router-link class="nav-link" to="/hall"> Hall Booking</router-link>
                    </li>
                    <li class="nav-item text-dark">
                        <router-link class="nav-link" to="/about"> About</router-link>
                    </li>
                    <li class="nav-item text-dark">
                        <router-link class="nav-link" to="/order"> Order</router-link>
                    </li>
                    <li class="nav-item text-dark">
                        <router-link class="nav-link" to="/report"> Report </router-link>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                            data-bs-toggle="dropdown" aria-expanded="false">
                            Authentication
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li><router-link class="dropdown-item" to="#" @click.prevent="logout"
                                    v-if="isLoggedIn">Logout</router-link></li>
                            <li><router-link class="dropdown-item" to="/login" v-if="!isLoggedIn">Login</router-link>
                            </li>
                            <li><router-link class="dropdown-item" to="/registration"
                                    v-if="!isLoggedIn">Registration</router-link></li>
                        </ul>
                    </li>
                </ul>
                <form class="form-inline my-2 my-lg-0">
                    <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"
                        id="search">
                    <button class="btn btn-outline-light my-2 my-sm-0" type="submit">Search</button>
                </form>

            </div>
        </nav>
    </div>
</template>

<script>
import { RouterLink, RouterView } from 'vue-router'
export default {
    name: 'Nav',
    data() {
        return {
            isLoggedIn: false
        }
    },
    components: {
        RouterLink,
        RouterView
    },

    methods: {
        // checkLoginStatus() {
        //     // Check if user is logged in
        //     // This is a placeholder - replace with your actual authentication logic
        //     const user = localStorage.getItem('user')
        //     this.isLoggedIn = !!user
        // },  

        // logout() {
        //   localStorage.removeItem('auth_token');
        //   alert(localStorage.removeItem('auth_token'));
        //   this.$router.push({ name: 'Login' });
        // }
        logout() {
            this.$store.dispatch('logout');
            this.$router.push('/login');
        }
    }

}
</script>

<style scoped></style>
<!-- data() {
    return {
        isLoggedIn: false
    }
},
mounted() {
    this.checkLoginStatus()
},
methods: {
    checkLoginStatus() {
        // Check if user is logged in
        // This is a placeholder - replace with your actual authentication logic
        const user = localStorage.getItem('user')
        this.isLoggedIn = !!user
    },
    logout() {
        // Implement logout logic here
        localStorage.removeItem('user')
        this.isLoggedIn = false
        // Redirect to home or login page
        this.$router.push({ name: 'home' })
    }
} -->