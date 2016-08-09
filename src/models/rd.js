// const tutorial = require('../../libs/tutorial')
const marked = require('marked')
const fileSaver = require('FileSaver.js')

module.exports = {
  namespace: 'rd',
  state: {
    name: "",
    content: "",
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
    },
    setUpTour: (payload, state) => {
      state.name = payload.name
      state.content = payload.content
    },
    exportFile: (payload, state) => {
      console.log('in export')
      let blob = new Blob([state.content], { type: "text/plain;charset=utf-8"})
      let fileName = state.name || 'razzle-dazzle'
      fileSaver.saveAs(blob, `${fileName}.md`)
    }
  },

  effects: {
    init: (data, state, send, done) => {
      send('rd:editorUpdate', {content: ""}, done)
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
    },
    tour: (data, state, send, done) => {
      let setUpTour = {
        name: 'Slide Tour',
        content: `
          # Welcome
          Thanks for using Razzle Dazzle
          ---
          # Tutorial
          This is a getting starting guide
          ---
          # Steps
          - step 1
          - step 2
          - step 3`
      }
      send('rd:setUpTour', setUpTour, done)
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
