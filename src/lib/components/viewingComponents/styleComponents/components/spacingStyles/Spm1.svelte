<script>//@ts-nocheckborderswCodeH.selectedElement.mc
    import { onMount } from 'svelte';
    import { margin } from '../../../tailwind-extra'
    import Spm2 from './Spm2.svelte'
    import Spm3 from './Spm3.svelte'
    import Spm4 from './Spm4.svelte'
    import Spm5 from './Spm5.svelte'
    import Spm6 from './Spm6.svelte'
    import Spm7 from './Spm7.svelte'
    
        let swCode
        onMount(async () => {
            const { swCode:swCode2 } = await import('../../../../CodeStore')
            swCode = swCode2
        })
    
        $: swCodeH = $swCode;
    </script>
<div
					tabindex="0"
					class="w-full border-none collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
				>
					<input type="checkbox" class="peer" />
					<div class="collapse-title text-base font-medium">Margin</div>
					<div class="collapse-content">
						<div class="form-control">
						<label class="label cursor-pointer">
						<span class="label-text">m-0</span>
					<input
						type="checkbox"
						checked={swCodeH?.selectedElement?.mc
							? swCodeH?.selectedElement?.mc.classes.includes('m-0')
								? true
								: false
							: false}
						on:change={(e) => {
							if (!e.target.checked) {
								swCodeH.selectedElement.setStylesClass({
									from: margin,
									to: ''
								});
							} else {
								swCodeH.selectedElement.setStylesClass({
									from: margin,
									to: 'm-0'
								});
							}
						}}
						class="checkbox checkbox-xs checkbox-primary"
					/>
		</label>
	</div> 
	<div class="form-control">
		<label class="label cursor-pointer">
			<span class="label-text">mx-0</span>
			<input
				type="checkbox"
				checked={swCodeH?.selectedElement?.mc
					? swCodeH?.selectedElement?.mc.classes.includes('mx-0')
						? true
						: false
					: false}
				on:change={(e) => {
					if (!e.target.checked) {
						swCodeH.selectedElement.setStylesClass({
							from: margin,
							to: ''
						});
					} else {
						swCodeH.selectedElement.setStylesClass({
							from: margin,
							to: 'mx-0'
						});
					}
				}}
				class="checkbox checkbox-xs checkbox-primary"
			/>
		</label>
	</div> 
	<div class="form-control">
		<label class="label cursor-pointer">
			<span class="label-text">my-0</span>
			<input
				type="checkbox"
				checked={swCodeH?.selectedElement?.mc
					? swCodeH?.selectedElement?.mc.classes.includes('my-0')
						? true
						: false
					: false}
				on:change={(e) => {
					if (!e.target.checked) {
						swCodeH.selectedElement.setStylesClass({
							from: margin,
							to: ''
						});
					} else {
						swCodeH.selectedElement.setStylesClass({
							from: margin,
							to: 'my-0'
						});
					}
				}}
				class="checkbox checkbox-xs checkbox-primary"
			/>
		</label>
	</div> 
	<div class="form-control">
		<label class="label cursor-pointer">
			<span class="label-text">ms-0</span>
			<input
				type="checkbox"
				checked={swCodeH?.selectedElement?.mc
					? swCodeH?.selectedElement?.mc.classes.includes('ms-0')
						? true
						: false
					: false}
				on:change={(e) => {
					if (!e.target.checked) {
						swCodeH.selectedElement.setStylesClass({
							from: margin,
							to: ''
						});
					} else {
						swCodeH.selectedElement.setStylesClass({
							from: margin,
							to: 'ms-0'
						});
					}
				}}
				class="checkbox checkbox-xs checkbox-primary"
			/>
		</label>
	</div> 
	<div class="form-control">
		<label class="label cursor-pointer">
			<span class="label-text">me-0</span>
			<input
				type="checkbox"
				checked={swCodeH?.selectedElement?.mc
					? swCodeH?.selectedElement?.mc.classes.includes('me-0')
						? true
						: false
					: false}
				on:change={(e) => {
					if (!e.target.checked) {
						swCodeH.selectedElement.setStylesClass({
							from: margin,
							to: ''
						});
					} else {
						swCodeH.selectedElement.setStylesClass({
							from: margin,
							to: 'me-0'
						});
					}
				}}
				class="checkbox checkbox-xs checkbox-primary"
			/>
		</label>
	</div> 
	<div class="form-control">
		<label class="label cursor-pointer">
			<span class="label-text">mt-0</span>
			<input
				type="checkbox"
				checked={swCodeH?.selectedElement?.mc
					? swCodeH?.selectedElement?.mc.classes.includes('mt-0')
						? true
						: false
					: false}
				on:change={(e) => {
					if (!e.target.checked) {
						swCodeH.selectedElement.setStylesClass({
							from: margin,
							to: ''
						});
					} else {
						swCodeH.selectedElement.setStylesClass({
							from: margin,
							to: 'mt-0'
						});
					}
				}}
				class="checkbox checkbox-xs checkbox-primary"
			/>
		</label>
	</div> 
	<div class="form-control">
		<label class="label cursor-pointer">
			<span class="label-text">mr-0</span>
			<input
				type="checkbox"
				checked={swCodeH?.selectedElement?.mc
					? swCodeH?.selectedElement?.mc.classes.includes('mr-0')
						? true
						: false
					: false}
				on:change={(e) => {
					if (!e.target.checked) {
						swCodeH.selectedElement.setStylesClass({
							from: margin,
							to: ''
						});
					} else {
						swCodeH.selectedElement.setStylesClass({
							from: margin,
							to: 'mr-0'
						});
					}
				}}
				class="checkbox checkbox-xs checkbox-primary"
			/>
		</label>
	</div> <div class="form-control">
		<label class="label cursor-pointer">
			<span class="label-text">mb-0</span>
			<input
				type="checkbox"
				checked={swCodeH?.selectedElement?.mc
					? swCodeH?.selectedElement?.mc.classes.includes('mb-0')
						? true
						: false
					: false}
				on:change={(e) => {
					if (!e.target.checked) {
						swCodeH.selectedElement.setStylesClass({
							from: margin,
							to: ''
						});
					} else {
						swCodeH.selectedElement.setStylesClass({
							from: margin,
							to: 'mb-0'
						});
					}
				}}
				class="checkbox checkbox-xs checkbox-primary"
			/>
		</label>
	</div> <div class="form-control">
		<label class="label cursor-pointer">
			<span class="label-text">ml-0</span>
			<input
				type="checkbox"
				checked={swCodeH?.selectedElement?.mc
					? swCodeH?.selectedElement?.mc.classes.includes('ml-0')
						? true
						: false
					: false}
				on:change={(e) => {
					if (!e.target.checked) {
						swCodeH.selectedElement.setStylesClass({
							from: margin,
							to: ''
						});
					} else {
						swCodeH.selectedElement.setStylesClass({
							from: margin,
							to: 'ml-0'
						});
					}
				}}
				class="checkbox checkbox-xs checkbox-primary"
			/>
		</label>
	</div> <div class="form-control">
		<label class="label cursor-pointer">
			<span class="label-text">m-px</span>
			<input
				type="checkbox"
				checked={swCodeH?.selectedElement?.mc
					? swCodeH?.selectedElement?.mc.classes.includes('m-px')
						? true
						: false
					: false}
				on:change={(e) => {
					if (!e.target.checked) {
						swCodeH.selectedElement.setStylesClass({
							from: margin,
							to: ''
						});
					} else {
						swCodeH.selectedElement.setStylesClass({
							from: margin,
							to: 'm-px'
						});
					}
				}}
				class="checkbox checkbox-xs checkbox-primary"
			/>
		</label>
	</div> <div class="form-control">
		<label class="label cursor-pointer">
			<span class="label-text">mx-px</span>
			<input
				type="checkbox"
				checked={swCodeH?.selectedElement?.mc
					? swCodeH?.selectedElement?.mc.classes.includes('mx-px')
						? true
						: false
					: false}
				on:change={(e) => {
					if (!e.target.checked) {
						swCodeH.selectedElement.setStylesClass({
							from: margin,
							to: ''
						});
					} else {
						swCodeH.selectedElement.setStylesClass({
							from: margin,
							to: 'mx-px'
						});
					}
				}}
				class="checkbox checkbox-xs checkbox-primary"
			/>
		</label>
	</div> <div class="form-control">
		<label class="label cursor-pointer">
			<span class="label-text">my-px</span>
			<input
				type="checkbox"
				checked={swCodeH?.selectedElement?.mc
					? swCodeH?.selectedElement?.mc.classes.includes('my-px')
						? true
						: false
					: false}
				on:change={(e) => {
					if (!e.target.checked) {
						swCodeH.selectedElement.setStylesClass({
							from: margin,
							to: ''
						});
					} else {
						swCodeH.selectedElement.setStylesClass({
							from: margin,
							to: 'my-px'
						});
					}
				}}
				class="checkbox checkbox-xs checkbox-primary"
			/>
		</label>
	</div> <div class="form-control">
		<label class="label cursor-pointer">
			<span class="label-text">ms-px</span>
			<input
				type="checkbox"
				checked={swCodeH?.selectedElement?.mc
					? swCodeH?.selectedElement?.mc.classes.includes('ms-px')
						? true
						: false
					: false}
				on:change={(e) => {
					if (!e.target.checked) {
						swCodeH.selectedElement.setStylesClass({
							from: margin,
							to: ''
						});
					} else {
						swCodeH.selectedElement.setStylesClass({
							from: margin,
							to: 'ms-px'
						});
					}
				}}
				class="checkbox checkbox-xs checkbox-primary"
			/>
		</label>
	</div> <div class="form-control">
		<label class="label cursor-pointer">
			<span class="label-text">me-px</span>
			<input
				type="checkbox"
				checked={swCodeH?.selectedElement?.mc
					? swCodeH?.selectedElement?.mc.classes.includes('me-px')
						? true
						: false
					: false}
				on:change={(e) => {
					if (!e.target.checked) {
						swCodeH.selectedElement.setStylesClass({
							from: margin,
							to: ''
						});
					} else {
						swCodeH.selectedElement.setStylesClass({
							from: margin,
							to: 'me-px'
						});
					}
				}}
				class="checkbox checkbox-xs checkbox-primary"
			/>
		</label>
	</div> <div class="form-control">
		<label class="label cursor-pointer">
			<span class="label-text">mt-px</span>
			<input
				type="checkbox"
				checked={swCodeH?.selectedElement?.mc
					? swCodeH?.selectedElement?.mc.classes.includes('mt-px')
						? true
						: false
					: false}
				on:change={(e) => {
					if (!e.target.checked) {
						swCodeH.selectedElement.setStylesClass({
							from: margin,
							to: ''
						});
					} else {
						swCodeH.selectedElement.setStylesClass({
							from: margin,
							to: 'mt-px'
						});
					}
				}}
				class="checkbox checkbox-xs checkbox-primary"
			/>
		</label>
	</div> <div class="form-control">
		<label class="label cursor-pointer">
			<span class="label-text">mr-px</span>
			<input
				type="checkbox"
				checked={swCodeH?.selectedElement?.mc
					? swCodeH?.selectedElement?.mc.classes.includes('mr-px')
						? true
						: false
					: false}
				on:change={(e) => {
					if (!e.target.checked) {
						swCodeH.selectedElement.setStylesClass({
							from: margin,
							to: ''
						});
					} else {
						swCodeH.selectedElement.setStylesClass({
							from: margin,
							to: 'mr-px'
						});
					}
				}}
				class="checkbox checkbox-xs checkbox-primary"
			/>
		</label>
	</div> <div class="form-control">
		<label class="label cursor-pointer">
			<span class="label-text">mb-px</span>
			<input
				type="checkbox"
				checked={swCodeH?.selectedElement?.mc
					? swCodeH?.selectedElement?.mc.classes.includes('mb-px')
						? true
						: false
					: false}
				on:change={(e) => {
					if (!e.target.checked) {
						swCodeH.selectedElement.setStylesClass({
							from: margin,
							to: ''
						});
					} else {
						swCodeH.selectedElement.setStylesClass({
							from: margin,
							to: 'mb-px'
						});
					}
				}}
				class="checkbox checkbox-xs checkbox-primary"
			/>
		</label>
	</div> <div class="form-control">
		<label class="label cursor-pointer">
			<span class="label-text">ml-px</span>
			<input
				type="checkbox"
				checked={swCodeH?.selectedElement?.mc
					? swCodeH?.selectedElement?.mc.classes.includes('ml-px')
						? true
						: false
					: false}
				on:change={(e) => {
					if (!e.target.checked) {
						swCodeH.selectedElement.setStylesClass({
							from: margin,
							to: ''
						});
					} else {
						swCodeH.selectedElement.setStylesClass({
							from: margin,
							to: 'ml-px'
						});
					}
				}}
				class="checkbox checkbox-xs checkbox-primary"
			/>
		</label>
	</div> <div class="form-control">
		<label class="label cursor-pointer">
			<span class="label-text">m-0.5</span>
			<input
				type="checkbox"
				checked={swCodeH?.selectedElement?.mc
					? swCodeH?.selectedElement?.mc.classes.includes('m-0.5')
						? true
						: false
					: false}
				on:change={(e) => {
					if (!e.target.checked) {
						swCodeH.selectedElement.setStylesClass({
							from: margin,
							to: ''
						});
					} else {
						swCodeH.selectedElement.setStylesClass({
							from: margin,
							to: 'm-0.5'
						});
					}
				}}
				class="checkbox checkbox-xs checkbox-primary"
			/>
		</label>
	</div> <div class="form-control">
		<label class="label cursor-pointer">
			<span class="label-text">mx-0.5</span>
			<input
				type="checkbox"
				checked={swCodeH?.selectedElement?.mc
					? swCodeH?.selectedElement?.mc.classes.includes('mx-0.5')
						? true
						: false
					: false}
				on:change={(e) => {
					if (!e.target.checked) {
						swCodeH.selectedElement.setStylesClass({
							from: margin,
							to: ''
						});
					} else {
						swCodeH.selectedElement.setStylesClass({
							from: margin,
							to: 'mx-0.5'
						});
					}
				}}
				class="checkbox checkbox-xs checkbox-primary"
			/>
		</label>
	</div> <div class="form-control">
		<label class="label cursor-pointer">
			<span class="label-text">my-0.5</span>
			<input
				type="checkbox"
				checked={swCodeH?.selectedElement?.mc
					? swCodeH?.selectedElement?.mc.classes.includes('my-0.5')
						? true
						: false
					: false}
				on:change={(e) => {
					if (!e.target.checked) {
						swCodeH.selectedElement.setStylesClass({
							from: margin,
							to: ''
						});
					} else {
						swCodeH.selectedElement.setStylesClass({
							from: margin,
							to: 'my-0.5'
						});
					}
				}}
				class="checkbox checkbox-xs checkbox-primary"
			/>
		</label>
	</div> <div class="form-control">
		<label class="label cursor-pointer">
			<span class="label-text">ms-0.5</span>
			<input
				type="checkbox"
				checked={swCodeH?.selectedElement?.mc
					? swCodeH?.selectedElement?.mc.classes.includes('ms-0.5')
						? true
						: false
					: false}
				on:change={(e) => {
					if (!e.target.checked) {
						swCodeH.selectedElement.setStylesClass({
							from: margin,
							to: ''
						});
					} else {
						swCodeH.selectedElement.setStylesClass({
							from: margin,
							to: 'ms-0.5'
						});
					}
				}}
				class="checkbox checkbox-xs checkbox-primary"
			/>
		</label>
	</div> <div class="form-control">
		<label class="label cursor-pointer">
			<span class="label-text">me-0.5</span>
			<input
				type="checkbox"
				checked={swCodeH?.selectedElement?.mc
					? swCodeH?.selectedElement?.mc.classes.includes('me-0.5')
						? true
						: false
					: false}
				on:change={(e) => {
					if (!e.target.checked) {
						swCodeH.selectedElement.setStylesClass({
							from: margin,
							to: ''
						});
					} else {
						swCodeH.selectedElement.setStylesClass({
							from: margin,
							to: 'me-0.5'
						});
					}
				}}
				class="checkbox checkbox-xs checkbox-primary"
			/>
		</label>
	</div> <div class="form-control">
		<label class="label cursor-pointer">
			<span class="label-text">mt-0.5</span>
			<input
				type="checkbox"
				checked={swCodeH?.selectedElement?.mc
					? swCodeH?.selectedElement?.mc.classes.includes('mt-0.5')
						? true
						: false
					: false}
				on:change={(e) => {
					if (!e.target.checked) {
						swCodeH.selectedElement.setStylesClass({
							from: margin,
							to: ''
						});
					} else {
						swCodeH.selectedElement.setStylesClass({
							from: margin,
							to: 'mt-0.5'
						});
					}
				}}
				class="checkbox checkbox-xs checkbox-primary"
			/>
		</label>
	</div> <div class="form-control">
		<label class="label cursor-pointer">
			<span class="label-text">mr-0.5</span>
			<input
				type="checkbox"
				checked={swCodeH?.selectedElement?.mc
					? swCodeH?.selectedElement?.mc.classes.includes('mr-0.5')
						? true
						: false
					: false}
				on:change={(e) => {
					if (!e.target.checked) {
						swCodeH.selectedElement.setStylesClass({
							from: margin,
							to: ''
						});
					} else {
						swCodeH.selectedElement.setStylesClass({
							from: margin,
							to: 'mr-0.5'
						});
					}
				}}
				class="checkbox checkbox-xs checkbox-primary"
			/>
		</label>
	</div> <div class="form-control">
		<label class="label cursor-pointer">
			<span class="label-text">mb-0.5</span>
			<input
				type="checkbox"
				checked={swCodeH?.selectedElement?.mc
					? swCodeH?.selectedElement?.mc.classes.includes('mb-0.5')
						? true
						: false
					: false}
				on:change={(e) => {
					if (!e.target.checked) {
						swCodeH.selectedElement.setStylesClass({
							from: margin,
							to: ''
						});
					} else {
						swCodeH.selectedElement.setStylesClass({
							from: margin,
							to: 'mb-0.5'
						});
					}
				}}
				class="checkbox checkbox-xs checkbox-primary"
			/>
		</label>
	</div> <div class="form-control">
		<label class="label cursor-pointer">
			<span class="label-text">ml-0.5</span>
			<input
				type="checkbox"
				checked={swCodeH?.selectedElement?.mc
					? swCodeH?.selectedElement?.mc.classes.includes('ml-0.5')
						? true
						: false
					: false}
				on:change={(e) => {
					if (!e.target.checked) {
						swCodeH.selectedElement.setStylesClass({
							from: margin,
							to: ''
						});
					} else {
						swCodeH.selectedElement.setStylesClass({
							from: margin,
							to: 'ml-0.5'
						});
					}
				}}
				class="checkbox checkbox-xs checkbox-primary"
			/>
		</label>
	</div> <div class="form-control">
		<label class="label cursor-pointer">
			<span class="label-text">m-1</span>
			<input
				type="checkbox"
				checked={swCodeH?.selectedElement?.mc
					? swCodeH?.selectedElement?.mc.classes.includes('m-1')
						? true
						: false
					: false}
				on:change={(e) => {
					if (!e.target.checked) {
						swCodeH.selectedElement.setStylesClass({
							from: margin,
							to: ''
						});
					} else {
						swCodeH.selectedElement.setStylesClass({
							from: margin,
							to: 'm-1'
						});
					}
				}}
				class="checkbox checkbox-xs checkbox-primary"
			/>
		</label>
	</div> <div class="form-control">
		<label class="label cursor-pointer">
			<span class="label-text">mx-1</span>
			<input
				type="checkbox"
				checked={swCodeH?.selectedElement?.mc
					? swCodeH?.selectedElement?.mc.classes.includes('mx-1')
						? true
						: false
					: false}
				on:change={(e) => {
					if (!e.target.checked) {
						swCodeH.selectedElement.setStylesClass({
							from: margin,
							to: ''
						});
					} else {
						swCodeH.selectedElement.setStylesClass({
							from: margin,
							to: 'mx-1'
						});
					}
				}}
				class="checkbox checkbox-xs checkbox-primary"
			/>
		</label>
	</div> <div class="form-control">
		<label class="label cursor-pointer">
			<span class="label-text">my-1</span>
			<input
				type="checkbox"
				checked={swCodeH?.selectedElement?.mc
					? swCodeH?.selectedElement?.mc.classes.includes('my-1')
						? true
						: false
					: false}
				on:change={(e) => {
					if (!e.target.checked) {
						swCodeH.selectedElement.setStylesClass({
							from: margin,
							to: ''
						});
					} else {
						swCodeH.selectedElement.setStylesClass({
							from: margin,
							to: 'my-1'
						});
					}
				}}
				class="checkbox checkbox-xs checkbox-primary"
			/>
		</label>
	</div> <div class="form-control">
		<label class="label cursor-pointer">
			<span class="label-text">ms-1</span>
			<input
				type="checkbox"
				checked={swCodeH?.selectedElement?.mc
					? swCodeH?.selectedElement?.mc.classes.includes('ms-1')
						? true
						: false
					: false}
				on:change={(e) => {
					if (!e.target.checked) {
						swCodeH.selectedElement.setStylesClass({
							from: margin,
							to: ''
						});
					} else {
						swCodeH.selectedElement.setStylesClass({
							from: margin,
							to: 'ms-1'
						});
					}
				}}
				class="checkbox checkbox-xs checkbox-primary"
			/>
		</label>
	</div> <div class="form-control">
		<label class="label cursor-pointer">
			<span class="label-text">me-1</span>
			<input
				type="checkbox"
				checked={swCodeH?.selectedElement?.mc
					? swCodeH?.selectedElement?.mc.classes.includes('me-1')
						? true
						: false
					: false}
				on:change={(e) => {
					if (!e.target.checked) {
						swCodeH.selectedElement.setStylesClass({
							from: margin,
							to: ''
						});
					} else {
						swCodeH.selectedElement.setStylesClass({
							from: margin,
							to: 'me-1'
						});
					}
				}}
				class="checkbox checkbox-xs checkbox-primary"
			/>
		</label>
	</div> <div class="form-control">
		<label class="label cursor-pointer">
			<span class="label-text">mt-1</span>
			<input
				type="checkbox"
				checked={swCodeH?.selectedElement?.mc
					? swCodeH?.selectedElement?.mc.classes.includes('mt-1')
						? true
						: false
					: false}
				on:change={(e) => {
					if (!e.target.checked) {
						swCodeH.selectedElement.setStylesClass({
							from: margin,
							to: ''
						});
					} else {
						swCodeH.selectedElement.setStylesClass({
							from: margin,
							to: 'mt-1'
						});
					}
				}}
				class="checkbox checkbox-xs checkbox-primary"
			/>
		</label>
	</div> <div class="form-control">
		<label class="label cursor-pointer">
			<span class="label-text">mr-1</span>
			<input
				type="checkbox"
				checked={swCodeH?.selectedElement?.mc
					? swCodeH?.selectedElement?.mc.classes.includes('mr-1')
						? true
						: false
					: false}
				on:change={(e) => {
					if (!e.target.checked) {
						swCodeH.selectedElement.setStylesClass({
							from: margin,
							to: ''
						});
					} else {
						swCodeH.selectedElement.setStylesClass({
							from: margin,
							to: 'mr-1'
						});
					}
				}}
				class="checkbox checkbox-xs checkbox-primary"
			/>
		</label>
	</div> <div class="form-control">
		<label class="label cursor-pointer">
			<span class="label-text">mb-1</span>
			<input
				type="checkbox"
				checked={swCodeH?.selectedElement?.mc
					? swCodeH?.selectedElement?.mc.classes.includes('mb-1')
						? true
						: false
					: false}
				on:change={(e) => {
					if (!e.target.checked) {
						swCodeH.selectedElement.setStylesClass({
							from: margin,
							to: ''
						});
					} else {
						swCodeH.selectedElement.setStylesClass({
							from: margin,
							to: 'mb-1'
						});
					}
				}}
				class="checkbox checkbox-xs checkbox-primary"
			/>
		</label>
	</div> <div class="form-control">
		<label class="label cursor-pointer">
			<span class="label-text">ml-1</span>
			<input
				type="checkbox"
				checked={swCodeH?.selectedElement?.mc
					? swCodeH?.selectedElement?.mc.classes.includes('ml-1')
						? true
						: false
					: false}
				on:change={(e) => {
					if (!e.target.checked) {
						swCodeH.selectedElement.setStylesClass({
							from: margin,
							to: ''
						});
					} else {
						swCodeH.selectedElement.setStylesClass({
							from: margin,
							to: 'ml-1'
						});
					}
				}}
				class="checkbox checkbox-xs checkbox-primary"
			/>
		</label>
	</div> 
    <Spm2 />
    <Spm3 />
    <Spm4 />
    <Spm5 />
    <Spm6 />
    <Spm7 />
     <div class="form-control">
		<label class="label cursor-pointer">
			<span class="label-text">m-64</span>
			<input
				type="checkbox"
				checked={swCodeH?.selectedElement?.mc
					? swCodeH?.selectedElement?.mc.classes.includes('m-64')
						? true
						: false
					: false}
				on:change={(e) => {
					if (!e.target.checked) {
						swCodeH.selectedElement.setStylesClass({
							from: margin,
							to: ''
						});
					} else {
						swCodeH.selectedElement.setStylesClass({
							from: margin,
							to: 'm-64'
						});
					}
				}}
				class="checkbox checkbox-xs checkbox-primary"
			/>
		</label>
	</div> <div class="form-control">
		<label class="label cursor-pointer">
			<span class="label-text">mx-64</span>
			<input
				type="checkbox"
				checked={swCodeH?.selectedElement?.mc
					? swCodeH?.selectedElement?.mc.classes.includes('mx-64')
						? true
						: false
					: false}
				on:change={(e) => {
					if (!e.target.checked) {
						swCodeH.selectedElement.setStylesClass({
							from: margin,
							to: ''
						});
					} else {
						swCodeH.selectedElement.setStylesClass({
							from: margin,
							to: 'mx-64'
						});
					}
				}}
				class="checkbox checkbox-xs checkbox-primary"
			/>
		</label>
	</div> <div class="form-control">
		<label class="label cursor-pointer">
			<span class="label-text">my-64</span>
			<input
				type="checkbox"
				checked={swCodeH?.selectedElement?.mc
					? swCodeH?.selectedElement?.mc.classes.includes('my-64')
						? true
						: false
					: false}
				on:change={(e) => {
					if (!e.target.checked) {
						swCodeH.selectedElement.setStylesClass({
							from: margin,
							to: ''
						});
					} else {
						swCodeH.selectedElement.setStylesClass({
							from: margin,
							to: 'my-64'
						});
					}
				}}
				class="checkbox checkbox-xs checkbox-primary"
			/>
		</label>
	</div> <div class="form-control">
		<label class="label cursor-pointer">
			<span class="label-text">ms-64</span>
			<input
				type="checkbox"
				checked={swCodeH?.selectedElement?.mc
					? swCodeH?.selectedElement?.mc.classes.includes('ms-64')
						? true
						: false
					: false}
				on:change={(e) => {
					if (!e.target.checked) {
						swCodeH.selectedElement.setStylesClass({
							from: margin,
							to: ''
						});
					} else {
						swCodeH.selectedElement.setStylesClass({
							from: margin,
							to: 'ms-64'
						});
					}
				}}
				class="checkbox checkbox-xs checkbox-primary"
			/>
		</label>
	</div> <div class="form-control">
		<label class="label cursor-pointer">
			<span class="label-text">me-64</span>
			<input
				type="checkbox"
				checked={swCodeH?.selectedElement?.mc
					? swCodeH?.selectedElement?.mc.classes.includes('me-64')
						? true
						: false
					: false}
				on:change={(e) => {
					if (!e.target.checked) {
						swCodeH.selectedElement.setStylesClass({
							from: margin,
							to: ''
						});
					} else {
						swCodeH.selectedElement.setStylesClass({
							from: margin,
							to: 'me-64'
						});
					}
				}}
				class="checkbox checkbox-xs checkbox-primary"
			/>
		</label>
	</div> <div class="form-control">
		<label class="label cursor-pointer">
			<span class="label-text">mt-64</span>
			<input
				type="checkbox"
				checked={swCodeH?.selectedElement?.mc
					? swCodeH?.selectedElement?.mc.classes.includes('mt-64')
						? true
						: false
					: false}
				on:change={(e) => {
					if (!e.target.checked) {
						swCodeH.selectedElement.setStylesClass({
							from: margin,
							to: ''
						});
					} else {
						swCodeH.selectedElement.setStylesClass({
							from: margin,
							to: 'mt-64'
						});
					}
				}}
				class="checkbox checkbox-xs checkbox-primary"
			/>
		</label>
	</div> <div class="form-control">
		<label class="label cursor-pointer">
			<span class="label-text">mr-64</span>
			<input
				type="checkbox"
				checked={swCodeH?.selectedElement?.mc
					? swCodeH?.selectedElement?.mc.classes.includes('mr-64')
						? true
						: false
					: false}
				on:change={(e) => {
					if (!e.target.checked) {
						swCodeH.selectedElement.setStylesClass({
							from: margin,
							to: ''
						});
					} else {
						swCodeH.selectedElement.setStylesClass({
							from: margin,
							to: 'mr-64'
						});
					}
				}}
				class="checkbox checkbox-xs checkbox-primary"
			/>
		</label>
	</div> <div class="form-control">
		<label class="label cursor-pointer">
			<span class="label-text">mb-64</span>
			<input
				type="checkbox"
				checked={swCodeH?.selectedElement?.mc
					? swCodeH?.selectedElement?.mc.classes.includes('mb-64')
						? true
						: false
					: false}
				on:change={(e) => {
					if (!e.target.checked) {
						swCodeH.selectedElement.setStylesClass({
							from: margin,
							to: ''
						});
					} else {
						swCodeH.selectedElement.setStylesClass({
							from: margin,
							to: 'mb-64'
						});
					}
				}}
				class="checkbox checkbox-xs checkbox-primary"
			/>
		</label>
	</div> <div class="form-control">
		<label class="label cursor-pointer">
			<span class="label-text">ml-64</span>
			<input
				type="checkbox"
				checked={swCodeH?.selectedElement?.mc
					? swCodeH?.selectedElement?.mc.classes.includes('ml-64')
						? true
						: false
					: false}
				on:change={(e) => {
					if (!e.target.checked) {
						swCodeH.selectedElement.setStylesClass({
							from: margin,
							to: ''
						});
					} else {
						swCodeH.selectedElement.setStylesClass({
							from: margin,
							to: 'ml-64'
						});
					}
				}}
				class="checkbox checkbox-xs checkbox-primary"
			/>
		</label>
	</div> <div class="form-control">
		<label class="label cursor-pointer">
			<span class="label-text">m-72</span>
			<input
				type="checkbox"
				checked={swCodeH?.selectedElement?.mc
					? swCodeH?.selectedElement?.mc.classes.includes('m-72')
						? true
						: false
					: false}
				on:change={(e) => {
					if (!e.target.checked) {
						swCodeH.selectedElement.setStylesClass({
							from: margin,
							to: ''
						});
					} else {
						swCodeH.selectedElement.setStylesClass({
							from: margin,
							to: 'm-72'
						});
					}
				}}
				class="checkbox checkbox-xs checkbox-primary"
			/>
		</label>
	</div> <div class="form-control">
		<label class="label cursor-pointer">
			<span class="label-text">mx-72</span>
			<input
				type="checkbox"
				checked={swCodeH?.selectedElement?.mc
					? swCodeH?.selectedElement?.mc.classes.includes('mx-72')
						? true
						: false
					: false}
				on:change={(e) => {
					if (!e.target.checked) {
						swCodeH.selectedElement.setStylesClass({
							from: margin,
							to: ''
						});
					} else {
						swCodeH.selectedElement.setStylesClass({
							from: margin,
							to: 'mx-72'
						});
					}
				}}
				class="checkbox checkbox-xs checkbox-primary"
			/>
		</label>
	</div> <div class="form-control">
		<label class="label cursor-pointer">
			<span class="label-text">my-72</span>
			<input
				type="checkbox"
				checked={swCodeH?.selectedElement?.mc
					? swCodeH?.selectedElement?.mc.classes.includes('my-72')
						? true
						: false
					: false}
				on:change={(e) => {
					if (!e.target.checked) {
						swCodeH.selectedElement.setStylesClass({
							from: margin,
							to: ''
						});
					} else {
						swCodeH.selectedElement.setStylesClass({
							from: margin,
							to: 'my-72'
						});
					}
				}}
				class="checkbox checkbox-xs checkbox-primary"
			/>
		</label>
	</div> <div class="form-control">
		<label class="label cursor-pointer">
			<span class="label-text">ms-72</span>
			<input
				type="checkbox"
				checked={swCodeH?.selectedElement?.mc
					? swCodeH?.selectedElement?.mc.classes.includes('ms-72')
						? true
						: false
					: false}
				on:change={(e) => {
					if (!e.target.checked) {
						swCodeH.selectedElement.setStylesClass({
							from: margin,
							to: ''
						});
					} else {
						swCodeH.selectedElement.setStylesClass({
							from: margin,
							to: 'ms-72'
						});
					}
				}}
				class="checkbox checkbox-xs checkbox-primary"
			/>
		</label>
	</div> <div class="form-control">
		<label class="label cursor-pointer">
			<span class="label-text">me-72</span>
			<input
				type="checkbox"
				checked={swCodeH?.selectedElement?.mc
					? swCodeH?.selectedElement?.mc.classes.includes('me-72')
						? true
						: false
					: false}
				on:change={(e) => {
					if (!e.target.checked) {
						swCodeH.selectedElement.setStylesClass({
							from: margin,
							to: ''
						});
					} else {
						swCodeH.selectedElement.setStylesClass({
							from: margin,
							to: 'me-72'
						});
					}
				}}
				class="checkbox checkbox-xs checkbox-primary"
			/>
		</label>
	</div> <div class="form-control">
		<label class="label cursor-pointer">
			<span class="label-text">mt-72</span>
			<input
				type="checkbox"
				checked={swCodeH?.selectedElement?.mc
					? swCodeH?.selectedElement?.mc.classes.includes('mt-72')
						? true
						: false
					: false}
				on:change={(e) => {
					if (!e.target.checked) {
						swCodeH.selectedElement.setStylesClass({
							from: margin,
							to: ''
						});
					} else {
						swCodeH.selectedElement.setStylesClass({
							from: margin,
							to: 'mt-72'
						});
					}
				}}
				class="checkbox checkbox-xs checkbox-primary"
			/>
		</label>
	</div> <div class="form-control">
		<label class="label cursor-pointer">
			<span class="label-text">mr-72</span>
			<input
				type="checkbox"
				checked={swCodeH?.selectedElement?.mc
					? swCodeH?.selectedElement?.mc.classes.includes('mr-72')
						? true
						: false
					: false}
				on:change={(e) => {
					if (!e.target.checked) {
						swCodeH.selectedElement.setStylesClass({
							from: margin,
							to: ''
						});
					} else {
						swCodeH.selectedElement.setStylesClass({
							from: margin,
							to: 'mr-72'
						});
					}
				}}
				class="checkbox checkbox-xs checkbox-primary"
			/>
		</label>
	</div> <div class="form-control">
		<label class="label cursor-pointer">
			<span class="label-text">mb-72</span>
			<input
				type="checkbox"
				checked={swCodeH?.selectedElement?.mc
					? swCodeH?.selectedElement?.mc.classes.includes('mb-72')
						? true
						: false
					: false}
				on:change={(e) => {
					if (!e.target.checked) {
						swCodeH.selectedElement.setStylesClass({
							from: margin,
							to: ''
						});
					} else {
						swCodeH.selectedElement.setStylesClass({
							from: margin,
							to: 'mb-72'
						});
					}
				}}
				class="checkbox checkbox-xs checkbox-primary"
			/>
		</label>
	</div> <div class="form-control">
		<label class="label cursor-pointer">
			<span class="label-text">ml-72</span>
			<input
				type="checkbox"
				checked={swCodeH?.selectedElement?.mc
					? swCodeH?.selectedElement?.mc.classes.includes('ml-72')
						? true
						: false
					: false}
				on:change={(e) => {
					if (!e.target.checked) {
						swCodeH.selectedElement.setStylesClass({
							from: margin,
							to: ''
						});
					} else {
						swCodeH.selectedElement.setStylesClass({
							from: margin,
							to: 'ml-72'
						});
					}
				}}
				class="checkbox checkbox-xs checkbox-primary"
			/>
		</label>
	</div> <div class="form-control">
		<label class="label cursor-pointer">
			<span class="label-text">m-80</span>
			<input
				type="checkbox"
				checked={swCodeH?.selectedElement?.mc
					? swCodeH?.selectedElement?.mc.classes.includes('m-80')
						? true
						: false
					: false}
				on:change={(e) => {
					if (!e.target.checked) {
						swCodeH.selectedElement.setStylesClass({
							from: margin,
							to: ''
						});
					} else {
						swCodeH.selectedElement.setStylesClass({
							from: margin,
							to: 'm-80'
						});
					}
				}}
				class="checkbox checkbox-xs checkbox-primary"
			/>
		</label>
	</div> <div class="form-control">
		<label class="label cursor-pointer">
			<span class="label-text">mx-80</span>
			<input
				type="checkbox"
				checked={swCodeH?.selectedElement?.mc
					? swCodeH?.selectedElement?.mc.classes.includes('mx-80')
						? true
						: false
					: false}
				on:change={(e) => {
					if (!e.target.checked) {
						swCodeH.selectedElement.setStylesClass({
							from: margin,
							to: ''
						});
					} else {
						swCodeH.selectedElement.setStylesClass({
							from: margin,
							to: 'mx-80'
						});
					}
				}}
				class="checkbox checkbox-xs checkbox-primary"
			/>
		</label>
	</div> <div class="form-control">
		<label class="label cursor-pointer">
			<span class="label-text">my-80</span>
			<input
				type="checkbox"
				checked={swCodeH?.selectedElement?.mc
					? swCodeH?.selectedElement?.mc.classes.includes('my-80')
						? true
						: false
					: false}
				on:change={(e) => {
					if (!e.target.checked) {
						swCodeH.selectedElement.setStylesClass({
							from: margin,
							to: ''
						});
					} else {
						swCodeH.selectedElement.setStylesClass({
							from: margin,
							to: 'my-80'
						});
					}
				}}
				class="checkbox checkbox-xs checkbox-primary"
			/>
		</label>
	</div> <div class="form-control">
		<label class="label cursor-pointer">
			<span class="label-text">ms-80</span>
			<input
				type="checkbox"
				checked={swCodeH?.selectedElement?.mc
					? swCodeH?.selectedElement?.mc.classes.includes('ms-80')
						? true
						: false
					: false}
				on:change={(e) => {
					if (!e.target.checked) {
						swCodeH.selectedElement.setStylesClass({
							from: margin,
							to: ''
						});
					} else {
						swCodeH.selectedElement.setStylesClass({
							from: margin,
							to: 'ms-80'
						});
					}
				}}
				class="checkbox checkbox-xs checkbox-primary"
			/>
		</label>
	</div> <div class="form-control">
		<label class="label cursor-pointer">
			<span class="label-text">me-80</span>
			<input
				type="checkbox"
				checked={swCodeH?.selectedElement?.mc
					? swCodeH?.selectedElement?.mc.classes.includes('me-80')
						? true
						: false
					: false}
				on:change={(e) => {
					if (!e.target.checked) {
						swCodeH.selectedElement.setStylesClass({
							from: margin,
							to: ''
						});
					} else {
						swCodeH.selectedElement.setStylesClass({
							from: margin,
							to: 'me-80'
						});
					}
				}}
				class="checkbox checkbox-xs checkbox-primary"
			/>
		</label>
	</div> <div class="form-control">
		<label class="label cursor-pointer">
			<span class="label-text">mt-80</span>
			<input
				type="checkbox"
				checked={swCodeH?.selectedElement?.mc
					? swCodeH?.selectedElement?.mc.classes.includes('mt-80')
						? true
						: false
					: false}
				on:change={(e) => {
					if (!e.target.checked) {
						swCodeH.selectedElement.setStylesClass({
							from: margin,
							to: ''
						});
					} else {
						swCodeH.selectedElement.setStylesClass({
							from: margin,
							to: 'mt-80'
						});
					}
				}}
				class="checkbox checkbox-xs checkbox-primary"
			/>
		</label>
	</div> <div class="form-control">
		<label class="label cursor-pointer">
			<span class="label-text">mr-80</span>
			<input
				type="checkbox"
				checked={swCodeH?.selectedElement?.mc
					? swCodeH?.selectedElement?.mc.classes.includes('mr-80')
						? true
						: false
					: false}
				on:change={(e) => {
					if (!e.target.checked) {
						swCodeH.selectedElement.setStylesClass({
							from: margin,
							to: ''
						});
					} else {
						swCodeH.selectedElement.setStylesClass({
							from: margin,
							to: 'mr-80'
						});
					}
				}}
				class="checkbox checkbox-xs checkbox-primary"
			/>
		</label>
	</div> <div class="form-control">
		<label class="label cursor-pointer">
			<span class="label-text">mb-80</span>
			<input
				type="checkbox"
				checked={swCodeH?.selectedElement?.mc
					? swCodeH?.selectedElement?.mc.classes.includes('mb-80')
						? true
						: false
					: false}
				on:change={(e) => {
					if (!e.target.checked) {
						swCodeH.selectedElement.setStylesClass({
							from: margin,
							to: ''
						});
					} else {
						swCodeH.selectedElement.setStylesClass({
							from: margin,
							to: 'mb-80'
						});
					}
				}}
				class="checkbox checkbox-xs checkbox-primary"
			/>
		</label>
	</div> <div class="form-control">
		<label class="label cursor-pointer">
			<span class="label-text">ml-80</span>
			<input
				type="checkbox"
				checked={swCodeH?.selectedElement?.mc
					? swCodeH?.selectedElement?.mc.classes.includes('ml-80')
						? true
						: false
					: false}
				on:change={(e) => {
					if (!e.target.checked) {
						swCodeH.selectedElement.setStylesClass({
							from: margin,
							to: ''
						});
					} else {
						swCodeH.selectedElement.setStylesClass({
							from: margin,
							to: 'ml-80'
						});
					}
				}}
				class="checkbox checkbox-xs checkbox-primary"
			/>
		</label>
	</div> <div class="form-control">
		<label class="label cursor-pointer">
			<span class="label-text">m-96</span>
			<input
				type="checkbox"
				checked={swCodeH?.selectedElement?.mc
					? swCodeH?.selectedElement?.mc.classes.includes('m-96')
						? true
						: false
					: false}
				on:change={(e) => {
					if (!e.target.checked) {
						swCodeH.selectedElement.setStylesClass({
							from: margin,
							to: ''
						});
					} else {
						swCodeH.selectedElement.setStylesClass({
							from: margin,
							to: 'm-96'
						});
					}
				}}
				class="checkbox checkbox-xs checkbox-primary"
			/>
		</label>
	</div> <div class="form-control">
		<label class="label cursor-pointer">
			<span class="label-text">mx-96</span>
			<input
				type="checkbox"
				checked={swCodeH?.selectedElement?.mc
					? swCodeH?.selectedElement?.mc.classes.includes('mx-96')
						? true
						: false
					: false}
				on:change={(e) => {
					if (!e.target.checked) {
						swCodeH.selectedElement.setStylesClass({
							from: margin,
							to: ''
						});
					} else {
						swCodeH.selectedElement.setStylesClass({
							from: margin,
							to: 'mx-96'
						});
					}
				}}
				class="checkbox checkbox-xs checkbox-primary"
			/>
		</label>
	</div> <div class="form-control">
		<label class="label cursor-pointer">
			<span class="label-text">my-96</span>
			<input
				type="checkbox"
				checked={swCodeH?.selectedElement?.mc
					? swCodeH?.selectedElement?.mc.classes.includes('my-96')
						? true
						: false
					: false}
				on:change={(e) => {
					if (!e.target.checked) {
						swCodeH.selectedElement.setStylesClass({
							from: margin,
							to: ''
						});
					} else {
						swCodeH.selectedElement.setStylesClass({
							from: margin,
							to: 'my-96'
						});
					}
				}}
				class="checkbox checkbox-xs checkbox-primary"
			/>
		</label>
	</div> <div class="form-control">
		<label class="label cursor-pointer">
			<span class="label-text">ms-96</span>
			<input
				type="checkbox"
				checked={swCodeH?.selectedElement?.mc
					? swCodeH?.selectedElement?.mc.classes.includes('ms-96')
						? true
						: false
					: false}
				on:change={(e) => {
					if (!e.target.checked) {
						swCodeH.selectedElement.setStylesClass({
							from: margin,
							to: ''
						});
					} else {
						swCodeH.selectedElement.setStylesClass({
							from: margin,
							to: 'ms-96'
						});
					}
				}}
				class="checkbox checkbox-xs checkbox-primary"
			/>
		</label>
	</div> <div class="form-control">
		<label class="label cursor-pointer">
			<span class="label-text">me-96</span>
			<input
				type="checkbox"
				checked={swCodeH?.selectedElement?.mc
					? swCodeH?.selectedElement?.mc.classes.includes('me-96')
						? true
						: false
					: false}
				on:change={(e) => {
					if (!e.target.checked) {
						swCodeH.selectedElement.setStylesClass({
							from: margin,
							to: ''
						});
					} else {
						swCodeH.selectedElement.setStylesClass({
							from: margin,
							to: 'me-96'
						});
					}
				}}
				class="checkbox checkbox-xs checkbox-primary"
			/>
		</label>
	</div> <div class="form-control">
		<label class="label cursor-pointer">
			<span class="label-text">mt-96</span>
			<input
				type="checkbox"
				checked={swCodeH?.selectedElement?.mc
					? swCodeH?.selectedElement?.mc.classes.includes('mt-96')
						? true
						: false
					: false}
				on:change={(e) => {
					if (!e.target.checked) {
						swCodeH.selectedElement.setStylesClass({
							from: margin,
							to: ''
						});
					} else {
						swCodeH.selectedElement.setStylesClass({
							from: margin,
							to: 'mt-96'
						});
					}
				}}
				class="checkbox checkbox-xs checkbox-primary"
			/>
		</label>
	</div> <div class="form-control">
		<label class="label cursor-pointer">
			<span class="label-text">mr-96</span>
			<input
				type="checkbox"
				checked={swCodeH?.selectedElement?.mc
					? swCodeH?.selectedElement?.mc.classes.includes('mr-96')
						? true
						: false
					: false}
				on:change={(e) => {
					if (!e.target.checked) {
						swCodeH.selectedElement.setStylesClass({
							from: margin,
							to: ''
						});
					} else {
						swCodeH.selectedElement.setStylesClass({
							from: margin,
							to: 'mr-96'
						});
					}
				}}
				class="checkbox checkbox-xs checkbox-primary"
			/>
		</label>
	</div> <div class="form-control">
		<label class="label cursor-pointer">
			<span class="label-text">mb-96</span>
			<input
				type="checkbox"
				checked={swCodeH?.selectedElement?.mc
					? swCodeH?.selectedElement?.mc.classes.includes('mb-96')
						? true
						: false
					: false}
				on:change={(e) => {
					if (!e.target.checked) {
						swCodeH.selectedElement.setStylesClass({
							from: margin,
							to: ''
						});
					} else {
						swCodeH.selectedElement.setStylesClass({
							from: margin,
							to: 'mb-96'
						});
					}
				}}
				class="checkbox checkbox-xs checkbox-primary"
			/>
		</label>
	</div> <div class="form-control">
		<label class="label cursor-pointer">
			<span class="label-text">ml-96</span>
			<input
				type="checkbox"
				checked={swCodeH?.selectedElement?.mc
					? swCodeH?.selectedElement?.mc.classes.includes('ml-96')
						? true
						: false
					: false}
				on:change={(e) => {
					if (!e.target.checked) {
						swCodeH.selectedElement.setStylesClass({
							from: margin,
							to: ''
						});
					} else {
						swCodeH.selectedElement.setStylesClass({
							from: margin,
							to: 'ml-96'
						});
					}
				}}
				class="checkbox checkbox-xs checkbox-primary"
			/>
		</label>
	</div> <div class="form-control">
		<label class="label cursor-pointer">
			<span class="label-text">m-auto</span>
			<input
				type="checkbox"
				checked={swCodeH?.selectedElement?.mc
					? swCodeH?.selectedElement?.mc.classes.includes('m-auto')
						? true
						: false
					: false}
				on:change={(e) => {
					if (!e.target.checked) {
						swCodeH.selectedElement.setStylesClass({
							from: margin,
							to: ''
						});
					} else {
						swCodeH.selectedElement.setStylesClass({
							from: margin,
							to: 'm-auto'
						});
					}
				}}
				class="checkbox checkbox-xs checkbox-primary"
			/>
		</label>
	</div> <div class="form-control">
		<label class="label cursor-pointer">
			<span class="label-text">mx-auto</span>
			<input
				type="checkbox"
				checked={swCodeH?.selectedElement?.mc
					? swCodeH?.selectedElement?.mc.classes.includes('mx-auto')
						? true
						: false
					: false}
				on:change={(e) => {
					if (!e.target.checked) {
						swCodeH.selectedElement.setStylesClass({
							from: margin,
							to: ''
						});
					} else {
						swCodeH.selectedElement.setStylesClass({
							from: margin,
							to: 'mx-auto'
						});
					}
				}}
				class="checkbox checkbox-xs checkbox-primary"
			/>
		</label>
	</div> <div class="form-control">
		<label class="label cursor-pointer">
			<span class="label-text">my-auto</span>
			<input
				type="checkbox"
				checked={swCodeH?.selectedElement?.mc
					? swCodeH?.selectedElement?.mc.classes.includes('my-auto')
						? true
						: false
					: false}
				on:change={(e) => {
					if (!e.target.checked) {
						swCodeH.selectedElement.setStylesClass({
							from: margin,
							to: ''
						});
					} else {
						swCodeH.selectedElement.setStylesClass({
							from: margin,
							to: 'my-auto'
						});
					}
				}}
				class="checkbox checkbox-xs checkbox-primary"
			/>
		</label>
	</div> <div class="form-control">
		<label class="label cursor-pointer">
			<span class="label-text">ms-auto</span>
			<input
				type="checkbox"
				checked={swCodeH?.selectedElement?.mc
					? swCodeH?.selectedElement?.mc.classes.includes('ms-auto')
						? true
						: false
					: false}
				on:change={(e) => {
					if (!e.target.checked) {
						swCodeH.selectedElement.setStylesClass({
							from: margin,
							to: ''
						});
					} else {
						swCodeH.selectedElement.setStylesClass({
							from: margin,
							to: 'ms-auto'
						});
					}
				}}
				class="checkbox checkbox-xs checkbox-primary"
			/>
		</label>
	</div> <div class="form-control">
		<label class="label cursor-pointer">
			<span class="label-text">me-auto</span>
			<input
				type="checkbox"
				checked={swCodeH?.selectedElement?.mc
					? swCodeH?.selectedElement?.mc.classes.includes('me-auto')
						? true
						: false
					: false}
				on:change={(e) => {
					if (!e.target.checked) {
						swCodeH.selectedElement.setStylesClass({
							from: margin,
							to: ''
						});
					} else {
						swCodeH.selectedElement.setStylesClass({
							from: margin,
							to: 'me-auto'
						});
					}
				}}
				class="checkbox checkbox-xs checkbox-primary"
			/>
		</label>
	</div> <div class="form-control">
		<label class="label cursor-pointer">
			<span class="label-text">mt-auto</span>
			<input
				type="checkbox"
				checked={swCodeH?.selectedElement?.mc
					? swCodeH?.selectedElement?.mc.classes.includes('mt-auto')
						? true
						: false
					: false}
				on:change={(e) => {
					if (!e.target.checked) {
						swCodeH.selectedElement.setStylesClass({
							from: margin,
							to: ''
						});
					} else {
						swCodeH.selectedElement.setStylesClass({
							from: margin,
							to: 'mt-auto'
						});
					}
				}}
				class="checkbox checkbox-xs checkbox-primary"
			/>
		</label>
	</div> <div class="form-control">
		<label class="label cursor-pointer">
			<span class="label-text">mr-auto</span>
			<input
				type="checkbox"
				checked={swCodeH?.selectedElement?.mc
					? swCodeH?.selectedElement?.mc.classes.includes('mr-auto')
						? true
						: false
					: false}
				on:change={(e) => {
					if (!e.target.checked) {
						swCodeH.selectedElement.setStylesClass({
							from: margin,
							to: ''
						});
					} else {
						swCodeH.selectedElement.setStylesClass({
							from: margin,
							to: 'mr-auto'
						});
					}
				}}
				class="checkbox checkbox-xs checkbox-primary"
			/>
		</label>
	</div> <div class="form-control">
		<label class="label cursor-pointer">
			<span class="label-text">mb-auto</span>
			<input
				type="checkbox"
				checked={swCodeH?.selectedElement?.mc
					? swCodeH?.selectedElement?.mc.classes.includes('mb-auto')
						? true
						: false
					: false}
				on:change={(e) => {
					if (!e.target.checked) {
						swCodeH.selectedElement.setStylesClass({
							from: margin,
							to: ''
						});
					} else {
						swCodeH.selectedElement.setStylesClass({
							from: margin,
							to: 'mb-auto'
						});
					}
				}}
				class="checkbox checkbox-xs checkbox-primary"
			/>
		</label>
	</div> <div class="form-control">
		<label class="label cursor-pointer">
			<span class="label-text">ml-auto</span>
			<input
				type="checkbox"
				checked={swCodeH?.selectedElement?.mc
					? swCodeH?.selectedElement?.mc.classes.includes('ml-auto')
						? true
						: false
					: false}
				on:change={(e) => {
					if (!e.target.checked) {
						swCodeH.selectedElement.setStylesClass({
							from: margin,
							to: ''
						});
					} else {
						swCodeH.selectedElement.setStylesClass({
							from: margin,
							to: 'ml-auto'
						});
					}
				}}
				class="checkbox checkbox-xs checkbox-primary"
			/>
		</label>
	</div>
					</div>
				</div>