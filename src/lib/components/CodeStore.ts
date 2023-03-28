import { get, writable } from 'svelte/store';
import Alert1 from './viewingComponents/Alert1.svelte';
import Toolbar from './viewingComponents/Toolbar.svelte';

export const swCode = writable({
	cvElements: [],
	selectedElement: {}
});

export const swToolbar = writable({
	id: 'toolbar'
});

export const cvElement = class cvElement {
	constructor(element, props, classes, styles) {
		this.id = props.swElementDataAttrId;
		this.element = element;
		this.props = props;
		this.classes = classes;
		this.styles = styles;
		this.code = this.element == 'alert1' ? {eswc: `<div
			style="${this.styles}"
			class="${this.classes.join("  ")}"
		>
			<div>
				${this.props.svg}
				<span>${this.props.title}</span>
			</div>
		</div>`} : {};
	}
	create() {
		if (this.element == 'alert1') {
			this.mainComponent = new Alert1({ target: document.querySelector('#cvh'), props: this.props });
			this.toolbar = new Toolbar({
				target: document.querySelector('#cvh'),
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
};
