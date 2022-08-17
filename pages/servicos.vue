<template>
  <div>
    <h1 class="text-lg font-bold">Serviços</h1>
    <nuxt-link to="/servicos/desenvolvimento-de-sites"
      >Desenvolvimento de Sites</nuxt-link
    >
    <nuxt-link to="/servicos/marketing-digital">Marketing Digital</nuxt-link>
    <br /><br />
    <ul v-for="service in services" :key="service.id">
      <li class="border-b border-gray-400 py-4 font-bold">
        {{ service.name }}
      </li>
    </ul>
    <br /><br /><br />
    {{ $fetchState }}
    <nuxt-child />
  </div>
</template>

<script>
export default {
  name: "Services",
  // middleware() {
  //   console.log("usando o middleware anonimo");
  // },
  data() {
    return {
      services: [],
    };
  },
  async fetch() {
    this.services = await this.$axios
      .get("users?_limit=2")
      .then(({ data }) => {
        return data;
      })
      .catch((err) => {});
  },
};
</script>

<style></style>
