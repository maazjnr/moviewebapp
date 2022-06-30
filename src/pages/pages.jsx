import React from "react";
import WatchList from "./watchList";
import Add from "./add";
import {Routes, Route} from 'react-router-dom'


function Pages() {
  return (
    <div className="links">
        <Routes>
            <Route path='/watchlist' element={<WatchList />} />
            <Route path='/add' element={<Add />} />
        </Routes>
    </div>
  )
}

export default Pages