<template>

    <div>



      <AppHeader v-bind:menucontent="menucontent"/>
      <AppBanner/>
      <AppAbout />
      <AppMission />
      <AppFooter/>

    </div>

</template>

<script>



export default {

  async asyncData ({ $content }) {
    const menucontent = await $content('mymenu').fetch()

    return {
      menucontent,

    }
  },
    head() {
      return {
        title:this.menucontent[0].title_page,
        meta: [
          // hid is used as unique identifier. Do not use `vmid` for it as it will not work
          {
            hid:this.menucontent[0].hid,
            name: 'description',
            content:this.menucontent[0].description
          }
        ]
      }
    }
  }
</script>

<style>

</style>
