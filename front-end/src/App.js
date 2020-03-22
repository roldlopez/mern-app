import React, {Fragment} from 'react';
import Form from "./components/form";
import Table from "./components/table";


function App() {
  return (
   <Fragment>
      <div className="container">
        <h1 className="text-center my-5">Cosas por hacer</h1>
      <Form/>
      <Table/>
     </div>
   </Fragment>
  );
}

export default App;
