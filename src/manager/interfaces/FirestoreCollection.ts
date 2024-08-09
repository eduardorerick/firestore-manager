import { CollectionReference, DocumentData } from "firebase/firestore";

export type FirestoreCollection = CollectionReference<
  DocumentData,
  DocumentData
>;
