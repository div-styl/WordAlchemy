// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// declare global {
// 	namespace App {
// 		// interface Error {}
// 		// interface Locals {}
// 		// interface PageData {}
// 		// interface Platform {}
// 	}
// }

import { SupabaseClient, Session } from '@supabase/supabase-js';
import { Database } from './DatabaseDefinitions';

declare global {
	namespace App {
		interface Locals {
			supabase: SupabaseClient<Database>;
			getSession(): Promise<Session | null>;
		}
		interface PageData {
			session: Session | null;
		}
		// interface Error {}
		// interface Platform {}
	}
}
export {};
