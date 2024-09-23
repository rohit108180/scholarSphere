import React from 'react'
import { Landing } from './pages/Landing';
import {BrowserRouter, Routes, Route, Link  } from "react-router-dom";
import {Error, ProtectedRoute, Register } from './pages';
import { AppProvider } from './context/appContext';
import { Profile , SharedLayer, AddProjectPaper, Feed, LinX} from './pages/dashboard/index';
import { Notifications } from './pages/dashboard/Notifications';
import { MessageBar } from './component/MessageBar';






function App() {
  return (
    <AppProvider>
      <MessageBar/>
    <BrowserRouter >
      <Routes>
        {/* <Route path="/" element={<ProtectedRoute><SharedLayer/></ProtectedRoute>}>
          <Route index element={<Feed/>} />
          <Route path='post' element={<AddProjectPaper/>} />
          <Route path='notifications' element={<Notifications/>} />
          <Route path='profile' element={<Profile/>} />
        </Route> */}
        {/* <Route path = "/register" element={<Register/>}/> */}
        {/* <Route path = "/" element={<Landing/>}/> */}
        <Route path = "/" element={<LinX/>}/>
        <Route path = "*" element={<Error/>}/>

      </Routes>
    </BrowserRouter>
    </AppProvider>
  );
}

export default App;
