<template>
    <div class="container mt-4">
        <h2 class="mb-4">Order Reports</h2>
        <div v-if="loading">Loading...</div>
        <div v-else-if="error">{{ error }}</div>
        <div v-else>
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th>sl.</th>
                        <th>User Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Order Date</th>
                        <th>Booking Date</th>
                        <th>Hall Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    <!-- <tr v-for="order in orders" :key="order.id"> -->
                    <tr v-for="(order, index) in orders" :key="order.id">
                        <td>{{ index + 1 }}</td>
                        <td>{{ order.user_name }}</td>
                        <td>{{ order.user_email }}</td>
                        <td>{{ order.user_phone }}</td>
                        <td>{{ formatDate(order.created_at) }}</td>
                        <td>{{ formatDateBook(order.booking_date) }}</td>
                        <td>{{ order.hall_name }}</td>
                        <td>{{ order.price }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            orders: [],
            loading: true,
            error: null
        }
    },
    mounted() {
        this.fetchOrders();
    },
    methods: {
        async fetchOrders() {
            try {
                const response = await axios.get('http://localhost/vue/event_management_api/event_management_api/public/api/reports');
                this.orders = response.data;
                this.loading = false;
            } catch (error) {
                console.error('Error fetching orders:', error);
                this.error = 'An error occurred while fetching the orders.';
                this.loading = false;
            }
        },
        formatDate(dateString) {
            const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
            return new Date(dateString).toLocaleDateString(undefined, options);
        },
        formatDateBook(dateString) {
            const options = { year: 'numeric', month: 'long', day: 'numeric' };
            return new Date(dateString).toLocaleDateString(undefined, options);
        },
    }
}
</script>