
function stopBehavior(e) {
  event.stopPropagation()
  event.preventDefault()
  return true;
}

function dragHandler(e) {
  stopBehavior(e)
  console.log('dragging over');
}

function dragOutHandler(e) {
  stopBehavior(e)
  console.log('dragging off');
}

function dropHandler(e, send) {
  stopBehavior(e)
  let files = e.target.files || e.dataTransfer.files
  send('rd:handleDroppedFiles', files)
}

module.exports = {
  stopBehavior,
  dragHandler,
  dragOutHandler,
  dropHandler
}
