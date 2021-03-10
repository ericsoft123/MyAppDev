<template>
   <nav>
                <span style="font-size:30px;cursor:pointer"  @click="openNav()" class="navmenu_open">&#9776; </span>
                <div id="mymenunav" class="menunav" v-for="(pages,index) in  mymenucontent" :key="index">

                    <div class="right_menu">
                            <a href="javascript:void(0)" class="closebtn"  @click="closeNav()" >&times;</a>
                           <div class="main_menu">

                                <nuxt-link :to="pages.about_slug">{{pages.about_menu_title}}</nuxt-link>
                                <nuxt-link :to="pages.mission_slug">{{pages.mission_menu_title}}</nuxt-link>
                                <nuxt-link :to="pages.contact_slug">{{pages.contact_menu_title}}</nuxt-link>

                           </div>


                    </div>

                        <div class="logo_menu">
                             <nuxt-link :to="pages.home_slug"><img :src="require(`~/assets/images/${pages.img_blue}`)"  :alt="pages.imgblue_seo" class="logoblue_bgscrn"></nuxt-link>

                               <nuxt-link :to="pages.home_slug"><img :src="require(`~/assets/images/${pages.img_white}`)"  :alt="pages.imgwhite_seo" class="logowhite_mobile"></nuxt-link>
                        </div>
                      </div>
        </nav>
</template>

<script>


export default {
props:['menucontent'],
    data:function(){
        return{
 mymenucontent:this.menucontent,

        }
    },
    mounted(){
this.loadmyStatic_content();
    },
    methods:{
       async loadmyStatic_content(){

const set_default_undefined=this.menucontent??'none';//set default as none if is undefined
if(set_default_undefined==='none')//this will be called in case we will navigate to other pages
{
   const mycontent = await this.$content('mymenu').fetch();
   this.mymenucontent=mycontent;
}
else{

}

},

  openNav(){
 document.getElementById("mymenunav").style.width = "100%";
  //console.log(this.$config);

  },
   closeNav(){
document.getElementById("mymenunav").style.width = "0";

  }

    }
}
</script>

<style>

</style>
