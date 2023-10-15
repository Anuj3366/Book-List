import DataTable from "@/common/components/dataTable";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

function HomePage() {
  const [books, setBooks] = useState([]);
  const router = useRouter();
  // let name = "Anuj";
  // const books = [
  //   { name: "Book1Name", author: "Book1Author", title: "UCA Web Technologies" },
  //   { name: "Book2Name", author: "Book2Author", title: "UCA Web Technologies" },
  //   { name: "Book3Name", author: "Book3Author", title: "UCA Web Technologies" },
  // ];

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    fetch("http://localhost:3001/books")?.then(
      async (response) => {
        try {
          let booksData = await response?.json();
          setBooks(booksData);
        }
        catch (error) { console.log("***ERROR***", error) }
      }
    );
  };

  const editAction = (selectedBook) => {
    console.log("The selected data is : ", selectedBook);
    router.push({ pathname: "/editbook", query: selectedBook }, "/editbook");
  };

  const deleteAction = (selectedBook) => {
    console.log("The selected data to delete is : ", selectedBook);
    fetch("http://localhost:3001/books/" + selectedBook.id, {
      method: "DELETE",
    }).then(async (response) => {
      console.log("The response is : ", response);
      fetchData();
    });
  }

  return (
    <div className="container">
      <DataTable
        data={books}
        maxSize={10}
        editAction={editAction}
        deleteAction={deleteAction}
      ></DataTable>
      <div style={{ margin: "20px", paddingLeft: "300px" }}></div>
    </div>
  );
}

export default HomePage;