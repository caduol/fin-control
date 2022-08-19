<template>
  <div>
    <div class="flex items-center justify-between">
      <h1 class="font-bold text-2xl">Categorias</h1>
    </div>
    <!-- <pre>{{ categories }}</pre>: -->
    <div class="mt-6">
      <div>
        <div class="flex items-center space-x-3">
          <div>
            <AppFormInput v-model="name" @keyup.enter="addCategory" />
          </div>

          <AppButton @click="addCategory"> Adicionar </AppButton>
        </div>
      </div>

      <table class="mt-4 min-w-full divide-y divide-gray-200 shadow">
        <thead class="bg-gray-50">
          <tr>
            <th
              scope="col"
              class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Categoria
            </th>
            <th scope="col" class="relative px-6 py-3">
              <span class="sr-only">Edit</span>
            </th>
          </tr>
        </thead>
        <tbody class="bg-white divide-y divide-gray-200">
          <tr
            class="bg-white"
            v-for="category in categories"
            :key="category.id"
          >
            <td
              class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"
            >
              <div v-if="category.is_updating">
                <AppFormInput
                  v-model="category.name"
                  @keyup.enter="updateCategory(category)"
                />
              </div>
              <template v-else>
                {{ category.name }}
              </template>
            </td>

            <td
              class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium space-x-4"
            >
              <a
                href="#"
                class="text-indigo-600 hover:text-indigo-900"
                @click.prevent="() => toUpdate(category)"
                >Edit
              </a>

              <a
                href="#"
                class="text-red-600 hover:text-red-900"
                @click.prevent="() => deleteCategorie(category.id)"
                >Excluir
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import AppButton from "~/components/Ui/AppButton";
import AppFormInput from "~/components/Ui/AppFormInput";
import AppFormLabel from "~/components/Ui/AppFormLabel";

export default {
  name: "categoriesPage",

  components: {
    AppButton,
    AppFormInput,
    AppFormLabel,
  },

  data() {
    return {
      name: "",
    };
  },

  async asyncData({ store }) {
    return {
      categories: await store
        .dispatch("categories/getCategories")
        .then((res) => res.map((o) => ({ ...o, is_updating: false }))),
    };
  },

  methods: {
    deleteCategorie(id) {
      this.$store.dispatch("categories/deleteCategory", id).then(() => {
        let idx = this.categories.findIndex((o) => o.id === id);
        this.categories.splice(idx, 1);
      });
    },
    toUpdate(category) {
      category.is_updating = true;
    },
    updateCategory(category) {
      let data = {
        name: category.name,
      };
      this.$store
        .dispatch("categories/updateCategory", {
          id: category.id,
          data,
        })
        .then(() => {
          category.is_updating = false;
        });
    },
    addCategory() {
      const data = {
        name: this.name,
      };

      let hasEqualItem = this.categories.some((item) => {
        return item.name === this.name;
      });

      if (hasEqualItem || !this.name) return;

      this.$store.dispatch("categories/addCategory", data).then((response) => {
        this.categories.push(response);
        this.name = "";
      });
    },
  },
};
</script>
