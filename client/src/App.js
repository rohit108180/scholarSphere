import React from 'react'
import { Landing } from './pages/Landing';
import {BrowserRouter, Routes, Route, Link  } from "react-router-dom";
import {Error, ProtectedRoute, Register } from './pages';
import { AppProvider } from './context/appContext';
import { Profile , SharedLayer, AddProjectPaper, Feed} from './pages/dashboard/index';






function App() {
  return (
    <AppProvider>
    <BrowserRouter >
      <Routes>
        <Route path="/" element={<ProtectedRoute><SharedLayer/></ProtectedRoute>}>
          <Route index element={<Feed/>} />
          <Route path='post' element={<AddProjectPaper/>} />
          <Route path='profile' element={<Profile/>} />
        </Route>
        <Route path = "/register" element={<Register/>}/>
        <Route path = "/landing" element={<Landing/>}/>
        <Route path = "*" element={<Error/>}/>

      </Routes>
    </BrowserRouter>
    </AppProvider>
  );
}

export default App;
