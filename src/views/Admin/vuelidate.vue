<script>
import { reactive, computed } from "vue";
import { useRoute } from "vue-router";
import FromMultiple from "@/components/Form.vue";
import useVuelidate from "@vuelidate/core";
import { required, helpers, minLength, maxLength } from "@vuelidate/validators";

export default {
  components: {
    FromMultiple,
  },
  setup() {
    const route = useRoute();
    const form = reactive({
      name: "",
      date: "",
      gender: "",
      address: "",
      image: null,
    });

    const required_ = "Field tidak boleh kosong";
    const minLength_ = ($params, name_field) => {
      return `Minimal ${name_field} ${$params.min} karakter`;
    };
    const maxLength_ = ($params, name_field) => {
      return `Maksimal ${name_field} ${$params.max} karakter`;
    };

    const validations = computed(() => {
      return {
        name: {
          required: helpers.withMessage(required_, required),
          minLength: helpers.withMessage(
            ({ $params }) => minLength_($params, "nama"),
            minLength(4),
          ),
          maxLength: helpers.withMessage(
            ({ $params }) => maxLength_($params, "nama"),
            maxLength(40),
          ),
        },
        date: {
          required: helpers.withMessage(required_, required),
        },
        gender: {
          required: helpers.withMessage(required_, required),
        },
        address: {
          required: helpers.withMessage(required_, required),
          minLength: helpers.withMessage(
            ({ $params }) => minLength_($params, "alamat"),
            minLength(10),
          ),
          maxLength: helpers.withMessage(
            ({ $params }) => maxLength_($params, "alamat"),
            maxLength(250),
          ),
        },
        image: {
          required: helpers.withMessage(required_, required),
        },
      };
    });

    const v$ = useVuelidate(validations, form);

    return { route, form, v$ };
  },
  methods: {
    submit() {
      const data = {};
      Object.assign(data, this.form);

      this.v$.$validate();
      if (this.v$.$error) return;

      console.log("THIS", data);
    },
    reset() {
      Object.assign(this.form, {
        name: "",
        date: "",
        gender: "",
        address: "",
        image: null,
      });

      this.v$.$reset();
    },
  },
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
      :errormessage="v$"
      :submit="submit"
      :reset="reset"
      @resetImage="
        () => {
          v$.image.$reset();
        }
      "
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
