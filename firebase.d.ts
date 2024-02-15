// firebase.d.ts
declare module 'firebase/app' {
    interface FirebaseApp {
      options: Record<string, any>;
    }
  
    interface FirebaseNamespace {
      apps: FirebaseApp[];
    }
  
    interface AppHook {
      (app?: FirebaseApp): FirebaseApp;
      (options?: Record<string, any>, name?: string): FirebaseApp;
    }
  
    interface FirebaseNamespace {
      app: AppHook;
    }
  
    const firebaseNamespace: FirebaseNamespace;
    export = firebaseNamespace;
  }
  
  declare module 'firebase/auth' {
    import { FirebaseNamespace } from 'firebase/app';
  
    interface Auth {
      Persistence: {
        LOCAL: string;
        SESSION: string;
        NONE: string;
      };
    }
  
    interface FirebaseNamespace {
      auth: (app?: import('firebase/app').FirebaseApp) => Auth;
    }
  
    const auth: import('firebase/auth').Auth;
    const firebaseNamespace: FirebaseNamespace;
  
    export = firebaseNamespace;
    export = auth;
  }
  
  declare module 'firebase/firestore' {
    import { FirebaseNamespace } from 'firebase/app';
  
    interface Firestore {
      setLogLevel(logLevel: string): void;
    }
  
    interface FirebaseNamespace {
      firestore: (app?: import('firebase/app').FirebaseApp) => Firestore;
    }
  
    const firestore: import('firebase/firestore').Firestore;
    const firebaseNamespace: FirebaseNamespace;
  
    export = firebaseNamespace;
    export = firestore;
  }
  