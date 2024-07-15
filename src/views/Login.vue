<template>
  <div class="containerm">
    <form @submit.prevent="onSubmit">
      <fieldset>
        <legend>User Login</legend>
        <div>
          <label for="email">Email</label>
          <input type="email" v-model="user.email" id="email" placeholder="Enter email">
        </div>
        <div>
          <label for="password">Password</label>
          <input type="password" v-model="user.password" id="password" placeholder="Enter password">
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </fieldset>
    </form>
  </div>
</template>
<script>
import axios from 'axios';
export default {
  name: "login",
  data() {
    return {
      user: {
        email: '',
        password: ''
      },
      token: '',
      msg: '',
    }
  },
  methods: {
  async onSubmit() {
    try {
      const response = await axios.post('http://localhost/vue/event_management_api/event_management_api/public/api/login', this.user);
      alert(this.msg = response.data.message || 'User logged in successfully');
      console.log(this.msg)
      this.token = response.data.token;
      localStorage.setItem('auth_token', this.token);
      await this.$router.push({ path: '/' }); // Await the router push
    } catch (error) {
      this.msg = error.response.data.message || 'Error logging in'
      console.error('Error fetching data:', error)
    }
  }
}

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