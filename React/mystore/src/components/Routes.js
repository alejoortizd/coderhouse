import React from 'react';
import { Switch, Route} from 'react-router-dom';
import ProductDetail from './ItemDetailContainer/ProductDetail';

export default function Page() {
  return (
    <section>
      <Switch>
        <Route path="/productos/:id" exact component={ProductDetail}/>
      </Switch>
    </section>
  )
}
