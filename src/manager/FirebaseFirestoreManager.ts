import {
  query,
  where,
  getDocs,
} from "firebase/firestore";
import { BaseFirestoreClass } from "./common/BaseFirestoreClass";
import { CreateDocument } from "./use-cases/create/CreateDocument";

export class FirebaseFirestoreManager<T> extends BaseFirestoreClass<T> {
  // public async create(payload: Partial<T>) {
  //   try {
  //     const collection = this.collection;
  //     const docRef = await addDoc<DocumentData, DocumentData>(collection, {
  //       ...payload,
  //     });

  //     return docRef;
  //   } catch (e) {
  //     console.error("Error adding document: ", e);
  //   }
  // }

  /**
   * Create an firestore service instance
   *
   * @param {Partial<T>} params Params for query
   *
   * @returns {Promise<T[]>} A list of base model of service.
   */
  public async findAll(params: Partial<T>): Promise<T[]> {
    const q = query(
      this.collection,
      ...Object.entries(params as object).map(([key, value]) =>
        where(key, "==", value)
      )
    );
    const querySnapshot = await getDocs(q);
    let data: T[] = [];
    querySnapshot.forEach((doc) => {
      data.push(doc.data() as T);
    });
    return data;
  }

  public async findUnique(params: Partial<T>) {
    return ({} as T) || null;
  }
  public async findFirst(params: Partial<T>) {
    return ({} as T) || null;
  }

  public async update() {}
  public async updateMany() {}
  public async delete() {}
  public async deleteMany() {}
}

export interface FirebaseFirestoreManager<T> extends CreateDocument<T> {}
