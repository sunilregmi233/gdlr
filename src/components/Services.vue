<template lang="">
    <div style="background: #f7f7f7; height: 100%;" id="id_services">
        <div class="row">
        <div class="col-md-12 col-lg-12 col-xs-12 col-sm-12">
            <h5 class="text-center">My Services
            <br>
            <span
                class="text-center text-grey text-h6">I believe in making a customer rather than a sale.</span>
            </h5>
        </div>
        </div> 
        <div class="q-pa-xl">       
        <div class="row q-col-gutter-sm ">
            <div class="col-md-4 col-lg-4 col-sm-12 col-xs-12">
            <q-item class="box-shadow q-pa-none q-ml-xs ">
                <q-item-section side :style="'background-color:' + theme_color" class="q-pa-sm q-mr-none text-white">
                <q-icon name="compare_arrows" size="65px"></q-icon>
                </q-item-section>
                <q-item-section class="q-pa-md q-ml-none">
                <q-item-label class="text-h6 text-grey-9 text-uppercase">Blockchain</q-item-label>
                <q-item-label class="text-grey-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</q-item-label>
                </q-item-section>
            </q-item>
            </div>
            <div class="col-md-4 col-lg-4 col-sm-12 col-xs-12">
            <q-item class="box-shadow q-pa-none q-ml-xs">
                <q-item-section side :style="'background-color:' + theme_color" class="q-pa-sm q-mr-none text-white">
                <q-icon name="web" size="65px"></q-icon>
                </q-item-section>
                <q-item-section class="q-pa-md q-ml-none">
                <q-item-label class="text-h6 text-grey-9 text-uppercase">Web Design</q-item-label>
                <q-item-label class="text-grey-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</q-item-label>
                </q-item-section>
            </q-item>
            </div>
            <div class="col-md-4 col-lg-4 col-sm-12 col-xs-12">
            <q-item class="box-shadow q-pa-none q-ml-xs q-mr-xs">
                <q-item-section side :style="'background-color:' + theme_color" class="q-pa-sm q-mr-none text-white">
                <q-icon name="fab fa-wordpress" size="65px"></q-icon>
                </q-item-section>
                <q-item-section class="q-pa-md q-ml-none">
                <q-item-label class="text-h6 text-grey-9 text-uppercase">Wordpress</q-item-label>
                <q-item-label class="text-grey-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</q-item-label>
                </q-item-section>
            </q-item>
            </div>
        </div>
        <div class="row q-col-gutter-sm q-mt-lg">
            <div class="col-md-4 col-lg-4 col-sm-12 col-xs-12">
            <q-item class="box-shadow q-pa-none q-ml-xs ">
                <q-item-section side :style="'background-color:' + theme_color" class="q-pa-sm q-mr-none text-white">
                <q-icon name="settings" size="65px"></q-icon>
                </q-item-section>
                <q-item-section class="q-pa-md q-ml-none">
                <q-item-label class="text-h6 text-grey-9 text-uppercase">DevOps</q-item-label>
                <q-item-label class="text-grey-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</q-item-label>
                </q-item-section>
            </q-item>
            </div>
            <div class="col-md-4 col-lg-4 col-sm-12 col-xs-12">
            <q-item class="box-shadow q-pa-none q-ml-xs">
                <q-item-section side :style="'background-color:' + theme_color" class="q-pa-sm q-mr-none text-white">
                <q-icon name="fas fa-database" size="65px"></q-icon>
                </q-item-section>
                <q-item-section class="q-pa-md q-ml-none">
                <q-item-label class="text-h6 text-grey-9 text-uppercase">Big Data</q-item-label>
                <q-item-label class="text-grey-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</q-item-label>
                </q-item-section>
            </q-item>
            </div>
            <div class="col-md-4 col-lg-4 col-sm-12 col-xs-12">
            <q-item class="box-shadow q-pa-none q-ml-xs q-mr-xs">
                <q-item-section side :style="'background-color:' + theme_color" class="q-pa-sm q-mr-none text-white">
                <q-icon name="dynamic_feed" size="65px"></q-icon>
                </q-item-section>
                <q-item-section class="q-pa-md q-ml-none">
                <q-item-label class="text-h6 text-grey-9 text-uppercase">AI</q-item-label>
                <q-item-label class="text-grey-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</q-item-label>
                </q-item-section>
            </q-item>
            </div>
        </div>
        </div>          
    </div>
</template>

<style lang="scss">
#id_services {
    background: white;
}
.q-item {
    background: white;
}
.q-item:hover {
    box-shadow: 20px 20px 50px 15px grey;
    border: 1px solid $info;
    transform: scale(1.1);
    z-index: 1;
}
</style>

<script>
export default {

    setup() {
        const theme_color =  'rgb(0, 163, 82)';
        const background_style = 'background-color:rgba(0, 163, 82, 0.7);';
        const bg_color = 'rgb(0, 163, 82)';
        function changeBgColor () {
            background_style = 'background-color:' + bg_color.split(')')[0] + ',0.7)';
        }
        
        return {
            changeBgColor,
            bg_color: bg_color,
            theme_color: theme_color,
            background_style: background_style,
          
        }
    },
}
</script>