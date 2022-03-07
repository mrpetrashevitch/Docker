const authors = document.getElementById('authors')
const books = document.getElementById('books')
const customers = document.getElementById('customers')
const checkouts = document.getElementById('checkouts')
const container = document.getElementById('container')
const edit = document.getElementById('textedit')
const send = document.getElementById('button_send')


authors.addEventListener('click', () => {
  getAuthors()
})

books.addEventListener('click', () => {
  getBooks()
})

customers.addEventListener('click', () => {
  getCustomers()
})

checkouts.addEventListener('click', () => {
  getCheckouts()
})

send.addEventListener('click', (e) => {
  e.preventDefault()
  let str = edit.value.trim()
  if(!str) return
  post(str)
})

async function post(str) {
  const responce = await fetch('/', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({q:str})
  })
  if(responce.ok){
  let data = await responce.json()
  view_data(data)
  }else{
  let message = await responce.text()
  alert(message)
  }
}

async function getData(type) {
  const responce = await fetch(`/${type}`)
  return await responce.json()
}

async function getAuthors() {
  const data = await getData('authors')
  view_data(data)
}

async function getBooks() {
  const data = await getData('books')
  view_data(data)
}

async function getCustomers() {
  const data = await getData('customers')
  view_data(data)
}

async function getCheckouts() {
  const data = await getData('checkouts')
  view_data(data)
}

function view_data(data){
  let first = data[0]
  let str_of_title = ""
  let style_of_grid = ""
  for(let key in first){
    str_of_title += `<li class='title'>` + key + "</li>"
    style_of_grid+="max-content "
  }
  let str_of_data=""
  data.forEach(element => {
    for(let key in element){
      str_of_data += "<li>" + element[key] + "</li>"
    }
  });
  container.style.gridTemplateColumns = style_of_grid ? style_of_grid:'max-content'
  container.innerHTML = str_of_title + str_of_data
}
