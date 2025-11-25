import { db } from "../utils/firebase";
import {collection, getDocs, addDoc, query} from "firebase/firestore";

export async function getItems(userId) {
  const items = [];
  const itemsCollection = collection(db, "users", userId, "items");
  const itemsdoc = await getDocs(itemsCollection);

  itemsdoc.forEach((doc) => {
    items.push({
      id: doc.id, ...doc.data(),});
    });
  return items;
}


export async function addItem(userId, item) {

  const itemsCollectionRef = collection(db, "users", userId, "items");
  const docRef = await addDoc(itemsCollectionRef, item);

  return docRef.id;
}
