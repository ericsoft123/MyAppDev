<template>
     <div>


         <div class="top_banner" v-for="(banner,index) in bannerStatic_content" :key="index">
                        <div class="myimage_logo" >
                                <img :src="require(`~/assets/images/${banner.b_Logo}`)" :alt="banner.b_Logo_seo" class="logo_mobile">
                        </div>

                        <div class="title_ads">
                            <p class="titlebanner">{{banner.b_Text1}} </p>
                            <p class="titlebanner2">{{banner.b_Text2}}</p>
                            <p class="forget_p">{{banner.b_Text3}}  <span class="no_color">{{banner.b_Text4}}</span></p>
                        </div>

                        <div class="col_banner">

                             <img :src="require(`~/assets/images/${banner.b_bgimg}`)" :alt="banner.b_bgimg_seo">
                        </div>
         </div>
     </div>
</template>



<script>
export default {
    data() {
      return {
bannerStatic_content:'',
      }
    },
     mounted(){
this.loadmyStatic_content();
    },
    methods:{
 async loadmyStatic_content(){
  const bannercont = await this.$content('topbanner').fetch();
this.bannerStatic_content=bannercont;

}
    }
  }
</script>

<style>

</style>
