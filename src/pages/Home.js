import { useState,useEffect } from 'react'
import BookList from '../components/BookList'
import BookForm from '../components/BookForm'
import {db} from '../fireBase/config'
import {collection,getDoc, getDocs} from 'firebase/firestore'
import {useCollection} from '../hooks/useCollection';


export default function Home() {


  const {documents:books}=useCollection('books');

//   const [books, setBooks] = useState(null)

// useEffect(()=>{
// const ref=collection(db,'books')

// getDocs(ref)
// .then((snap)=>{
// let result=[];
//   snap.forEach(doc=>{
//     console.log(doc.data())
//     result.push({id:doc.id,...doc.data()})
//   })
// setBooks(result)
// })
// },[])

  return (
    <div className="App">
      {books && <BookList books={books} />}
      <BookForm />
    </div>
  );
}
