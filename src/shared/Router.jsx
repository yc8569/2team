import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";


<BrowserRouter>
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/detail/:id' element={<Detail />} />
        {/* 위 라우터 경로에 해당하지 않는 경우 아래 404로 */}
        <Route path='/form' element={<Form />} />
        <Route path='*' element={<NotFound />} />
    </Routes>
</BrowserRouter>

export default Router;