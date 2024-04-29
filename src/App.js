import React, { useEffect } from 'react';
import Header from './components/Header/Header.js';
import SideBarRight from './components/SideBar/SideBarRight.js';
import { setAllData } from './store/slices/productSlice.js';
import { useDispatch, useSelector } from 'react-redux';
const App = ({ children }) => {
  const dispatch = useDispatch()
  const fetchData = async () => {
    const response = await fetch('https://5fc9346b2af77700165ae514.mockapi.io/products');
    const data = await response.json();
    dispatch(setAllData(data))
  }
  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div>
      <Header />
      <br />
      <br />
      <br />
      <div className='app-provider'>
        {children}
        <SideBarRight />
      </div>

    </div>
  );
}

export default App;


