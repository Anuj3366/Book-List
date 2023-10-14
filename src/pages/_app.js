import Navbar from "@/common/Navbar";

function App({ Component }) {
  return (
    <>
      <Navbar></Navbar>
      <Component></Component>
    </>
  );
}

export default App;