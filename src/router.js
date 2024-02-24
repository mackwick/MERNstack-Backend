import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import App from "./App";
import Landing from "./pages/landing";
import Deckshow from "./pages/deckshow";

import { cardLoader, deckLoader } from "./loaders";
import {
  createDeckAction,
  updateDeckAction,
  deleteDeckAction,
  createCardAction,
  updateCardAction,
  deleteCardAction,
} from "./actions";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<Landing />} loader={deckLoader} />
      <Route path="/deck/:id" element={<Deckshow />} loader={cardLoader} />
      <Route path="create" action={createDeckAction} />
      <Route path="update/:id" action={updateDeckAction} />
      <Route path="delete/:id" action={deleteDeckAction} />
      <Route path="create/card/:id" action={createCardAction} />
      <Route path="update/card/:id" action={updateCardAction} />
      <Route path="delete/card/:id" action={deleteCardAction} />
    </Route>
  )
);

export default router;
