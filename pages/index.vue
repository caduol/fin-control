<template>
  <div>
    <VTooltip>
      <a>Sponsor me</a>

      <template #popper> Help me fund my Open Source work! </template>
    </VTooltip>
    {{ user }}
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "IndexPage",
  mounted() {
    console.log(this.$name("Jon"));
    console.log(this.$dayjs().format());
  },
  computed: {
    ...mapState({
      user: (state) => state.user,
    }),
  },
};
</script>
