import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import RestaurantData from './assets/mock';
import MainComponent from './components/MainComponent';
import RestaurantMenuComponent from './components/RestaurantMenuComponent';
import RestaurantSubMenu from './components/RestaurantSubMenuComponent';


const SubmenuComponent = ({menuIndex}) => (
  <>
     <RestaurantSubMenu submenuIndex={menuIndex} />
  </>
)
  



function App() {
  const menuArray = RestaurantData[0]?.menu || [];

  return (
    <div className="App" style={{ justifyContent: "center" }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainComponent />} />
          <Route path="/mcdonalds" element={<RestaurantMenuComponent />} />
          {menuArray.map((menu, index) => (
            <Route
              key={menu.id}
              path={`/menu${index + 1}`}
              element={<SubmenuComponent menuIndex={index} />} />
            
          ))}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
