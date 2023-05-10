import {HomePage, NewOrderPage, NoFound} from "./pages";
import {Routes, Route} from "react-router-dom";
import {  OrderProvideer } from "./context/orderContext.js";
import { Toaster } from "react-hot-toast";

export function App() {
  return (
    <div className="bg-neutral-300 min-h-screen flex items-center">
      <div className="px-10 container m-auto">
        <OrderProvideer>
          <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/new-order" element={<NewOrderPage/>}/>
            <Route path="/orders/:id" element={<NewOrderPage />} />
            <Route path="*" element={<NoFound/>}/>
          </Routes>
          <Toaster/>
        </OrderProvideer>
      </div>
    </div>
  );
}

export default App;