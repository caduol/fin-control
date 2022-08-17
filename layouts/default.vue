<template>
  <div>
    <div class="bg-gray-100">
      <div class="container mx-auto h-10 flex items-center space-x-4 mb-10">
        <nuxt-link :to="{ name: 'a-empresa' }">A empresa</nuxt-link>
        <nuxt-link :to="{ name: 'servicos' }">Serviços</nuxt-link>
        <nuxt-link :to="{ name: 'produtos' }">Produtos</nuxt-link>
      </div>
    </div>
    <div class="container mx-auto">
      <Nuxt />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
