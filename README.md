
# 🚧 Under Development
# Firestore Manager
Firestore Manager is an npm library designed to make Firestore easier to use with a syntax closer to popular ORMs like TypeORM and Prisma, rather than the default Firebase syntax.

Requires Firebase v9 or higher.

## Installation

```bash
npm install @rerick/firestore-manager
```

or

```bash
yarn add @rerick/firestore-manager
```


## Configuration

Start a firebase project

```typescript
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "SUA_API_KEY",
  authDomain: "SEU_AUTH_DOMAIN",
  projectId: "SEU_PROJECT_ID",
  storageBucket: "SEU_STORAGE_BUCKET",
  messagingSenderId: "SEU_MESSAGING_SENDER_ID",
  appId: "SEU_APP_ID",
};

firebase.initializeApp(firebaseConfig);
const firestore = getFirestore(app);
```

## Use Cases


You can create a firestore service instance with `createFirestoreService`, pass the model type as the generic for type completation.

```typescript
type ExampleModel = {
    id: string
    title: string;
    exampleArray: string[];
    exampleNumber: number;
} ;


import { createFirestoreService } from "@rerick/firestore-manager";

export const exampleModelService = createFirestoreService<ExampleModel>(
  collection(firestore, "jobs")
);
```
### Query

```typescript
exampleModelService.findAll({
    title: "Example title",
    exampleArray: ["Teste"],
    exampleNumber: 123
})
```

### Creating a document
Example function using the firestore service  

```typescript
export async function createExampleModel(payload: ExampleModel) {
  const docRef = await exampleModelService.create(payload);
  return docRef;
}
```