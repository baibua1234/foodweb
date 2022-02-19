
import db2 from "../../firebasa/fire";
import React,{useState,useEffect} from 'react';

function App2() {
  const [blogs,setBlogs]=useState([])
  const fetchBlogs=async()=>{
    const response=db2.collection('Food');
    const data=await response.get();
    data.docs.forEach(item=>{
     setBlogs([...blogs,item.data()])
    })
  }
  useEffect(() => {
    fetchBlogs();
  }, [])
  return (
    <div className="App">
      {
        blogs && blogs.map(blog=>{
          return(
            <div className="blog-container">
              <h4>{blog.Name}</h4>
              <p>{blog.calorie}</p>
            </div>
          )
        })
      }
    </div>
  );
}

export default App2;