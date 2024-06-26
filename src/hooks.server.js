// src/hooks.server.js

import { redirect } from '@sveltejs/kit';
import { db } from '$lib/db';

async function authenticateUser(event) {
	const { cookies } = event;

	const session = cookies.get('session');

	if (!session) {
		return null;
	}

	const user = await db.user.findUnique({
		where: { session }
	});

	if (user && session && user?.session === session) {
		return user;
	}

	return null;
}

/**
 * Handles the given event and returns the response.
 *
 * @param {Object} event - The event object.
 * @param {Function} resolve - The resolve function.
 * @return {Promise} A promise that resolves to the response.
 */
export async function handle({ event, resolve }) {
	// Stage 1
	event.locals.user = await authenticateUser(event);

	// Check if the user is authenticated
	if (event.url.pathname.startsWith('/profile')) {
		// if not redirect to the home
		if (!event.locals.user) {
			throw redirect(303, '/');
		}
	}

	if (
		event.url.pathname.startsWith('/auth/login') ||
		event.url.pathname.startsWith('/auth/register')
	) {
		if (event.locals.user) {
			throw redirect(303, '/profile/');
		}
	}

	const response = await resolve(event); // Stage 2

	// Stage 3

	return response;
}
