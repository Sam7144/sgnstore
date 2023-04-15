/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import { createContext, useReducer } from "react";
import Cookies from "js-cookie";
export const Favour = createContext();
const initialState = {
  fav: Cookies.get("fav") ? JSON.parse(Cookies.get("fav")) : { favItems: [] },
};
function reducer(stateF, action) {
  switch (action.type) {
    case "ADD_TO_FAV": {
      const newItem = action.payload;
      const existItem = stateF.fav.favItems.find(
        (item) => item.name === newItem.name
      );
      const favItems = existItem
        ? stateF.fav.favItems.map((item) =>
            item.name === existItem.name ? newItem : item
          )
        : [...stateF.fav.favItems, newItem];
      Cookies.set("fav", JSON.stringify({ ...stateF.fav, favItems }));
      return { ...stateF, fav: { ...stateF.fav, favItems } };
    }
    case "REMOVE_FAV_ITEM": {
      const favItems = stateF.fav.favItems.filter(
        (item) => item.name !== action.payload.name
      );
      Cookies.set("fav", JSON.stringify({ ...stateF.fav, favItems }));
      return { ...stateF, fav: { ...stateF.fav, favItems } };
    }
    case 'FAV_RESET':{
      return{
          ...stateF,
          cart:{
              favItems:[]
          }
      }
  }
    default:
      return stateF;
  }
}
export function FavourProvider({ children }) {
  const [stateF, dispatchF] = useReducer(reducer, initialState);
  const value = { stateF, dispatchF };
  return <Favour.Provider value={value}>{children}</Favour.Provider>;
}
