<template>
    <div>

        <!-- Footer -->
        <footer class="bg-primary text-white text-center text-lg-start mt-4">
            <div class="container p-4">
                <div class="row">
                    <div class="col-lg-6 col-md-12 mb-4 mb-md-0">
                        <h5 class="text-uppercase">Footer Content</h5>
                        <p>
                            Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit
                            amet, consectetur adipisicing elit.
                        </p>
                    </div>
                    <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
                        <h5 class="text-uppercase">Links</h5>
                        <ul class="list-unstyled mb-0">
                            <li>
                                <router-link class="text-white" to="/">Home</router-link>
                            </li>
                            <li>
                                <router-link class="text-white" to="/about">About</router-link>
                            </li>
                            <li>
                                <router-link class="text-white" to="/login">Login</router-link>
                            </li>
                            <li>
                                <router-link class="text-white" to="/registration">Registration</router-link>
                            </li>
                        </ul>
                    </div>
                    <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
                        <h5 class="text-uppercase mb-0">Contact</h5>
                        <ul class="list-unstyled">
                            <li>
                                <a href="mailto:info@example.com" class="text-white">info@example.com</a>
                            </li>
                            <li>
                                <a href="tel:+1234567890" class="text-white">+1 234 567 890</a>
                            </li>
                            <li>
                                <a href="https://www.example.com" class="text-white">www.example.com</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2);">
                © {{ year }}
            </div>
        </footer>
    </div>
</template>

<script>
export default {
    name: 'Footer',
    data() {
        return {
            year: new Date().getFullYear()
        }
    }
}
</script>

<style scoped></style>
