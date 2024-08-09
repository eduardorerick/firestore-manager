import { CollectionReference, DocumentData } from "firebase/firestore";
import { FirebaseFirestoreManager } from "../manager/FirebaseFirestoreManager";
import { applyMixins } from "../helpers/applyMixins";
import { CreateDocument } from "../manager/use-cases/create";

/**
 * Create an firestore service instance
 *
 * @template T The base model of the collection.
 * @param {CollectionReference<DocumentData, DocumentData>} collection Firestore collection for create service
 *
 * @returns {FirebaseFirestoreManager<T>} A new firestore service instance
 */
export function createFirestoreService<T>(
  collection: CollectionReference<DocumentData, DocumentData>
): FirebaseFirestoreManager<T> {
  let classesToImplement = [CreateDocument];
  applyMixins(FirebaseFirestoreManager, classesToImplement);

  return new FirebaseFirestoreManager<T>(collection);
}
