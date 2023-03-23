<script>
	import { viewComponent } from './viewComponentsStore';
	import Component from './viewingComponents/Component.svelte';

	const componentsToSelect = [
		{
			title: 'Alert',
			description: 'Alert informs Users About Important Events.',
			image: 'https://daisyui.com/images/components/alert.jpg'
		},
		{
			title: 'Artboard',
			description:
				'Artboard provides fixed size container to display a demo content on mobile size.',
			image: 'https://daisyui.com/images/components/artboard.jpg'
		},
		{
			title: 'Avartar',
			description:
				'Avatars are used to show a thumbnail representation of an individual or business in the interface.',
			image: 'https://daisyui.com/images/components/avatar.jpg'
		},
		{
			title: 'Badge',
			description: 'Badges are used to inform the user of the status of specific data.',
			image: 'https://daisyui.com/images/components/badge.jpg'
		},
		{
			title: 'Bottom Navigation',
			description: 'Bottom navigation bar allows navigation between primary screens.',
			image: 'https://daisyui.com/images/components/bottom-navigation.jpg'
		},
		{
			title: 'Breadcrumbs',
			description: 'Breadcrumbs helps users to navigate through the website.',
			image: 'https://daisyui.com/images/components/breadcrumbs.jpg'
		},
		{
			title: 'Button Group',
			description: 'Button group shows buttons next to each other.',
			image: 'https://daisyui.com/images/components/button-group.jpg'
		},
		{
			title: 'Button',
			description: 'Buttons allow the user to take actions or make choices.',
			image: 'https://daisyui.com/images/components/button.jpg'
		},
		{
			title: 'Card',
			description: 'Cards are used to group and display content in a way that is easily readable.',
			image: 'https://daisyui.com/images/components/card.jpg'
		},
		{
			title: 'Carousel',
			description: 'Carousel show images or content in a scrollable area.',
			image: 'https://daisyui.com/images/components/carousel.jpg'
		},
		{
			title: 'Chat',
			description:
				'Chat bubbles are used to show one line of conversation and all its data, including the author image, author name, time, etc.',
			image: 'https://daisyui.com/images/components/chat.jpg'
		},
		{
			title: 'Checkbox',
			description: 'Checkboxes are used to select or deselect a value.',
			image: 'https://daisyui.com/images/components/checkbox.jpg'
		},
		{
			title: 'Collapse',
			description: 'Collapse is used for showing and hiding content.',
			image: 'https://daisyui.com/images/components/collapse.jpg'
		},
		{
			title: 'Countdown',
			description: 'Countdown gives you a transition effect of changing numbers.',
			image: 'https://daisyui.com/images/components/countdown.jpg'
		},
		{
			title: 'Divider',
			description: 'Divider will be used to separate content vertically or horizontally.',
			image: 'https://daisyui.com/images/components/divider.jpg'
		},
		{
			title: 'Drawer',
			description:
				'Drawer is a grid layout that can show/hide a sidebar on the left or right side of the page.',
			image: 'https://daisyui.com/images/components/drawer.jpg'
		},
		{
			title: 'Dropdown',
			description: 'Dropdown can open a menu or any other element when the button is clicked.',
			image: 'https://daisyui.com/images/components/dropdown.jpg'
		},
		{
			title: 'File Input',
			description: 'File Input is a an input field for uploading files.',
			image: 'https://daisyui.com/images/components/file-input.jpg'
		},
		{
			title: 'Footer',
			description: 'Footer can contain logo, copyright notice, and links to other pages.',
			image: 'https://daisyui.com/images/components/footer.jpg'
		},
		{
			title: 'Hero',
			description:
				'Hero is a component for displaying a large box or image with a title and description.',
			image: 'https://daisyui.com/images/components/hero.jpg'
		},
		{
			title: 'Indicator',
			description: 'Indicators are used to place an element on the corner of another element.',
			image: 'https://daisyui.com/images/components/indicator.jpg'
		},
		{
			title: 'Input Group',
			description: 'Input group puts an input next to a text or a button.',
			image: 'https://daisyui.com/images/components/input-group.jpg'
		},
		{
			title: 'Text Input',
			description: 'Text Input is a simple input field.',
			image: 'https://daisyui.com/images/components/input.jpg'
		},
		{
			title: 'Kbd',
			description: 'Kbd is used to display keyboard shortcuts.',
			image: 'https://daisyui.com/images/components/kbd.jpg'
		},
		{
			title: 'Link',
			description: 'Link adds the missing underline style to links.',
			image: 'https://daisyui.com/images/components/link.jpg'
		},
		{
			title: 'Mask',
			description: 'Mask crops the content of the element to common shapes.',
			image: 'https://daisyui.com/images/components/mask.jpg'
		},
		{
			title: 'Menu',
			description: 'Menu is used to display a list of links vertically or horizontally.',
			image: 'https://daisyui.com/images/components/menu.jpg'
		},
		{
			title: 'Code Mockup',
			description:
				'Code mockup is used to show a block of code in a box that looks like a code editor.',
			image: 'https://daisyui.com/images/components/mockup-code.jpg'
		},
		{
			title: 'Phone Mockup',
			description: 'Phone mockup shows a mockup of an iPhone.',
			image: 'https://daisyui.com/images/components/mockup-phone.jpg'
		},
		{
			title: 'Window Mockup',
			description: 'Window mockup shows a box that looks like an operating system window.',
			image: 'https://daisyui.com/images/components/mockup-window.jpg'
		},
		{
			title: 'Modal',
			description: 'Modal is used to show a dialog or a box when you click a button.',
			image: 'https://daisyui.com/images/components/modal.jpg'
		},
		{
			title: 'Navbar',
			description: 'Navbar is used to show a navigation bar on the top of the page.',
			image: 'https://daisyui.com/images/components/navbar.jpg'
		},
		{
			title: 'Pagination',
			description:
				'Pagination is a group of buttons that allow the user to navigate between a set of related content.',
			image: 'https://daisyui.com/images/components/pagination.jpg'
		},
		{
			title: 'Progress',
			description:
				'Progress bar can be used to show the progress of a task or to show the passing of time.',
			image: 'https://daisyui.com/images/components/progress.jpg'
		},
		{
			title: 'Radial Progress',
			description:
				'Radial progress can be used to show the progress of a task or to show the passing of time.',
			image: 'https://daisyui.com/images/components/radial-progress.jpg'
		},
		{
			title: 'Radio',
			description: 'Radio buttons allow the user to select one option from a set.',
			image: 'https://daisyui.com/images/components/radio.jpg'
		},
		{
			title: 'Range Slider',
			description: 'Range slider is used to select a value by sliding a handle.',
			image: 'https://daisyui.com/images/components/range.jpg'
		},
		{
			title: 'Rating',
			description: 'Rating is a set of radio buttons that allow the user to rate something.',
			image: 'https://daisyui.com/images/components/rating.jpg'
		},
		{
			title: 'Select',
			description: 'Select is used to pick a value from a list of options.',
			image: 'https://daisyui.com/images/components/select.jpg'
		},
		{
			title: 'Stack',
			description: 'Stack visually puts elements on top of each other.',
			image: 'https://daisyui.com/images/components/stack.jpg'
		},
		{
			title: 'Stat',
			description: 'Stat is used to show numbers and data in a box.',
			image: 'https://daisyui.com/images/components/stat.jpg'
		},
		{
			title: 'Steps',
			description: 'Steps can be used to show a list of steps in a process.',
			image: 'https://daisyui.com/images/components/steps.jpg'
		},
		{
			title: 'Swap',
			description:
				'Swap allows you to toggle the visibility of two elements using a checkbox or a class name.',
			image: 'https://daisyui.com/images/components/swap.jpg'
		},
		{
			title: 'Tab',
			description:
				'Swap allows you to toggle the visibility of two elements using a checkbox or a class name.',
			image: 'https://daisyui.com/images/components/tab.jpg'
		},
		{
			title: 'Table',
			description: 'Table can be used to show a list of data in a table format.',
			image: 'https://daisyui.com/images/components/table.jpg'
		},
		{
			title: 'Textarea',
			description: 'Textarea allows users to enter text in multiple lines.',
			image: 'https://daisyui.com/images/components/textarea.jpg'
		},
		{
			title: 'Toast',
			description: 'Toast is a wrapper to stack elements, positioned on the corner of page.',
			image: 'https://daisyui.com/images/components/toast.jpg'
		},
		{
			title: 'Toggle',
			description: 'Toggle is a checkbox that is styled to look like a switch button.',
			image: 'https://daisyui.com/images/components/toggle.jpg'
		},
		{
			title: 'Tooltip',
			description: 'Tooltip can be used to show a message when hovering over an element.',
			image: 'https://daisyui.com/images/components/tooltip.jpg'
		}
	];

	$: vc = $viewComponent
</script>

<div class="w-full">
	{#if vc.viewing}
		<Component />
	{:else}
		<div class="grid mx-auto content-center w-full h-full grid-cols-3 mt-10">
			{#each componentsToSelect as component}
				<button
					class="mt-5 card w-[300px] bg-base-100 shadow-xl hover:cursor-pointer hover:bg-[#E6E6E6]"
					on:click={() => {
						viewComponent.update(() => ({
							viewing: true,
							component: component.title
						}));
					}}
				>
					<figure class="px-10 pt-5">
						<img src={component.image} alt="Component" class="rounded-xl" />
					</figure>
					<div class="card-body items-start text-center">
						<h2 class="card-title">{component.title}</h2>
						<p class="text-left text-xs">{component.description}</p>
					</div>
				</button>
			{/each}
		</div>
	{/if}
</div>
