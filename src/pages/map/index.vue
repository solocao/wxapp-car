<template>
  <div>
    <button @click="afasf">点击点击</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      markers: [{
        iconPath: "../../static/images/map/marker.png",
        id: 0,
        latitude: 23.099994,
        longitude: 113.324520,
        width: 50,
        height: 50
      }],
      polyline: [{
        points: [{
          longitude: 113.3245211,
          latitude: 23.10229
        }, {
          longitude: 113.324520,
          latitude: 23.21229
        }],
        color: "#FF0000DD",
        width: 2,
        dottedLine: true
      }],
      controls: [{
        id: 1,
        iconPath: "../../static/images/map/marker.png",
        position: {
          left: 0,
          top: 300 - 50,
          width: 50,
          height: 50
        },
        clickable: true
      }]
    }
  },
  methods: {
    afasf() {
      wx.openLocation({
        latitude: 41.12154,
        longitude: 122.0518,
        name: "去的地方",
        scale: 15
      })
    }
  }
}
</script>

