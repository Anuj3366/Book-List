import DataTable from "@/common/components/dataTables";
import { useState ,useEffect} from "react";
import { useRouter } from "next/router";


// import dynamic from 'next/dynamic'
 
// const ClientComponent = dynamic(() =>
//   import('../components/hello').then((mod) => mod.Hello) // replace '../components/hello' with your component's location
// )


function HomePage(props) {

  
  // const books = [{ name: "Book1Name", author: "Book1Author", title: "UCA Web", action: "Edit" },
  // { name: "Book2Name", author: "Book2Author", title: "UCA Web", action: "All" },
  // { name: "Book3Name", author: "Book3Author", title: "UCA Web", action: "View" }];
  
  // let promise1 = /*await*/ new Promise((resolve, reject) => {
  //   setTimeout(() => resolve("done!"), 4000);
  // });
  // promise1.then((value) => {
  //   (value) => console.log(value + "value"),
  //   (error) => console.log(error + "error");

  // })


  const handleSubmit = (event) => {
    event.preventDefault();
    const newBook = {
        name: event.target.name.value,
        author: event.target.author.value,
        title: event.target.title.value,
    };
    fetch("http://localhost:3001/books", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(newBook),
    }).then(
        (response) => {
            if (response.status === 201) {
                setShowAlert(true);
            }
        },
        (error) => {
            console.log(error);
        }
    );
};
  let [books,setBooks] = useState([]);
  useEffect(() => {
    fetchData();
  },[]);
  const fetchData = () => fetch(" http://localhost:3001/books")
  .then((response) => {
    return response.json();
  }).then((data) => {
    setBooks(data);
    books = data;
    console.log("The data is", data);
  });

  const editAction = (event) => {
    console.log("The event is", event);
  }

  return (
    <div>
      <div className="container">
        <p>Welcome to Library</p>
        <DataTable data={books} onEdit={editAction} maxSize={10}></DataTable>
      </div>
    </div>
  )
}

export default HomePage;

