<template>
      <ul>
        <li
          class="list-group-item text-9xl"
          v-for="(user, index) in users"
          :key="index"
        >
          {{ user.name }}
          {{ user.username }}
        </li>
      </ul>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import UserDataService from "../services/UserDataService";
import ResponseData from "../types/ResponseData";
import UserType from "../types/userType";

export default defineComponent({
  name: "user-list",
  data() {
    return {
      users: [] as UserType[], 
    };
  },
  methods: {
    retrieveUsers() {
      UserDataService.getAll()
        .then((response: ResponseData) => {
          this.users = response.data;
          console.log(response.data);
        })
        .catch((e: Error) => {
          console.log(e);
        });
    },

    // removeLastUser() {
    //   UserDataService.delete()
    //     .then((response: ResponseData) => {
    //       console.log(response.data);
    //       this.refreshList();
    //     })
    //     .catch((e: Error) => {
    //       console.log(e);
    //     });
    // },
  },
  mounted() {
    this.retrieveUsers();
  },
});
</script>

<style>
.list {
  text-align: left;
  max-width: 750px;
  margin: auto;
}
</style> 