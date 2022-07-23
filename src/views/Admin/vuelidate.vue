<script setup>
import { reactive } from "vue";
import { useRoute } from "vue-router";
import FromMultiple from "@/components/Form.vue";

const route = useRoute();
const form = reactive({
  name: "",
  date: "",
  gender: "",
  address: "",
  image: "",
});

const reset = () => {
  Object.assign(form, {
    name: "",
    date: "",
    gender: "",
    address: "",
    image: "",
  });
};

const submit = () => {
  const data = {};
  Object.assign(data, form);
  console.log("THIS", data);
};
</script>

<template>
  <div class="form">
    <div class="breadcrum">
      <h4 class="breadcrum_title">
        Example {{ route.name }} and multiple v-model
      </h4>
    </div>

    <FromMultiple
      v-model:name="form.name"
      v-model:date="form.date"
      v-model:gender="form.gender"
      v-model:address="form.address"
      v-model:image="form.image"
      :submit="submit"
      :reset="reset"
    />
  </div>
</template>
<style scoped>
div.form div.breadcrum {
  background: rgba(60, 60, 60, 0.29);
  color: white;
  padding: 12px;
  margin: 12px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
