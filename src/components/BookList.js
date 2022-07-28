import {db} from '../fireBase/config'
  import {deleteDoc, doc} from 'firebase/firestore'

export default function BookList({ books }) {
  

  //silme işlemi
    const handleClick = async (id) => {
      //console.log(id)
      const ref=doc(db,'books',id)

      await deleteDoc(ref)
    }
  
    return (
      <div className="book-list">
        <ul>
          {books.map(book => (
            <li key={book.id} onClick={() => handleClick(book.id)}>{book.title}</li>
          ))}
        </ul>
      </div>
    )
  }
  