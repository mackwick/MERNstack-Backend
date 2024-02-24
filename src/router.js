import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import App from "./App";
import Landing from "./pages/landing";
import Deckshow from "./pages/deckshow";

import { cardLoader, deckLoader } from "./loaders";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<Landing />} loader={deckLoader} />
      <Route path="/deck/:id" element={<Deckshow />} loader={cardLoader} />
    </Route>
  )
);

export default router;
