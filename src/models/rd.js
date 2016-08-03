const tutorial = require('../../libs/tutorial')
const marked = require('marked')

module.exports = {
  namespace: 'rd',
  state: {
    name: "tutorial",
    content: tutorial,
    slides: [],
    assets: []
  },
  reducers: {
    updatePresentationAssets: () => {
      //state.mainFile
    },
    addMainFile: (payload, state) => {
      state.name = payload.name
    },
    addAssetFile: (payload, state) => {
      state.assets.push(payload)
    },
    editorUpdate: (payload, state) => {
      state.content = payload.content
      state.slides = state.content.split('---').map((slide) => {
        return marked(slide)
      })
    }
  },

  effects: {
    init: (data, state, send, done) => {
      send('rd:editorUpdate', {content: tutorial}, done)
    },
    handleDroppedFiles: (data, state, send, done) => {

      function getMainHandler(fileName) {
        send('rd:addMainFile', { name: fileName }, done)
        return function (e) {
          send('rd:editorUpdate', { content: e.target.result }, done)
        }
      }

      function getAssetHandler(fileName) {
        return function (e) {
          console.log('in reader', e)
          send('rd:addAssetFile', { name: fileName, content: e.target.result }, done)
        }
      }

      for (let i = 0; i < data.length; i++) {
        let reader = new FileReader()
        if(data[i].name.indexOf('.md')) {
          reader.onload = getMainHandler(data[i].name)
          reader.readAsText(data[i])
        } else {
          reader.onload = getAssetHandler(data[i].name)
          reader.readAsBinary(data[i])
        }
      }
    }
  },

  subscriptions: {
    keyboardCapture: (send, done) => {
      document.addEventListener('keydown', function (event) {
        if (event.keyCode == 37) { //Left
          console.log('Left was pressed');
        }
        else if (event.keyCode == 39) { //Right
          console.log('Right was pressed');
        }
      });
    }
  }
}
