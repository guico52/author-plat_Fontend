<template>
  <div>
    <VueMarkdown :source="content" />
  </div>
</template>

<script>

import VueMarkdown from "vue-markdown/src/VueMarkdown";

export default {
  name: "WriteArticle",
  components: {VueMarkdown},
  data(){
    return {
      content: ''
    }
  }

}
</script>
<style>
@import "~simplemde/dist/simplemde.min.css";
</style>
