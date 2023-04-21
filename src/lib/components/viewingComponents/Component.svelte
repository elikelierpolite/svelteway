<script>//@ts-nocheck
	import Alert from './Alert.svelte';
	import { viewComponent } from '../viewComponentsStore';
	import Artboard from './Artboard.svelte';
	import Avartar from './Avartar.svelte';
	import Badge from './Badge.svelte';
	import BottomNavigation from './BottomNavigation.svelte';
	import Breadcrumps from './Breadcrumps.svelte';
	import ButtonGroup from './ButtonGroup.svelte';
	import Button from './Button.svelte';
	import Card from './Card.svelte';
	import Carousel from './Carousel.svelte';
	import Chat from './Chat.svelte';
	import Checkbox from './Checkbox.svelte';
	import Collapse from './Collapse.svelte';
	import Countdown from './Countdown.svelte';
	import Divider from './Divider.svelte';
	import Drawer from './Drawer.svelte';
	import Dropdown from './Dropdown.svelte';
	import FileInput from './FileInput.svelte';
	import Footer from './Footer.svelte';
	import Hero from './Hero.svelte';
	import Indicator from './Indicator.svelte';
	import InputGroup from './InputGroup.svelte';
	import TextInput from './TextInput.svelte';
	import Kbd from './Kbd.svelte';
	import Link from './Link.svelte';
	import Mask from './Mask.svelte';
	import Menu from './Menu.svelte';
	import CodeMockup from './CodeMockup.svelte';
	import PhoneMockup from './PhoneMockup.svelte';
	import WindowMockup from './WindowMockup.svelte';
	import Modal from './Modal.svelte';
	import Navbar from './Navbar.svelte';
	import Pagination from './Pagination.svelte';
	import Progress from './Progress.svelte';
	import RadialProgress from './RadialProgress.svelte';
	import Radio from './Radio.svelte';
	import Range from './Range.svelte';
	import Rating from './Rating.svelte';
	import Select from './Select.svelte';
	import Stack from './Stack.svelte';
	import Stat from './Stat.svelte';
	import Steps from './Steps.svelte';
	import Swap from './Swap.svelte';
	import Tab from './Tab.svelte';
	import Table from './Table.svelte';
	import TextArea from './TextArea.svelte';
	import Toast from './Toast.svelte';
	import Toggle from './Toggle.svelte';
	import Tooltip from './Tooltip.svelte';
	import { onMount } from 'svelte';

	onMount(() => {
			const componentContent = document.getElementById('component-content');
			componentContent.scroll({top:0,behavior:'smooth'});
	});
</script>

<div class="ml-8" id="component-content">
	{#if $viewComponent.component == 'Alert'}
		<Alert />
	{:else if $viewComponent.component == 'Artboard'}
		<Artboard />
	{:else if $viewComponent.component == 'Avatar'}
		<Avartar />
	{:else if $viewComponent.component == 'Badge'}
		<Badge />
	{:else if $viewComponent.component == 'Bottom Navigation'}
		<BottomNavigation />
	{:else if $viewComponent.component == 'Breadcrumbs'}
		<Breadcrumps />
	{:else if $viewComponent.component == 'Button Group'}
		<ButtonGroup />
	{:else if $viewComponent.component == 'Button'}
		<Button />
	{:else if $viewComponent.component == 'Card'}
		<Card />
	{:else if $viewComponent.component == 'Carousel'}
		<Carousel />
	{:else if $viewComponent.component == 'Chat'}
		<Chat />
	{:else if $viewComponent.component == 'Checkbox'}
		<Checkbox />
	{:else if $viewComponent.component == 'Collapse'}
		<Collapse />
	{:else if $viewComponent.component == 'Countdown'}
		<Countdown />
	{:else if $viewComponent.component == 'Divider'}
		<Divider />
	{:else if $viewComponent.component == 'Drawer'}
		<Drawer />
	{:else if $viewComponent.component == 'Dropdown'}
		<Dropdown />
	{:else if $viewComponent.component == 'File Input'}
		<FileInput />
	{:else if $viewComponent.component == 'Footer'}
		<Footer />
	{:else if $viewComponent.component == 'Hero'}
		<Hero />
	{:else if $viewComponent.component == 'Indicator'}
		<Indicator />
	{:else if $viewComponent.component == 'Input Group'}
		<InputGroup />
	{:else if $viewComponent.component == 'Text Input'}
		<TextInput />
	{:else if $viewComponent.component == 'Kbd'}
		<Kbd />
	{:else if $viewComponent.component == 'Link'}
		<Link />
	{:else if $viewComponent.component == 'Mask'}
		<Mask />
	{:else if $viewComponent.component == 'Menu'}
		<Menu />
	{:else if $viewComponent.component == 'Code Mockup'}
		<CodeMockup />
	{:else if $viewComponent.component == 'Phone Mockup'}
		<PhoneMockup />
	{:else if $viewComponent.component == 'Window Mockup'}
		<WindowMockup />
	{:else if $viewComponent.component == 'Modal'}
		<Modal />
	{:else if $viewComponent.component == 'Navbar'}
		<Navbar />
	{:else if $viewComponent.component == 'Pagination'}
		<Pagination />
	{:else if $viewComponent.component == 'Progress'}
		<Progress />
	{:else if $viewComponent.component == 'Radial Progress'}
		<RadialProgress />
	{:else if $viewComponent.component == 'Radio'}
		<Radio />
	{:else if $viewComponent.component == 'Range Slider'}
		<Range />
	{:else if $viewComponent.component == 'Rating'}
		<Rating />
	{:else if $viewComponent.component == 'Select'}
		<Select />
	{:else if $viewComponent.component == 'Stack'}
		<Stack />
	{:else if $viewComponent.component == 'Stat'}
		<Stat />
	{:else if $viewComponent.component == 'Steps'}
		<Steps />
	{:else if $viewComponent.component == 'Swap'}
		<Swap />
	{:else if $viewComponent.component == 'Tab'}
		<Tab />
	{:else if $viewComponent.component == 'Table'}
		<Table />
	{:else if $viewComponent.component == 'Textarea'}
		<TextArea />
	{:else if $viewComponent.component == 'Toast'}
		<Toast />
	{:else if $viewComponent.component == 'Toggle'}
		<Toggle />
	{:else if $viewComponent.component == 'Tooltip'}
		<Tooltip />
	{/if}
</div>
