import { BrowserRouter, Route, Routes} from 'react-router-dom';

import Home from './Pages/Home';
import Filmes from './Pages/Filmes/Filmes';
import Header from './Components/Header';


export default function RoutesApp(){
    return (
        <BrowserRouter>
        <Header/>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/filmes/:id" element={<Filmes />} />
            </Routes>
        </BrowserRouter>
    )
}