<template>
  <div class="container" style="text-align:center">
    <!-- <div class="large-12 medium-12 small-12 cell"> -->
    <toggle-button
      @change="onChangeEventHandler"
      :labels="{checked: 'On', unchecked: 'Off'}"
      style="margin-top: 10px"
    />
    <!-- </div> -->
  </div>
</template>
  
<script>
export default {
  data() {
    return {
      file: ""
    };
  },

  methods: {
    onChangeEventHandler() {
      //   setTimeout(function() {
      //     location.reload();
      //   }, 3000);
      //   alert('hi');
      // var index = browser;
      // console.log(index);
      var firstHref = $("a[href^='http']")
        .eq(0)
        .attr("href");

      console.log(firstHref);
    }
  }
};
</script>