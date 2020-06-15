<template>
  <div class="main">
    <el-card shadow="always" v-for="(item, i) in pic" :key="i">
        
        <img :src="item" alt="">

    </el-card>
</div>
</template>
<script>
export default {
  data() {
    return {
      pic: [
        'https://i.loli.net/2020/06/13/OsRbgXMzWFEG3VT.jpg',
        'https://i.loli.net/2020/06/15/TVb7kNRCWABtrvp.jpg',
        'https://i.loli.net/2020/06/15/k9tIQxO8LUlS1pG.jpg',
        'https://i.loli.net/2020/06/15/lPCLMWirZ81uEJ6.jpg',
        'https://i.loli.net/2020/06/15/yBiHkshZ9dncP18.jpg',
        'https://i.loli.net/2020/06/15/xgAL8KFs6qzNrek.jpg',
        'https://i.loli.net/2020/06/15/Gekm69Q1ps3gEtZ.jpg',
        'https://i.loli.net/2020/06/15/muTq6CnEhPxdRGW.jpg',
        'https://i.loli.net/2020/06/15/4Fl3hjNI1x6Zq95.jpg',
        'https://i.loli.net/2020/06/15/4ZfHw1RiTqDc9an.jpg',
        'https://i.loli.net/2020/06/15/bAZioCT26FhSkME.jpg',
        'https://i.loli.net/2020/06/15/YZXcVatBzWQADoC.jpg',
        'https://i.loli.net/2020/06/15/MJ1TrdRDsoqV6ej.jpg',
        'https://i.loli.net/2020/06/15/yfuQBEAYJSlTLDh.jpg',
        'https://i.loli.net/2020/06/15/boidJ4YnXsxKBEl.jpg',
        'https://i.loli.net/2020/06/15/WxaRHiq45Vph1KX.jpg'
        
        
        
        ]
    }
  }
}
</script>
<style scoped>
.main {
  display: flex;
  flex-wrap: wrap;
}
img {
  width: 100%;
  max-height: 170px;
}
.el-card {
  width: 350px;
  height: 210px;
  margin: 20px;
}
.el-card:hover {
  transition: width 1s, height 1s, opacity 1s, transform 2s;
  /* margin: 20px; */
  transform: scale(1.2);
  /* border-radius: 30px; */
  /* transition: 3*/
}

</style>