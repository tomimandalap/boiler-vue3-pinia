<script setup>
import logo from "../assets/logo.svg";
import { computed, ref } from "vue";

const props = defineProps({
  name: { type: String, default: "" },
  date: { type: String, default: "" },
  gender: { type: String, default: "" },
  address: { type: String, default: "" },
  image: { type: Object, default: () => {} },
  submit: { type: Function, default: () => {} },
  reset: { type: Function, default: () => {} },
  errormessage: { type: Object, default: () => {} },
});

const imgprofile = ref(null);

const emit = defineEmits([
  "update:name",
  "update:date",
  "update:gender",
  "update:address",
  "update:image",
  "resetImage",
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

const uploadimage = () => {
  const isElement = document.getElementById("imageavatar");
  isElement.value = null;
  isElement.click();
  emit("resetImage");
};

const inputImg = (e) => {
  const file = e.target.files[0];
  const type = file.type;

  if (file && !["image/png", "image/jpeg"].includes(type)) {
    alert("Format file tidak sesuai, harus PNG");
    const isElement = document.getElementById("imageavatar");
    isElement.value = null;
  } else {
    const reader = new FileReader();
    reader.addEventListener("load", (readerEvent) => {
      var image = new Image();
      image.src = readerEvent.target.result;
      imgprofile.value = image.src;
    });
    reader.readAsDataURL(file);
    emit("update:image", file);
  }
};

const deleteimage = () => {
  const isElement = document.getElementById("imageavatar");
  imgprofile.value = isElement.value = null;
  emit("update:image", {});
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
        maxlength="50"
        placeholder="Input your name"
      />
      <span
        v-if="errormessage.name && errormessage.name.$error"
        style="color: red; font-size: 12px"
      >
        {{ errormessage.name.$errors[0].$message }}
      </span>
    </div>

    <div class="form-group">
      <label for="tanggallahir">Tanggal Lahir</label>
      <input id="tanggallahir" v-model="date_" type="date" />
      <span
        v-if="errormessage.date && errormessage.date.$error"
        style="color: red; font-size: 12px"
      >
        {{ errormessage.date.$errors[0].$message }}
      </span>
    </div>

    <div class="form-group">
      <label for="jeniskelamin">Jenis Kelamin</label>
      <select name="select" v-model="gender_" id="jeniskelamin">
        <option :value="null" selected>- Pilih Jenis Kelamin -</option>
        <option value="1">Laki-laki</option>
        <option value="2">Peremuan</option>
      </select>
      <span
        v-if="errormessage.gender && errormessage.gender.$error"
        style="color: red; font-size: 12px"
      >
        {{ errormessage.gender.$errors[0].$message }}
      </span>
    </div>

    <div class="form-group">
      <label for="alamat">Alamat</label>
      <textarea
        name="alamat"
        v-model="address_"
        id="alamat"
        rows="5"
        maxlength="300"
      ></textarea>
      <span
        v-if="errormessage.address && errormessage.address.$error"
        style="color: red; font-size: 12px"
      >
        {{ errormessage.address.$errors[0].$message }}
      </span>
    </div>

    <div class="form-group">
      <label for="imageavatar">Pas Foto</label>
      <input
        id="imageavatar"
        type="file"
        name="fileupload"
        accept="image/*"
        style="display: none"
        @input="inputImg"
      />

      <div class="card-image">
        <img
          :src="imgprofile ? imgprofile : logo"
          alt="logo"
          class="image-foto"
        />
      </div>

      <br />
      <button @click="uploadimage">Upload Avatar</button>
      <button v-if="imgprofile" @click="deleteimage" style="margin-left: 12px">
        Delete
      </button>
      <br />

      <span
        v-if="errormessage.image && errormessage.image.$error"
        style="color: red; font-size: 12px"
      >
        {{ errormessage.image.$errors[0].$message }}
      </span>
    </div>

    <button
      type="submit"
      class="btn primary"
      style="width: 100%; margin-top: 12px; margin-bottom: 12px"
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

.card-image {
  min-height: 200px;
  max-width: 300px;
  background: rgba(60, 60, 60, 0.29);
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 12px 0 0 0;
  padding: 12px;
}
img.image-foto {
  height: auto;
  width: 200px;
  object-fit: contain;
}
</style>
