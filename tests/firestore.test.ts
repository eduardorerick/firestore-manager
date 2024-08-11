import { expect, test } from "vitest";
import { initializeApp } from "firebase/app";
import {
  collection,
  connectFirestoreEmulator,
  getFirestore,
} from "firebase/firestore";
import { createFirestoreService } from "../src";

const app = initializeApp({ projectId: "test" });
const firestore = getFirestore();
connectFirestoreEmulator(firestore, "127.0.0.1", 8080);
const firestoreCollection = collection(firestore, "test");
type ExampleModel = {
  name: string;
  age: number;
};

test("createFirestoreService", () => {
  const testFirestoreService =
    createFirestoreService<ExampleModel>(firestoreCollection);
  expect(testFirestoreService).toBeDefined();
});

test("CreateDocumentClass", async () => {
  const testFirestoreService =
    createFirestoreService<ExampleModel>(firestoreCollection);

  const payload = { age: 12, name: "Test" };
  const newDoc = await testFirestoreService.create(payload);

  expect(newDoc).toHaveProperty("id");

  Object.keys(payload).forEach((key) => {
    expect(newDoc).toHaveProperty(key);
  });
});
