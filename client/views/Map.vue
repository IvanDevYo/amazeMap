<template>
    <div>
        <LMap style="height: 100vh; width: 100%" :zoom="mapOption.zoom" :center="mapOption.center">
            <LTileLayer :url="mapOption.url"></LTileLayer>
        </LMap>
    </div>
</template>

<script>
import Vue from 'vue'
import {LMap, LTileLayer, LMarker } from 'vue2-leaflet'

export default {
  components: {
    LMap,
    LTileLayer,
    LMarker
  },
  data() {
    return {
      mapOption: {
        url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
        zoom: 8,
        center: [37.313220, -37.319482],
      },
    }
  },
  created() {

  }
}
</script>
