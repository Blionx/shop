import React, { useEffect, useState } from "react";
import {Layout} from '../layout';

function Contact(){ 
    const [backendData, setBackendData] = useState([{}]);
  useEffect(() => {
    fetch("/api").then(
      response => response.json()
    ).then(
      data => {
        setBackendData(data)
      }
    )
  }, []);
    return(
    <Layout>
        {backendData.users == undefined ? (
        <h1>Loading..</h1>
      ):(
        backendData.users.map((user, i)=>(
          <p key={i}>{user}</p>
        ))
      )}
    </Layout>
)};

export default Contact;