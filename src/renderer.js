const fs = require('fs')
const content = window.document.querySelector('.content')
content.ondragenter = content.ondragover = content.ondragleave = () => false
content.ondrop = evt => {
  evt.preventDefault()
  const fp = evt.dataTransfer.files[0].path
  content.innerHTML = fs.readFileSync(fp)
}
