const authors = document.getElementById('authors')
const books = document.getElementById('books')
const customers = document.getElementById('customers')
const checkouts = document.getElementById('checkouts')
const container = document.getElementById('container')

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

async function getData(type) {
  const responce = await fetch(`/${type}`)
  return await responce.json()
}

async function getAuthors() {
  const data = await getData('authors')
  let str = ""
  data.forEach(element => {
    str += "<li>" + element.id + ". " + element.s_name + "</li>"
  });
  container.innerHTML = str
}

async function getBooks() {
  const data = await getData('books')
  let str = ""
  data.forEach(element => {
    str += "<li>" + element.id + ". " + element.title + " " + element.prod_year+ " " + element.price+ " "+ element.category+ " "+ element.quantity+ " "+ element.b_format+ " "+ element.filesize + "</li>"
  });
  container.innerHTML = str
}

async function getCustomers() {
  const data = await getData('customers')
  let str = ""
  data.forEach(element => {
    str += "<li>" + element.id + ". " + element.c_name + " " + element.c_email + "</li>"
  });
  container.innerHTML = str
}

async function getCheckouts() {
  const data = await getData('checkouts')
  let str = ""
  data.forEach(element => {
    str += "<li>" + element.id + ". " + element.c_id + " " + element.ch_type+ " " + element.ch_date + "</li>"
  });
  container.innerHTML = str
}
