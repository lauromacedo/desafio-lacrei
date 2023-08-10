import { Routes, Route, BrowserRouter } from 'react-router-dom';

import { Home } from './pages/Home';
import { PessoaUsuaria } from './pages/PessoaUsuaria';
import { Profissional } from './pages/Profissional'
import { DefaultLayout } from './layouts/DefaultLayout';

export function Router() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<DefaultLayout />}>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/pessoa-usuaria' element={<PessoaUsuaria />} />
          <Route path='/profissional' element={<Profissional />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
