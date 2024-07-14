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
                    <li class="nav-item text-dark">
                        <router-link class="nav-link" to="/about"> About</router-link>
                    </li>
                    <li class="nav-item text-dark">
                        <router-link class="nav-link" to="/hall"> Hall Booking</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/login"> Login</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/registration"> Registration</router-link>
                    </li>
                    <li class="nav-item">
                        <a href="#"  @click.prevent="logout">Logout</a>
                        <!-- <router-link class="nav-link" to="/registration"> Registration</router-link> -->
                    </li>
                </ul>
                <form class="form-inline my-2 my-lg-0">
                    <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
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
    components: {
        RouterLink,
        RouterView
    },
    
    methods: {
    logout() {
      localStorage.removeItem('auth_token');
      alert(localStorage.removeItem('auth_token'));
      this.$router.push({ name: 'Login' });
    }
  }

}
</script>

<style scoped></style>
