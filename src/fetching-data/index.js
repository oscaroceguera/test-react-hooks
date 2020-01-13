import React, { useState, useEffect } from "react";
import axios from "axios";

const GetData = () => {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [user, setUser] = useState({})

  useEffect(() => {
    axios
      .get("https://reqres.in/api/users/2")
      .then(response => {
        setLoading(false);
        setUser(response.data.data);
        setError("");
      })
      .catch(error => {
        setLoading(false);
        setUser({});
        setError("Something went wrong");
      });  
  }, [])

  return (
    <div>
      {loading ? "Loading!! Please wait" : user.email}
      {error ? error : null}
    </div>
  );  

}

export default GetData;