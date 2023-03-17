async function main(){
    let respose = await fetch('http://localhost:3001/listBooks')
    let books = await response.json()

    console.log(books)

    books.forEach(function(book){

        let bookContainer = document.querySelector('#root')

        let li = document.createElement('li')
        li.textContent = book.title

        

        

        
    })
}

main()
// Your Code Here
