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
} from "./actions";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<Landing />} loader={deckLoader} />
      <Route path="/card/:id" element={<Deckshow />} loader={cardLoader} />
      <Route path="create" action={createDeckAction} />
      <Route path="update/:id" action={updateDeckAction} />
      <Route path="delete/:id" action={deleteDeckAction} />
    </Route>
  )
);

export default router;
