import { get, writable } from 'svelte/store';
import Alert1 from './viewingComponents/Alert1.svelte';
import Toolbar from './viewingComponents/Toolbar.svelte';

export const swCode = writable({
	cvElements: [],
	selectedElement: {}
});

export const swCodeElement = writable({
	id: '',
	file: '',
	swc: []
});

export const cvElement = class cvElement {
	constructor(element, props, classes, styles) {
		this.id = props.swElementDataAttrId;
		this.element = element;
		this.props = props;
		this.classes = classes;
		this.styles = styles;
	}
	create() {
		if (this.element == 'alert1') {
			this.mainComponent = new Alert1({ target: document.querySelector('#cv'), props: this.props });
			this.toolbar = new Toolbar({
				target: document.querySelector('#cv'),
				props: { visible: false, sweid: this.id }
			});
		}
	}
	showToolBar() {
		const { cvElements } = get(swCode)
		cvElements.forEach(element => element.disableToolBar())
		this.toolbar.$set({ visible: true });
	}
	disableToolBar() {
		this.toolbar.$set({ visible: false });
	}
	get mc() {
		return this.mainComponent;
	}
	get tb() {
		return this.toolbar;
	}
	get sweid() {
		return this.id;
	}
	checkSelected() {
		const { selectedElement } = get(swCode)
		if(selectedElement.id !== this.id){
			this.disableToolBar()
		}
	}
};
