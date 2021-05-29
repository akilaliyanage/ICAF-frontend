module.exports = {
      "transform": {
        "^.+\\.js$": "babel-jest",
        ".+\\.(scss)$": "jest-transform-stub"
      },
      "automock": false,
      "setupFiles": [
        "./setupJest.js"
      ]
  }