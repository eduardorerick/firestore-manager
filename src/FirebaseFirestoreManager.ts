import {
  query,
  where,
  getDocs,
  CollectionReference,
  addDoc,
  DocumentData,
} from "firebase/firestore";

export class FirebaseFirestoreManager<T> {
  constructor(
    private collection: CollectionReference<DocumentData, DocumentData>
  ) {}

  public async add(payload: Partial<T>) {
    try {
      console.log({ payload });
      const collection = this.collection;
      const docRef = await addDoc<DocumentData, DocumentData>(collection, {
        ...payload,
      });

      return docRef;
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }

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
  public async getFirst(params: Partial<T>) {
    console.log({ params });
    return ({} as T) || null;
  }
}
