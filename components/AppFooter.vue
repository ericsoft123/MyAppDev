<template>
     <div class="footer">
 <div class="cover-spin"  v-if="spin_show"></div>
                     <div class="container cont-center" v-for="(footer,index) in footerStatic_content" :key="index">

                         <div class="container cont-center footer_container">
                             <div class="col1">
                              <p>{{footer.f_Text1}}</p>
                              <p>{{footer.f_Text2}}</p>
                             </div>
                             <div class="col2">
                                 <div class="bg_primary"></div>
         <form  @submit.prevent="submit">
             <div class="form_group">
                    <input type="text" class="form_input"  v-model="fields.name" placeholder="My name is..." >
             </div>
             <div class="form_group">
                    <input type="text" class="form_input" v-model="fields.email" placeholder="And I’d like to talk about..." >
             </div>

             <div class="form_group">
                 <input type="text" class="form_input" v-model="fields.message" placeholder="You can reach me at my email address..." >
             </div>

             <div class="form_group">
                    <button class="submitbtn">{{footer.f_btn_Text}} &#8594;</button>
             </div>

         </form>
                             </div>
                         </div>

                     </div>
                    </div>
</template>

<script>
export default {

    data:function(){
        return{
     fields:{},
      spin_show:false,
      footerStatic_content:"",
        }
    },
    mounted(){
this.loadmyStatic_content();
    },
    methods:{
      async loadmyStatic_content(){
 const footercont = await this.$content('contact').fetch();
this.footerStatic_content=footercont;
      },

  submit(){// this Submit Function To AWS
      this.spin_show=true;
      //console.log(this.$config.lambdaURL);
var  myconfig={
        headers: {
          'Content-Type': 'text/plain'
         }
        }


this.$axios.post(this.$config.lambdaURL,this.fields,myconfig)
  .then((response) => {
   this.fields={};//to reset forms

    this.spin_show=false;
    alert("message has been sent");
  }).catch(error=>{
//console.log('error');
alert("Error please contact system Admin");
this.spin_show=false;
  });

  }
    }
}
</script>

<style>

</style>
