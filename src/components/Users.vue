<template>

  <div class="container">
    <ul v-if="users && users.length">
      <li v-for="user of users" :key="user.id">
        <div class="card">
          <div class="card-content">
            <div class="media">
              <div class="media-left">
                <figure class="image is-64x64">
                  <img :src="user.avatar_url" alt="Avatar image">
                </figure>
              </div>
              <div class="media-content">
                <p class="title is-4">{{user.login}}</p>
                <a class="url" :href="user.html_url">{{user.html_url}}</a>
                
              </div>
            </div>

          </div>
        </div>
  
      </li>
    </ul>

    <ul v-if="errors && errors.length">
      <li v-for="error of errors" :key="error">
        {{error.message}}
      </li>
    </ul>
  </div>
 
</template>

<script>

import axios from 'axios';

export default {
  name: 'Users',
  data() {
    return {
      users: [],
      errors: []
    }
  },

  // Fetches posts when the component is created.
  created() {
    axios.get(`https://api.github.com/users`)
    .then(response => {
      console.log(response.data);
      // JSON responses are automatically parsed.
      this.users = response.data
    })
    .catch(e => {
      this.errors.push(e)
    })

    // async / await version (created() becomes async created())
    //
    // try {
    //   const response = await axios.get(`http://jsonplaceholder.typicode.com/posts`)
    //   this.posts = response.data
    // } catch (e) {
    //   this.errors.push(e)
    // }
  }
}
</script>

<style lang="scss">
  .card {
    margin: 30px 15px;

    .card-content {
      padding: 5px;
    }
  }
  .media-content {
    .title {
      margin-bottom: 5px;
    }

    .url {
      font-size: 13px;
    }
  }

  @media (min-width: 576px) {
    .card-content {
      padding: 20px;
    }
    .media-content {
      .url {
        font-size: 16px;
      }
    }
  }
</style>
