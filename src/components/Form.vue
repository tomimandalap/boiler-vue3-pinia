<script setup>
import logo from "../assets/logo.svg";
import { computed } from "vue";

const props = defineProps({
  name: { type: String, default: "" },
  date: { type: String, default: "" },
  gender: { type: String, default: "" },
  address: { type: String, default: "" },
  image: { type: Object, default: () => {} },
  submit: { type: Function, default: () => {} },
  reset: { type: Function, default: () => {} },
});

const emit = defineEmits([
  "update:name",
  "update:date",
  "update:gender",
  "update:address",
  "update:image",
]);

const name_ = computed({
  get() {
    return props.name;
  },
  set(value) {
    emit("update:name", value);
  },
});

const date_ = computed({
  get() {
    return props.date;
  },
  set(value) {
    emit("update:date", value);
  },
});

const gender_ = computed({
  get() {
    return props.gender;
  },
  set(value) {
    emit("update:gender", value);
  },
});

const address_ = computed({
  get() {
    return props.address;
  },
  set(value) {
    emit("update:address", value);
  },
});

const inputImg = (e) => {
  const file = e.target.files[0];
  emit("update:image", file);
};
</script>

<template>
  <form @submit.prevent="submit">
    <div class="form-group">
      <label for="nama">Nama</label>
      <input
        id="nama"
        v-model="name_"
        type="text"
        placeholder="Input your name"
      />
    </div>

    <div class="form-group">
      <label for="tanggallahir">Tanggal Lahir</label>
      <input id="tanggallahir" v-model="date_" type="date" />
    </div>

    <div class="form-group">
      <label for="jeniskelamin">Jenis Kelamin</label>
      <select name="select" v-model="gender_" id="jeniskelamin">
        <option value="null" selected>- Pilih Jenis Kelamin -</option>
        <option value="1">Laki-laki</option>
        <option value="2">Peremuan</option>
      </select>
    </div>

    <div class="form-group">
      <label for="alamat">Alamat</label>
      <textarea
        name="alamat"
        v-model="address_"
        id="alamat"
        rows="5"
      ></textarea>
    </div>

    <div class="form-group">
      <label for="foto">Pas Foto</label>
      <input
        id="foto"
        type="file"
        name="fileupload"
        accept="image/png"
        @input="inputImg"
      />

      <img :src="logo" alt="logo" class="image-foto" />
    </div>

    <button
      type="submit"
      class="btn primary"
      style="width: 100%; margin: 12px 0"
    >
      Submit
    </button>
  </form>
  <button class="btn error" style="width: 100%" @click="reset">Reset</button>
</template>
<style scoped>
div.form-group input,
div.form-group select {
  width: 100%;
  height: 38px;
  padding: 0 6px;
  margin: 6px 0;
}
div.form-group textarea {
  width: 100%;
  padding: 6px;
  margin: 6px 0;
}

div.form-group img.image-foto {
  max-height: 100px;
  width: 100px;
  object-fit: cover;
}
</style>
