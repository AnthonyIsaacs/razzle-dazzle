module.exports = {
  namespace: 'rd',
  state: {
    mainFile: {},
    defaultFile: {
      name: 'Introduction',
      content: '# hello --- # there'
    },
    assets: {},
    slideFocus: 0
  },
  reducers: {
    fileRead: (payload, state) => {
      if (payload.name.indexOf(".md") > -1) {
        state.mainFile = {
          name: payload.name,
          content: payload.content
        }
      } else {
        state.assets = {
          name: payload.name,
          content: payload.content
        }
      }
    }
  },
  effects: {
    filesDrop: (data, state, send, done) => {

      function getReaderHandler(fileName) {
        return function (e) {
          console.log('in reader', e)
          send('rd:fileRead', {name: fileName, content: e.target.result}, done)
        }
      }

      for (let i = 0; i < data.length; i++) {
        let reader = new FileReader()
        //check for text or binary
        reader.onload = getReaderHandler(data[i].name)
        reader.readAsText(data[i])
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
