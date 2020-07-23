if (window.requestIdleCallback) {
    requestIdleCallback(function () {
        Fingerprint2.get(function (components) {
          console.log(components) // an array of components: {key: ..., value: ...}
          console.log(window.murmurHash3.x64.hash128(components.join('')))
        })
    })
} else {
    setTimeout(function () {
        Fingerprint2.get(function (components) {
          console.log(components) // an array of components: {key: ..., value: ...}
        })  
    }, 500)
}