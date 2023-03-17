async function main(){
    let response = await fetch('http://localhost:3001/listBooks')
    let books = await response.json()

    
    books.forEach(function(book){

        let bookContainer = document.querySelector('#root')

        let li = document.createElement('li')
        li.textContent = book.title

        let qtyInput = document.createElement('input')
        qtyInput.value = book.quantity
            
        let updateBtn = document.createElement('button')
        updateBtn.textContent = 'Save'
            
        updateBtn.addEventListener('click', () => {
            fetch('http://localhost:3001/updateBook', {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    id: book.id,
                    quantity: qtyInput.value
                })
            })
        })

        li.append(qtyInput, updateBtn)
        bookContainer.append(li)
            
        
    })
}
main()
// Your Code Here
