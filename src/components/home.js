import Form from "react-bootstrap/Form";

const Home = () => {
   return (
      <>
         <div>
            <h1 className="text-center">Todo List</h1>
            <input></input>
            <button>Add</button>
         </div>

         <Form.Label htmlFor="inputPassword5">Password</Form.Label>
         <Form.Control
            type="password"
            id="inputPassword5"
            aria-describedby="passwordHelpBlock"
         />
         <Form.Text id="passwordHelpBlock" muted>
            Your password must be 8-20 characters long, contain letters and
            numbers, and must not contain spaces, special characters, or emoji.
         </Form.Text>
      </>
   );
};

export default Home;
