import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./context/AuthProvider";

import "@styles/bevi.scss";

import Layout from "@views/layout";
import Dashboard from "@views/Dashboard";
import Products from "@views/Products";
import ProductForm from "@views/Products/form";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>      
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Dashboard />}/>
            <Route path="/products">
              <Route index element={<Products />} />
              <Route path="create/" element={<ProductForm action="create" />}/>
              <Route path="edit/:id" element={<ProductForm action="edit" />}/>
              <Route path="show/:id" element={<ProductForm action="show" />}/>
              <Route path=":id" element={<ProductForm />}/>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App
