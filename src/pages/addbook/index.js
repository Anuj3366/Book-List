import UAlert from "@/common/components/alert";
import UInput from "@/common/components/uInput";
import { useState } from "react";
function Addbook() {
    const [showAlert, setShowAlert] = useState(false);
    const handleSubmit = (event) => {
        event.preventDefault();
        const newBook = {
            name: event.target.name.value,
            author: event.target.name.value,
            title: event.target.name.value,
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
    const closeAlert = () => {
        setShowAlert(false);
    };
    return (
        <>
            <UAlert message="Book Added Successfully" show={showAlert} closeAlert={closeAlert}></UAlert>
            <form onSubmit={handleSubmit}>
                <UInput id="Book" placeholder="Book Name" label="Book Name" type="text" name="Book"></UInput>
                <UInput id="Author" name="author" placeholder="Author Name" label="Author Name" type="text"></UInput>
                <UInput id="Title" name="title" placeholder="Book Title" label="Book Title" type="text"></UInput>
                <button type="submit" onClick={handleSubmit}>Submit</button>
            </form>
        </>
    )
}
export default Addbook;