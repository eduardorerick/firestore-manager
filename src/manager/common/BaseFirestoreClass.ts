import { CollectionReference, DocumentData } from "firebase/firestore";
import { FirestoreCollection } from "../interfaces/FirestoreCollection";

export class BaseFirestoreClass<T> {
  constructor(protected collection: FirestoreCollection) {}
}
