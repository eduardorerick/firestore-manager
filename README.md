
# 🚧 Under Development


## Roadmap
Features i want to implement in the project:

- Create a single document
- Create multiple documents
- Get document by ID or unique identifier
- Get all documents
- Get the first document that matches a specific criteria
- Get a filtered list of documents
- Update a single document
- Update multiple documents
- Update or create documents
- Delete a single document
- Delete multiple documents
- Delete all documents
- Query operators (Not equal, Array membership, in, not-in, and array-contains-any) 
- Compound Queries
- OR Queries
- Pagination

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
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
};

firebase.initializeApp(firebaseConfig);
const firestore = getFirestore(app);
```

## Use Cases


You can create a firestore service instance with `createFirestoreService`, pass the model type as the generic for type completation.

```typescript
import { createFirestoreService } from "@rerick/firestore-manager";

type ExampleModel = {
    id: string
    title: string;
    exampleArray: string[];
    exampleNumber: number;
} ;

export const exampleModelService = createFirestoreService<ExampleModel>(
  collection(firestore, "exampleCollection")
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
