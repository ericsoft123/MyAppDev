<template>

      <div class="slide">
                         <div class="cover-spin"  v-if="spin_show"></div>
                             <div class="bg_primary blue_slide_full"></div>
             <div class="slide_images cont_center" v-for="(post,index) in posts" :key="index">

                 <img :src="post.image.fields.file.url" alt="Mission Slide Banner">
                 <div class="cont_center mission_mobile">
                         <div class="mission ">
                                 <h3 class="our_mission">{{post.contentTitle}}</h3>
                          <div v-html="richTextHtml"></div>

                             </div>
                    </div>
                 <ul class="dot dot_slide">
                     <li class="dot_color"></li>
                     <li></li>
                     <li></li>
                     <li></li>
                 </ul>
                 <h3 class="slide_overlaytext">{{post.slide_title}}</h3>


             </div>
         </div>
</template>

<script>
import client from '~/plugins/contentful';
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";// richtext rendering
 export default {
    data() {
      return {
//spin_show:true,
 posts:[],
richTextHtml:'',
      }
    },
    mounted(){
this.loadContentful();
    },
    methods:{

loadContentful(){
  return client.getEntries({
content_type:'post',

    }).then(entries=>{

      this.posts.push(entries.items[0].fields);

      this.richTextHtml= documentToHtmlString(entries.items[0].fields.contentRichtext);
this.spin_show=false;
    }).catch(e=>console.log(e));

}
    },


  }
</script>

<style>

</style>
