import { get, writable } from 'svelte/store';
import axios from 'axios';
import { browser } from '$app/environment';
// store a history of store value snapshots

export default function approach2(store) {
	const history = [get(store)];
	const historyStore = writable(history);
	let historyIndex = 0;

	const updateStore = (file) => {
		const localHistory = JSON.parse(localStorage.getItem(`history-${file}`))
			? JSON.parse(localStorage.getItem(`history-${file}`))
			: [{ source: '', swediting: false }];
			
		axios
			.post(
				`/api/svelteway`,
				{
					path: file,
					swc: history[historyIndex].source ? history[historyIndex].source : ''
				},
				{
					params: {
						path: file,
						swc: history[historyIndex].source ? history[historyIndex].source : ''
					}
				}
			)
			.then(function (response) {
				console.log(response);
			})
			.catch(function (error) {
				console.log(error);
			});
		store.set(history[historyIndex]);
	};

	return {
		subscribe: store.subscribe,
		history: historyStore,
		set(newValue, file) {
			historyIndex++;
			history[historyIndex] = newValue;
			historyStore.set(history);
			while (historyIndex < history.length - 1) {
				history.pop();
			}
			updateStore(file);
		},
		undo(file) {
			if (historyIndex > 0) {
				historyIndex--;
				updateStore(file);
			}
		},
		redo(file) {
			if (historyIndex < history.length - 1) {
				historyIndex++;
				updateStore(file);
			}
		}
	};
}

// function clone(store) {
// 	return JSON.parse(JSON.stringify(store));
// }
