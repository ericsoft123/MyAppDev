<template>

      <div class="grids_div">




                           <div class="container cont_center" v-for="(about,index) in aboutStatic_content" :key="index">
                                <div class="col1 col">
                                        <h2>{{about.ab_Text1}}</h2>

                                        <div class="bg_primary blue_about"></div>
                                       </div>
                                       <div class="column">

                                            <div class="col2 col">
                                                    <p>{{about.ab_Text2}}.</p>
                                                </div>
                                                <div class="col3 col">
                             <p>{{about.ab_Text3}}. </p>
                                                </div>
                                       </div>

                           </div>
       </div>
</template>

<script>
import client from '~/plugins/contentful';

export default {
    data() {
      return {
aboutStatic_content:'',
      }
    },
     mounted(){
this.loadmyStatic_content();
    },
    methods:{
 async loadmyStatic_content(){
  const aboutcont = await this.$content('aboutdata').fetch();
this.aboutStatic_content=aboutcont;

}
    }
  }
</script>

<style>

</style>
