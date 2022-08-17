<template>
  <div>
    <h1 class="text-lg font-bold">Produtos</h1>
    <nuxt-link :to="{ name: 'produtos-produto-a' }">Produtos A</nuxt-link>
    <nuxt-link :to="{ name: 'produtos-produto-b' }">Produtos B</nuxt-link>

    <ul v-for="product in products" :key="product.id">
      <li class="font-bold">{{ product.title }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Products",
  computed: {},
  async asyncData({ $axios }) {
    const products = await $axios.get("posts?_limit=2").then(({ data }) => {
      return data;
    });
    return {
      products,
    };
  },
};
</script>

<style></style>
