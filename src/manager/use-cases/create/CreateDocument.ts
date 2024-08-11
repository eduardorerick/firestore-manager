import { addDoc, DocumentData, getDoc } from "firebase/firestore";
import { BaseFirestoreClass } from "../../common/BaseFirestoreClass";

export class CreateDocument<T> extends BaseFirestoreClass<T> {
  public async create(payload: Partial<T>) {
    try {
      const collection = this.collection;
      const docRef = await addDoc<DocumentData, DocumentData>(collection, {
        ...payload,
      });

      const createdDoc = await getDoc(docRef);
      return { id: createdDoc.id, ...createdDoc.data() };
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }
}
