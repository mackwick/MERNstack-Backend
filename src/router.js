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
      <Route index element={<Landing />} loader={deckLoader} />
      <Route path="deck/:id" element={<Deckshow />} loader={cardLoader} />
      <Route path="create" action={createDeckAction} />
      <Route path="edit/deck/:id" element={<EditDeckForm />} />
      <Route path="update/:id" action={updateDeckAction} />
      <Route path="delete/:id" action={deleteDeckAction} />
      <Route path="deck/:id/manage-cards" element={<ManageCards />} />
      <Route
        path="create/card/:deckId"
        element={<AddCardForm />}
        action={createCardAction}
      />
      <Route path="edit/card/:deckId/:cardId" element={<EditCardForm />} />
      <Route path="update/card/:deckId/:cardId" action={updateCardAction} />
      <Route path="delete/card/:deckId/:cardId" action={deleteCardAction} />
    </Route>
  )
);

export default router;
