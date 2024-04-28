// import { useContext, useEffect, useState } from 'react'
// import { Card, Spinner } from 'flowbite-react';
// import { AuthContext } from '../../contexts/AuthProvider';

// export default function Shop() {
//   const {loading } = useContext(AuthContext);
//   const [books, setBooks] = useState([]);
// // fetching data
//   useEffect(() =>{
//     fetch('http://localhost:5000/all-books')
//     .then(res => res.json())
//     .then(data => setBooks(data))
//   }, [loading]);

//     // loader
//     if (loading) {
//       return <div className="text-center mt-28">
//           <Spinner aria-label="Center-aligned spinner example" />
//       </div>
//   }


//   return (
//     <div className='my-28 px-4 lg:px-24'>
//       <h2 className='text-3xl font-bold text-center mb-16 z-40'>All Books are Available Here</h2>
//         <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8'>
//           {
//             books.map(book => <Card >
//               <img src={book.imageURL} alt="" className='h-96' />
//               <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
//                 <p>
//                   {book.bookTitle}
//                 </p>
//               </h5>
//               <p className="font-normal text-gray-700 dark:text-gray-400">
//                 <p>
//                   Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order....
//                 </p>
//               </p>

//               <button className='px-4 py-2 bg-blue-600 text-white rounded'>Buy Now</button>
//             </Card>)
//           }
//         </div>
//     </div>
//   )
// }

import React, { useContext, useEffect, useState } from 'react';
import { Card, Spinner } from 'flowbite-react';
import { AuthContext } from '../../contexts/AuthProvider';

const Shop = () => {
  const { loading } = useContext(AuthContext);
  const [books, setBooks] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch('https://mern-server-bay.vercel.app/all-books'); // Adjust URL if needed
        if (!response.ok) {
          throw new Error('Failed to fetch books');
        }
        const data = await response.json();
        setBooks(data);
      } catch (err) {
        setError(err.message);
        console.error('Fetch error:', err);
      }
    };

    fetchBooks(); // Fetch books when component mounts
  }, [loading]);

  if (loading) {
    return (
      <div className="text-center mt-28">
        <Spinner aria-label="Loading..." />
      </div>
    );
  }

  if (error) {
    return <div>Error fetching books: {error}</div>; // Display error message
  }

  return (
    <div className="my-28 px-4 lg:px-24">
      <h2 className="text-3xl font-bold text-center mb-16 z-40">
        All Books are Available Here
      </h2>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
        {books.map((book) => (
          <Card key={book._id}> {/* Use unique identifier as key */}
            <img src={book.imageUrl} alt={book.bookTitle} className="h-96" />
            <h5 className="text-2xl font-bold tracking-tight text-gray-900">
              {book.bookTitle}
            </h5>
            <p className="font-normal text-gray-700">{book.bookDescription}</p>
            <button className="px-4 py-2 bg-blue-600 text-white rounded">
              Buy Now
            </button>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Shop;