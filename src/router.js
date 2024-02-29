import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import App from "./App";
import Landing from "./pages/landing";
import Deckshow from "./pages/deckshow";
import EditDeckForm from "./pages/EditDeckForm";
import EditCardForm from "./pages/EditCardForm";
import ManageCards from "./pages/ManageCards";
import AddCardForm from "./pages/AddCardForm";
import AddDeckForm from "./pages/AddDeckForm";

import { cardLoader, deckLoader } from "./loaders";
import {
  createDeckAction,
  updateDeckAction,
  deleteDeckAction,
  createCardAction,
  updateCardAction,
  deleteCardAction,
  addDeckAction,
} from "./actions";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Landing />} loader={deckLoader} />
      <Route path="deck/:id" element={<Deckshow />} loader={cardLoader} />
      <Route
        path="create"
        element={<AddDeckForm />}
        action={addDeckAction}
      />{" "}
      // Add new deck route
      <Route path="create/card/:deckId" element={<AddCardForm />} />
      <Route path="edit/deck/:id" element={<EditDeckForm />} />
      <Route path="edit/card/:deckId/:cardId" element={<EditCardForm />} />
      <Route path="update/:id" action={updateDeckAction} />
      <Route path="update/card/:deckId/:cardId" action={updateCardAction} />
      <Route path="delete/:id" action={deleteDeckAction} />
      <Route path="delete/card/:deckId/:cardId" action={deleteCardAction} />
      <Route path="deck/:id/manage-cards" element={<ManageCards />} />
    </Route>
  )
);

export default router;
