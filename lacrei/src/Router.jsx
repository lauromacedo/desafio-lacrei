import { Routes, Route, BrowserRouter } from 'react-router-dom';

import { Home } from './pages/Home';
import { PessoaUsuaria } from './pages/PessoaUsuaria';
import { Profissional } from './pages/Profissional'
import { DefaultLayout } from './layouts/DefaultLayout';

export function Router() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/desafio-lacrei/' element={<DefaultLayout />}>
          <Route path='/desafio-lacrei/' element={<Home />} />
          <Route path='/desafio-lacrei/home' element={<Home />} />
          <Route path='/desafio-lacrei/pessoa-usuaria' element={<PessoaUsuaria />} />
          <Route path='/desafio-lacrei/profissional' element={<Profissional />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}