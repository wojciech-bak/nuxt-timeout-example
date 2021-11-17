<template>
<div>
  {{ something }}
</div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters({
      something: 'test/something'
  })
  }
}
</script>
