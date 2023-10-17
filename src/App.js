import React from 'react'
import Header from './Header';
import Nav from './Nav';
import Home from './Home';
import NewPost from './NewPost';
import PostPage from './PostPage';
import About from './About';
import Missing from './Missing';
import Footer from './Footer';
import { Route ,Routes } from 'react-router-dom';
import Edit from './Edit';
import { DataProvider } from './context/DataContext';

function App() {

  
  return (
    <div className="App">
      <DataProvider>
      <Header 
      title="social-spot" />
      <Nav />
        <Routes>
          <Route path='/' element= {<Home/>} />
           <Route path='post'>
           <Route index element = {<NewPost />} />
            <Route path=':id' element={<PostPage/>} />
            </Route>
            <Route path="/edit/:id" element={
            <Edit />}/>
            <Route path='about' element={ <About />} />
            <Route path='missing' element={
            <Missing />} />
            <Route path='*' element={<Missing />} />
      </Routes>
      <Footer />
      </DataProvider>
    </div>
  );
}

export default App;
