import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import RestaurantData from './assets/mock';
import MainComponent from './components/MainComponent';
import RestaurantMenuComponent from './components/RestaurantMenuComponent';
import { RestaurantSubMenu } from './components/RestaurantSubMenuComponent';
import CheckoutComponent from './components/CheckoutComponent';
import { selectedItemsStorage } from './components/RestaurantSubMenuComponent';
import { OrderPlacedComponent } from './components/OrderPlacedComponent';

const SubmenuComponent = ({ menuIndex }) => (
  <>
    <RestaurantSubMenu submenuIndex={menuIndex} />
  </>
);

function App() {
  const primaryMenuArray = RestaurantData || [];

  return (
    <div className="App" style={{ justifyContent: "center" }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainComponent />} />
          {primaryMenuArray.map((restaurant, index) => (
            <React.Fragment key={index}>
              <Route
                path={`/${restaurant.title.toLowerCase()}`}
                element={<RestaurantMenuComponent restaurant={restaurant} />}
              />
              {restaurant.menu.map((menu, menuIndex) => (
                <Route
                key={`${index}-${menuIndex}`}
                path={`/${restaurant.title.toLowerCase()}/menu${menuIndex + 1}`}
                element={<RestaurantSubMenu restaurantIndex={index} submenuIndex={menuIndex} />}
              />
              ))}
            </React.Fragment>
          ))}
          <Route path="/checkout" element={<CheckoutComponent selectedItems={selectedItemsStorage} />} />
          <Route path="/delivery" element={<OrderPlacedComponent />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
