<template>
  <div>
      <AppHeader/>

<h1 class="mytitle_center">{{title}}</h1>


<AppMission/>
    <AppFooter/>
  </div>
</template>

<script>

 export default {
   async asyncData ({ $content }) {
    const static_content = await $content('mission').fetch()



    return {
       static_content,
       title:static_content[0].title

    }
  },
    head() {
      return {

       title:this.static_content[0].title_page,
        meta: [
          // hid is used as unique identifier. Do not use `vmid` for it as it will not work
          {
            hid: this.static_content[0].hid,
            name: 'description',
            content:this.static_content[0].description,
          }
        ]
        ,
        link: [//static on static folder
      {
        rel: "stylesheet",
        href: "/index.css"
      }
    ]
      }
    },

  }
</script>

<style >



</style>
