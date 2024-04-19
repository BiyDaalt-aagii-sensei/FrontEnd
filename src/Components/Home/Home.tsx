import React, { useState, useEffect } from 'react';
import "./Home.css";

interface TokenType {
  accessToken: string;
}

const Home: React.FC = () => {
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    const storedToken = localStorage.getItem('accessToken');
    if (storedToken){
      setToken(storedToken)
    }
  }, [localStorage.getItem('accessToken')]);

  console.log(token);

  return (
    <div>
      Home
    </div>
  );
}

export default Home;
