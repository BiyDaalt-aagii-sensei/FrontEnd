// App.tsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Loginform from './Components/Loginform/loginform';
import Home from './Components/Home/Home';
import Signupform from './Components/Signupform/signupform';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Loginform />} />
            <Route path="/signup" element={<Signupform />} />
            <Route path='/home' element={<Home/>}/>
        </Routes>
    );
};

export default App;
