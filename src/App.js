// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar/navbar';
import NoMatch from './components/nomatch/noMatch';
import Register from './components/Register';
import Login from './components/Login';
import { AddItem, EditItem, ItemList } from './components/CrudTest'; // Import CRUD components
import { AddSponsor, EditSponsor, SponsorList } from './components/sponsor'; // Import Sponsor components
import Home from './components/Home';
import { AddPost, EditPost, PostList } from './components/posts'; 




import "./App.css"



function App() {
 

  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
        <Route path="/" element={<Home />} />

          <Route path="ItemList" element={<ItemList />} />
          <Route path="/add" element={<AddItem />} />

          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />

          <Route path="/items" element={<ItemList />} />
            <Route path="/add" element={<AddItem />} /> 
            <Route path="/edit/:id" element={<EditItem />} /> 


       {/* Sponsor Routes */}
       <Route path="/sponsors" element={<SponsorList />} /> {/* Lista e sponsorëve */}
          <Route path="/add-sponsor" element={<AddSponsor />} /> {/* Shto sponsor */}
          <Route path="/edit-sponsor/:id" element={<EditSponsor />} /> {/* Redakto sponsor */}

          <Route path="/posts" element={<PostList />} />
        <Route path="/add" element={<AddPost />} />
        <Route path="/edit/:id" element={<EditPost />} />


          {/* Authentication Routes */}
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />


          <Route path="*" element={<NoMatch />} /> {/* Për rrugët e paidentifikuara */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
