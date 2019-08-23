Page({
    data: {
      markers: [{
        iconPath: "../../sources/imgs/local.png",
        id: 0,
        latitude: 31.5719100000,
        longitude: 107.0843300000,
        width: 50,
        height: 50
      }],
    },
    regionchange(e) {
      console.log(e.type)
    },
    markertap(e) {
      console.log(e.markerId)
    },
    controltap(e) {
      console.log(e.controlId)
    }
  })