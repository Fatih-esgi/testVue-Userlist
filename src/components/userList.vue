<template>
  <div class="bg-white pb-4 px-4 rounded-md w-full">
    <p class="text-left text-4xl py-6">Add a new user</p>
    <div class="flex justify-left w-full pt-6">
      <div>
        <input
          type="text"
          class="
            rounded
            mr-3
            px-4
            py-4
            bg-gray-200
            border border-gray-400
            mb-6
            text-gray-700
            placeholder-gray-700
            focus:bg-white
            focus:outline-none
          "
          placeholder="Name"
          v-model="name"
        />
        <input
          type="text"
          class="
            rounded
            mr-3
            px-4
            py-4
            bg-gray-200
            border border-gray-400
            mb-4
            text-gray-700
            placeholder-gray-700
            focus:bg-white
            focus:outline-none
          "
          placeholder="UserName"
          v-model="username"
        />
        <input
          type="email"
          class="
            rounded
            mr-3
            px-4
            py-4
            bg-gray-200
            border border-gray-400
            mb-4
            text-gray-700
            placeholder-gray-700
            focus:bg-white
            focus:outline-none
          "
          placeholder="E-mail"
          v-model="email"
        />
      <button
        class="
          bg-green-700
          px-5
          py-4
          text-sm
          shadow-sm
          font-medium
          tracking-wider
          border
          hover:shadow-lg
          hover:bg-green-400
        "
        @click="addUser"
      >
        <p class="text-white">add User</p>
      </button>
      </div>
    </div>
    <div class="w-full flex justify-end px-2 mt-2"></div>
    <div class="overflow-x-auto mt-6">
      <h1 class="text-4xl text-left py-6">Users list</h1>
      <table class="table-auto border-collapse w-full">
        <thead>
          <tr
            class="rounded-lg text-sm font-medium text-gray-600 text-left"
            style="font-size: 0.9674rem"
          >
            <th class="px-4 py-2 text-left" style="background-color: #f8f8f8">
              Name
            </th>
            <th class="px-4 py-2 bg-gray-200" style="background-color: #f8f8f8">
              UserName
            </th>
            <th class="px-4 py-2 text-left" style="background-color: #f8f8f8">
              E-Mail
            </th>
          </tr>
        </thead>
        <tbody class="text-sm font-normal text-gray-700">
          <tr
            class="hover:bg-gray-100 border-b border-gray-200 py-10"
            v-for="(user, index) in users"
            :key="index"
            v-bind:id="user.id"
          >
            <td class="px-4 py-4 text-left">{{ user.name }}</td>
            <td class="px-4 py-4 text-left">{{ user.username }}</td>
            <td class="px-4 py-4 text-left">{{ user.email }}</td>
          </tr>
        </tbody>
      </table>
      <button
        class="
          bg-red-700
          mt-12
          px-5
          py-3
          text-sm
          shadow-sm
          font-medium
          tracking-wider
          border
          text-red-600
          rounded-full
          hover:shadow-lg
          hover:bg-red-600
        "
        @click="removeLastUser"
      >
        <p class="text-white">Delete last User</p>
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import UserDataService from "../services/UserDataService";
import ResponseData from "../types/responseData";
import UserType from "../types/userType";

export default defineComponent({
  name: "user-list",

  data() {
    return {
      users: [] as UserType[],
      isModalVisible: false,
      name: "",
      username: "",
      email: "",
      id: "",
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

    removeLastUser() {
      let last = this.users.splice(-1)[0];
      // console.log(last);

      UserDataService.delete(last.id)
        .then((response: ResponseData) => {
          console.log(response.data);
        })
        .catch((e: Error) => {
          console.log(e);
        });
    },

    addUser() {
      let last = this.users.slice(-1)[0].id;
      let id= last+=1;
      this.users.push({
        id: id,
        name: this.name,
        username: this.username,
        email: this.email,
      });

       UserDataService.add({
        id: id,
        name: this.name,
        username: this.username,
        email: this.email,
      })
        .then((response: ResponseData) => {
          console.log("resp",response.data);
        })
        .catch((e: Error) => {
          console.log(e);
        });
    },
  },
  mounted() {
    this.retrieveUsers();
  },
});
</script>

<style>
thead tr th:first-child {
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
}
thead tr th:last-child {
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
}

tbody tr td:first-child {
  border-top-left-radius: 5px;
  border-bottom-left-radius: 0px;
}
tbody tr td:last-child {
  border-top-right-radius: 5px;
  border-bottom-right-radius: 0px;
}
</style> 