<script>
	import { swCode, cvElement } from '../CodeStore';
	import { v4 as uuidv4 } from 'uuid';

	function addComponent() {
		const sweid = uuidv4();

		let newCvElement = new cvElement('chat1', {
			swElementDataAttrId: sweid,
			classes: [''],
			chat1: `It's over Anakin, <br />I have the high ground.`,
			chat2: `You underestimate my power!`,
			helper: {
				on: false,
				type: 'tooltip',
				classes: ['tooltip'],
				title: 'Hello World!'
			}
		});
		newCvElement.create();
		newCvElement.mc.$on('selected', function () {
			newCvElement.showToolBar();
		});
		swCode.update((v) => ({
			selectedElement: newCvElement,
			cvElements: [...v.cvElements, newCvElement]
		}));
		let csc = document.getElementById('open-component-select');
		csc && csc.click();
	}
</script>

<div class="w-full flex flex-col gap-7 justify-center mb-10">
	<div
		class="preview border-base-300 bg-base-200 rounded-b-box rounded-tr-box flex min-h-[6rem] min-w-[18rem] max-w-4xl flex-wrap items-center justify-center gap-2 overflow-x-hidden border bg-cover bg-top p-4 undefined"
		id="ch"
		style="background-size: 5px 5px"
	>
		<button class="w-full" on:click={addComponent}>
			<div class="w-full">
				<div class="chat chat-start">
					<div class="chat-bubble">It's over Anakin, <br />I have the high ground.</div>
				</div>
				<div class="chat chat-end">
					<div class="chat-bubble">You underestimate my power!</div>
				</div>
			</div>
		</button>
	</div>
	<div
		class="preview border-base-300 bg-base-200 rounded-b-box rounded-tr-box flex min-h-[6rem] min-w-[18rem] max-w-4xl flex-wrap items-center justify-center gap-2 overflow-x-hidden border bg-cover bg-top p-4 hover:cursor-pointer"
		id="ch"
		style="background-size: 5px 5px"
	>
		<div class="w-full">
			<div class="chat chat-start">
				<div class="chat-image avatar">
					<div class="w-10 rounded-full">
						<!-- svelte-ignore a11y-missing-attribute -->
						<img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
					</div>
				</div>
				<div class="chat-bubble">It was said that you would, destroy the Sith, not join them.</div>
			</div>
			<div class="chat chat-start">
				<div class="chat-image avatar">
					<div class="w-10 rounded-full">
						<!-- svelte-ignore a11y-missing-attribute -->
						<img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
					</div>
				</div>
				<div class="chat-bubble">It was you who would bring balance to the Force</div>
			</div>
			<div class="chat chat-start">
				<div class="chat-image avatar">
					<div class="w-10 rounded-full">
						<!-- svelte-ignore a11y-missing-attribute -->
						<img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
					</div>
				</div>
				<div class="chat-bubble">Not leave it in Darkness</div>
			</div>
		</div>
	</div>
	<div
		class="preview border-base-300 bg-base-200 rounded-b-box rounded-tr-box flex min-h-[6rem] min-w-[18rem] max-w-4xl flex-wrap items-center justify-center gap-2 overflow-x-hidden border bg-cover bg-top p-4 hover:cursor-pointer"
		id="ch"
		style="background-size: 5px 5px"
	>
		<div class="w-full">
			<div class="chat chat-start">
				<div class="chat-image avatar">
					<div class="w-10 rounded-full">
						<!-- svelte-ignore a11y-missing-attribute -->
						<img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
					</div>
				</div>
				<div class="chat-header">
					Obi-Wan Kenobi
					<time class="text-xs opacity-50">12:45</time>
				</div>
				<div class="chat-bubble">You were the Chosen One!</div>
				<div class="chat-footer opacity-50">Delivered</div>
			</div>
			<div class="chat chat-end">
				<div class="chat-image avatar">
					<div class="w-10 rounded-full">
						<!-- svelte-ignore a11y-missing-attribute -->
						<img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
					</div>
				</div>
				<div class="chat-header">
					Anakin
					<time class="text-xs opacity-50">12:46</time>
				</div>
				<div class="chat-bubble">I hate you!</div>
				<div class="chat-footer opacity-50">Seen at 12:46</div>
			</div>
		</div>
	</div>
	<div
		class="preview border-base-300 bg-base-200 rounded-b-box rounded-tr-box flex min-h-[6rem] min-w-[18rem] max-w-4xl flex-wrap items-center justify-center gap-2 overflow-x-hidden border bg-cover bg-top p-4 hover:cursor-pointer"
		id="ch"
		style="background-size: 5px 5px"
	>
		<div class="w-full">
			<div class="chat chat-start">
				<div class="chat-header">
					Obi-Wan Kenobi
					<time class="text-xs opacity-50">2 hours ago</time>
				</div>
				<div class="chat-bubble">You were the Chosen One!</div>
				<div class="chat-footer opacity-50">Seen</div>
			</div>
			<div class="chat chat-start">
				<div class="chat-header">
					Obi-Wan Kenobi
					<time class="text-xs opacity-50">2 hour ago</time>
				</div>
				<div class="chat-bubble">I loved you.</div>
				<div class="chat-footer opacity-50">Delivered</div>
			</div>
		</div>
	</div>
	<div
		class="preview border-base-300 bg-base-200 rounded-b-box rounded-tr-box flex min-h-[6rem] min-w-[18rem] max-w-4xl flex-wrap items-center justify-center gap-2 overflow-x-hidden border bg-cover bg-top p-4 hover:cursor-pointer"
		id="ch"
		style="background-size: 5px 5px"
	>
		<div class="w-full">
			<div class="chat chat-start">
				<div class="chat-bubble chat-bubble-primary">What kind of nonsense is this</div>
			</div>
			<div class="chat chat-start">
				<div class="chat-bubble chat-bubble-secondary">
					Put me on the Council and not make me a Master!??
				</div>
			</div>
			<div class="chat chat-start">
				<div class="chat-bubble chat-bubble-accent">
					That's never been done in the history of the Jedi. It's insulting!
				</div>
			</div>
			<div class="chat chat-end">
				<div class="chat-bubble chat-bubble-info">Calm down, Anakin.</div>
			</div>
			<div class="chat chat-end">
				<div class="chat-bubble chat-bubble-success">You have been given a great honor.</div>
			</div>
			<div class="chat chat-end">
				<div class="chat-bubble chat-bubble-warning">To be on the Council at your age.</div>
			</div>
			<div class="chat chat-end">
				<div class="chat-bubble chat-bubble-error">It's never happened before.</div>
			</div>
		</div>
	</div>
</div>

<style>
	#ch {
		background-image: radial-gradient(hsla(var(--bc) / 0.2) 0.5px, hsla(var(--b2) / 1) 0.5px);
	}
</style>
