if (window.requestIdleCallback) {
    requestIdleCallback(function () {
        Fingerprint2.get(function (components) {
          document.write(components)
          console.log(components) // an array of components: {key: ..., value: ...}
          const hash = window.murmurHash3.x64.hash128(components.join(''))
          document.write(hash)
        })
    })
} else {
    setTimeout(function () {
        Fingerprint2.get(function (components) {
          console.log(components) // an array of components: {key: ..., value: ...}
        })  
    }, 500)
}