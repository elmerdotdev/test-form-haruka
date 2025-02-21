import { useRef } from "react";
import Modal from "./components/Modal";

function App () {
  const formRef1 = useRef<HTMLFormElement>(null);
  const formRef2 = useRef<HTMLFormElement>(null);

  return (
    <>
      <Modal
        button={<button type="button">Add User</button>}
        formRef={formRef1}>
        <form
          ref={formRef1}
          onSubmit={(e) => { 
            e.preventDefault(); 
            console.log("User added"); 
          }}>
          <input type="text" name="name" placeholder="Enter Name" />
        </form>
      </Modal>

      <Modal
        button={<button type="button">Update</button>}
        formRef={formRef2}>
        <form
          ref={formRef2}
          onSubmit={(e) => { 
            e.preventDefault(); 
            console.log("User updated") 
          }}>
          <input type="email" name="email" placeholder="Enter Email" />
        </form>
      </Modal>
    </>
  );
}

export default App