import HomePage from './pages/HomePage' 
import ProductPage from './pages/ProductPage' 
export default [
    { path: '/', component: HomePage },
    { path: '/product/:id', component: ProductPage },
]