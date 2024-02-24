import { redirect } from "react-router-dom";
const URL = process.env.REACT_APP_URL;

//createDeckAction
export const createDeckAction = async ({ request }) => {
  const formData = await request.formData();
  const newDeck = {
    name: formData.get("name"),
    isPrivate: formData.get("isPrivate"),
    description: formData.get("description"),
  };
  await fetch(`${URL}/deck`, {
    method: "post",
    headers: {
      "Content-Type": "application.json",
    },
    body: JSON.stringify(newDeck),
  });
};

//updateDeckAction
export const updateDeckAction = async ({ request, params }) => {
  const formData = await request.formData();
  const updatedDeck = {
    name: formData.get("name"),
    isPrivate: formData.get("isPrivate"),
    description: formData.get("description"),
  };
  await fetch(`${URL}/deck/${params.id}`, {
    method: "put",
    headers: {
      "Content-Type": "application.json",
    },
    body: JSON.stringify(updatedDeck),
  });
};

//deleteDeckAction
export const deleteDeckAction = async ({ params }) => {
  await fetch(`${URL}/card/${params.id}`, {
    method: "delete",
  });
  return redirect("/");
};
