<template>
  <div class="containerm">
    <form @submit.prevent="onSubmit">
      <fieldset>
        <legend>User Registration</legend>
        <div>
          <label for="name">Name</label>
          <input type="text" v-model="user.name" id="name" name="name" placeholder="Enter Name">
        </div>
        <div>
          <label for="email">Email</label>
          <input type="email" v-model="user.email" id="email" name="email" placeholder="Enter email">
        </div>
        <div>
          <label for="password">Password</label>
          <input type="password" v-model="user.password" id="password" name="password" placeholder="Enter password">
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </fieldset>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: "Registration",
  data() {
    return {
      user: {
        name: '',
        email: '',
        password: ''
      }
    }
  },
  methods: {
    async onSubmit() {
      try {
        // Get CSRF token from meta tag
        const token = document.querySelector('meta[name="csrf-token"]').getAttribute('content');

        // Set CSRF token in Axios headers
        axios.defaults.headers.common['X-CSRF-TOKEN'] = token;

        // Use POST request to send form data
        const response = await axios.post('http://localhost/vue/event_management_api/event_management_api/public/api/registration', this.user);

        // Check if response has data
        if (response && response.data) {
          alert(this.msg = response.data.message || 'User registered successfully');
          this.$router.push({ path: '/' });
          console.log('Response:', response.data); // Log the response data
        } else {
          this.msg = 'Unexpected response from the server';
          console.error('Unexpected response:', response); // Log the unexpected response
        }
      } catch (error) {
        if (error.response) {
          // Server responded with a status other than 200 range
          this.msg = error.response.data.message || 'Error adding user';
          console.error('Error response:', error.response); // Log the error response
        } else if (error.request) {
          // Request was made but no response received
          this.msg = 'No response from the server';
          console.error('No response:', error.request); // Log the request
        } else {
          // Something else caused the error
          this.msg = 'Error adding user';
          console.error('Error:', error.message); // Log the error message
        }
      }
    },
  },
  mounted() {
    // Show the toast message if there is a message stored in `this.msg`
    if (this.msg) {
      this.toastMessage(this.msg, 'danger');
    }
  },
  watch: {
    msg: function (newMsg, oldMsg) {
      // Show the toast message if there is a message stored in `this.msg`
      if (newMsg) {
        this.toastMessage(newMsg, 'danger');
      }
    }
  },


}
</script>

<style scoped>
.containerm {
  border: solid 1px #0b0808;
  border-radius: 5px;
  padding: 20px;
  max-width: 500px;
  margin: 20px auto;
  background-color: #fff;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

form {
  display: flex;
  flex-direction: column;
  align-items: center;
}

form div {
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
}

form label {
  margin-bottom: 5px;
}

form input {
  padding: 5px;
}

form button {
  margin-top: 10px;
  padding: 5px 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
</style>
