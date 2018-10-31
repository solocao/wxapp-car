<template>
  <div class="container">
    market
  </div>
</template>

<script>

export default {
  data() {
    return {


    };
  },
  methods: {
    async test() {
      const params = {
        url: '/demo',
        payload: {
          saf: 'af',
        },
        auth: true,
      };
      const result = await this.get(params);
      console.log(result);
    },

  },
  mounted() {
    this.test();
  },
};
</script>

<style scoped>
</style>
