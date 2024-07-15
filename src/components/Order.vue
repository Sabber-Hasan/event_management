<template>
    <div class="container">
        <h2 class="display-6 mb-3">Place Order</h2>
        <form @submit.prevent="placeOrder" class="row g-3">
            <div class="col-lg-6">
                <h3 class="fs-5 mb-3">Hall Information:</h3>
                <p class="mb-3">{{ hallName }} (Capacity: {{ capacity }}, Price: {{ price }})</p>
                <p class="mb-3">Booking Date: {{ bookingDate }}</p>
            </div>
            <div class="col-lg-6">
                <h3 class="fs-5 mb-3">User Information:</h3>
                <div class="mb-3">
                    <input v-model="userName" placeholder="Your Name" class="form-control" required>
                </div>
                <div class="mb-3">
                    <input v-model="userEmail" type="email" placeholder="Your Email" class="form-control" required>
                </div>
                <div class="mb-3">
                    <input v-model="userPhone" placeholder="Your Phone" class="form-control" required>
                </div>
                <div class="mb-3">
                    <select v-model="paymentMethod" class="form-select" required>
                        <option value="credit_card">Credit Card</option>
                        <option value="paypal">PayPal</option>
                        <option value="bank_transfer">Bank Transfer</option>
                    </select>
                </div>
                <button type="submit" class="btn btn-primary">Place Order</button>
            </div>
        </form>
    </div>
</template>

<script>
import axios from 'axios'
import { useToast } from "vue-toastification";

export default {
    setup() {
        const toast = useToast();
        return { toast };
    },
    data() {
        return {
            hallId: null,
            hallName: '',
            capacity: null,
            price: null,
            bookingDate: '',
            userName: '',
            userEmail: '',
            userPhone: '',
            paymentMethod: '',
        }
    },
    created() {
        // Retrieve data from query parameters
        const { hallId, hallName, capacity, price, bookingDate } = this.$route.query
        this.hallId = parseInt(hallId)
        this.hallName = hallName
        this.capacity = parseInt(capacity)
        this.price = parseFloat(price)
        this.bookingDate = bookingDate
    },
    methods: {
        async placeOrder() {
            try {
                const response = await axios.post('http://localhost/vue/event_management_api/event_management_api/public/api/orders', {
                    hall_id: this.hallId,
                    hall_name: this.hallName,
                    capacity: this.capacity,
                    price: this.price,
                    booking_date: this.bookingDate,
                    user_name: this.userName,
                    user_email: this.userEmail,
                    user_phone: this.userPhone,
                    payment_method: this.paymentMethod,
                })
                if (response.data.success) {
                    this.clearFormValues()
                    this.toast.success("Order placed successfully!", {
                        timeout: 3000,  // 3 seconds
                        onClose: () => {
                            this.$router.push('/')
                        }
                    });
                } else {
                    this.toast.error('Error placing order: ' + response.data.message)
                }
            } catch (error) {
        console.error('Error placing order:', error)
        this.toast.error('An error occurred while placing the order.')
            }
        },
        clearFormValues() {
            this.hallId = null
            this.hallName = ''
            this.capacity = null
            this.price = null
            this.bookingDate = ''
            this.userName = ''
            this.userEmail = ''
            this.userPhone = ''
            this.paymentMethod = ''
        }
    }
}
</script>

<style scoped></style>