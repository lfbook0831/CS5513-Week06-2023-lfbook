import { db } from "./firebase";
export async function addCat(cat) {
  await db.collection("cats").add(cat);
}

export async function getCats() {
  const snapshot = await db.collection("cats").get();
  return snapshot.docs.map(doc => doc.data());
}