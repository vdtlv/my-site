import { writable } from 'svelte/store';

function showPage() {
	const { subscribe, set } = writable(0);

	return {
		subscribe,
		main: () => set(0),
		about: () => set(1),
		projects: () => set(2),
        work: () => set(3)
	};
}

export const page = showPage();