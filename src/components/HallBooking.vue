<template>
  <div>
    <div id="carouselExampleIndicators" class="carousel slide mt-3">
      <div class="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active"
          aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
          aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
          aria-label="Slide 3"></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="/public/car1.jpg" class="d-block w-100" alt="...">
        </div>
        <div class="carousel-item">
          <img src="/public/car.jpg" class="d-block w-100" alt="...">
        </div>
        <div class="carousel-item">
          <img src="/public/car2.jpg" class="d-block w-100" alt="...">
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
    <!--  -->

    <div class="container mt-3">
      <h1 class="display-5">Hall Booking</h1>
      <div v-if="halls.length > 0" class="row row-cols-1 row-cols-md-3 g-4">
        <div v-for="hall in halls" :key="hall.id" class="col">
          <div class="card h-100">
            <div class="card-body">
              <h5 class="card-title">{{ hall.name }}</h5>
              <p class="card-text">Capacity: {{ hall.capacity }}</p>
              <p class="card-text">Price: {{ hall.price }}</p>
              <p class="card-text">Description: {{ hall.description }}</p>
              <button @click="selectHall(hall)" class="btn btn-primary">Select</button>
            </div>
          </div>
        </div>
      </div>
      <div v-else class="mt-3">
        <p>Loading halls...</p>
      </div>

      <form v-if="selectedHall" @submit.prevent="submitBooking" class="mt-3">
        <h2>Selected Hall: {{ selectedHall.name }}</h2>
        <div class="mb-3">
          <label for="bookingDate" class="form-label">Booking Date</label>
          <input type="date" id="bookingDate" v-model="bookingDate" required class="form-control">
        </div>
        <button type="submit" class="btn btn-primary">Proceed to Order</button>
      </form>
    </div>
    <!--  -->
  </div>
</template>

<script>
import { useToast } from "vue-toastification";

export default {
  setup() {
    const toast = useToast();
    return { toast };
  },
  data() {
    return {
      halls: [],
      selectedHall: null,
      bookingDate: null,
    };
  },
  created() {
    this.fetchHalls();
  },
  methods: {
    async fetchHalls() {
      try {
        const response = await fetch('http://localhost/vue/event_management_api/event_management_api/public/api/halls');
        this.halls = await response.json();
      } catch (error) {
        console.error('Error fetching halls:', error);
        this.toast.error("Failed to fetch halls. Please try again.");
      }
    },
    selectHall(hall) {
      this.selectedHall = hall;
      this.toast.success(`Selected hall: ${hall.name}`);
    },
    submitBooking() {
      if (!this.selectedHall || !this.bookingDate) {
        this.toast.error('Please select a hall and booking date.');
        return;
      }

      this.$router.push({
        name: 'order',
        query: {
          hallId: this.selectedHall.id,
          hallName: this.selectedHall.name,
          capacity: this.selectedHall.capacity,
          price: this.selectedHall.price,
          bookingDate: this.bookingDate
        }
      });
      this.toast.success("Proceeding to order placement.");
    },
  },
};
</script>

<style lang="scss" scoped>
.hall-card {
  border: 1px solid #ccc;
  padding: 16px;
  margin: 16px 0;
}
</style>