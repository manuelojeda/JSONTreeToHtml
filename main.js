const data = {
  tag: "ul",
  children: [
    {
      tag: "li",
      text: "hello"
    },
    {
      tag: "li",
      text: "world"
    }
  ]
};

const setIndentation = (text, spaces) => {
  let indentedHtml = ''

  for (let index = 0; index < spaces; index++) {
    indentedHtml += ' '
  }

  indentedHtml += text
  return indentedHtml
}

const jsonTreeToHTMLList = (data, indentation = null) => {
  const parentOpenTag = `<${data.tag}>`
  const parentCloseTag = `</${data.tag}>`
  
  let finalHtml = parentOpenTag

  data.children.map((child) => {
    const childOpenTag = `<${child.tag}>`
    const childCloseTag = `</${child.tag}>`

    finalHtml += '\n'
    finalHtml += setIndentation(childOpenTag, indentation) + '\n'
    finalHtml += setIndentation(child.text, indentation * 2) + '\n'
    finalHtml += setIndentation(childCloseTag, indentation)
  })

  finalHtml += '\n'
  finalHtml += parentCloseTag

  return finalHtml
}

const html = jsonTreeToHTMLList(data, 4)
console.log(html)

const renderParent = document.querySelector('#app')
renderParent.innerHTML = html
