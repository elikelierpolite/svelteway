<script>
	//@ts-nocheck
	import { v4 as uuidv4 } from 'uuid';
	import { swCode } from '../CodeStore';
	import { get } from 'svelte/store';
	import Toolbar from './Toolbar.svelte';
	import Table1 from './mainComponents/Table1.svelte';

	function addComponent() {
		const cvElement = class cvElement {
			constructor(element, props) {
				this.id = props.swElementDataAttrId;
				this.element = element;
				this.props = props;
			}
			create() {
				this.mainComponent = new Table1({
					target: document.querySelector('#cvh'),
					props: this.props
				});
				this.toolbar = new Toolbar({
					target: document.querySelector('#cvh'),
					props: {
						visible: false,
						sweid: this.id
					}
				});
			}
			showToolBar() {
				const { cvElements } = get(swCode);
				swCode.set({ cvElements, selectedElement: this });
				cvElements.forEach((element) => element.disableToolBar());
				this.toolbar.$set({ visible: true });
			}
			toggleToolBar() {
				const toggleToolbar = document.querySelector('#toggle-toolbar');
				toggleToolbar.click();
			}
			disableToolBar() {
				this.toolbar.$set({ visible: false });
			}
			setClassModifier(cls) {
				const arr = [...this.mc.classes];
				for (let index = 0; index < arr.length; index++) {
					if (arr[index] === cls.from) {
						arr[index] = cls.to;
					}
				}
				this.mainComponent.$set({ classes: arr });
			}
			setHelper(helper) {
				this.mainComponent.$set({ helper: helper });
			}
			setStylesClass(cls) {
				const arr = [...this.mc.classes];
				let far = false;
				cls.from.forEach((clss) => {
					if (arr.includes(clss)) {
						const index = arr.indexOf(clss);
						arr[index] = cls.to;
						far = true;
					}
				});
				if (!far) {
					arr.push(cls.to);
				}
				this.mainComponent.$set({ classes: arr });
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
			get clss() {
				return this.classes.join('  ');
			}
			swecode() {
				const removedBorder = this.mainComponent.classes.filter(
					(cls) => cls !== 'hover:border-[1px]'
				);
				const removeBorderClass = removedBorder.filter((cls) => cls !== 'hover:border-[#FF531A]');
				this.code = this.mainComponent.helper.on
					? `<div class="${this.mainComponent.helper.classes.join(' ')}" data-tip="${
							this.mainComponent.helper.title
					  }"><table class="${removeBorderClass.join(' ')}">
			<thead>
				<tr>
					<th />
					<th>Name</th>
					<th>Job</th>
					<th>Favorite Color</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<th>1</th>
					<td>Cy Ganderton</td>
					<td>Quality Control Specialist</td>
					<td>Blue</td>
				</tr>
				<tr>
					<th>2</th>
					<td>Hart Hagerty</td>
					<td>Desktop Support Technician</td>
					<td>Purple</td>
				</tr>
				<tr>
					<th>3</th>
					<td>Brice Swyre</td>
					<td>Tax Accountant</td>
					<td>Red</td>
				</tr>
			</tbody>
			  </table></div>`
					: `<table class="${removeBorderClass.join(' ')}">
				<thead>
				<tr>
					<th />
					<th>Name</th>
					<th>Job</th>
					<th>Favorite Color</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<th>1</th>
					<td>Cy Ganderton</td>
					<td>Quality Control Specialist</td>
					<td>Blue</td>
				</tr>
				<tr>
					<th>2</th>
					<td>Hart Hagerty</td>
					<td>Desktop Support Technician</td>
					<td>Purple</td>
				</tr>
				<tr>
					<th>3</th>
					<td>Brice Swyre</td>
					<td>Tax Accountant</td>
					<td>Red</td>
				</tr>
			</tbody>
		</table>`;
			}
		};
		const sweid = uuidv4();

		let newCvElement = new cvElement('table1', {
			swElementDataAttrId: sweid,
			classes: ['table', 'w-full'],
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
			// @ts-ignore
			cvElements: [...v.cvElements, newCvElement]
		}));
		let csc = document.getElementById('open-component-select');
		csc && csc.click();
	}
</script>

<div class="w-full flex flex-col gap-7 justify-center mb-10">
	<div
		class="preview border-base-300 bg-base-200 rounded-b-box rounded-tr-box flex min-h-[6rem] min-w-[18rem] max-w-4xl flex-wrap items-center justify-center gap-2 overflow-x-hidden border bg-cover bg-top p-4 hover:cursor-pointer"
		id="ch"
		style="background-size: 5px 5px"
	>
		<button class="w-full" on:click={addComponent}>
			<div class="overflow-x-auto">
				<table class="table w-full">
					<!-- head -->
					<thead>
						<tr>
							<th />
							<th>Name</th>
							<th>Job</th>
							<th>Favorite Color</th>
						</tr>
					</thead>
					<tbody>
						<!-- row 1 -->
						<tr>
							<th>1</th>
							<td>Cy Ganderton</td>
							<td>Quality Control Specialist</td>
							<td>Blue</td>
						</tr>
						<!-- row 2 -->
						<tr>
							<th>2</th>
							<td>Hart Hagerty</td>
							<td>Desktop Support Technician</td>
							<td>Purple</td>
						</tr>
						<!-- row 3 -->
						<tr>
							<th>3</th>
							<td>Brice Swyre</td>
							<td>Tax Accountant</td>
							<td>Red</td>
						</tr>
					</tbody>
				</table>
			</div>
		</button>
	</div>
	<div
		class="preview border-base-300 bg-base-200 rounded-b-box rounded-tr-box flex min-h-[6rem] min-w-[18rem] max-w-4xl flex-wrap items-center justify-center gap-2 overflow-x-hidden border bg-cover bg-top p-4 hover:cursor-pointer"
		id="ch"
		style="background-size: 5px 5px"
	>
		<div class="overflow-x-auto">
			<table class="table w-full">
				<!-- head -->
				<thead>
					<tr>
						<th />
						<th>Name</th>
						<th>Job</th>
						<th>Favorite Color</th>
					</tr>
				</thead>
				<tbody>
					<!-- row 1 -->
					<tr>
						<th>1</th>
						<td>Cy Ganderton</td>
						<td>Quality Control Specialist</td>
						<td>Blue</td>
					</tr>
					<!-- row 2 -->
					<tr class="active">
						<th>2</th>
						<td>Hart Hagerty</td>
						<td>Desktop Support Technician</td>
						<td>Purple</td>
					</tr>
					<!-- row 3 -->
					<tr>
						<th>3</th>
						<td>Brice Swyre</td>
						<td>Tax Accountant</td>
						<td>Red</td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
	<div
		class="preview border-base-300 bg-base-200 rounded-b-box rounded-tr-box flex min-h-[6rem] min-w-[18rem] max-w-4xl flex-wrap items-center justify-center gap-2 overflow-x-hidden border bg-cover bg-top p-4 hover:cursor-pointer"
		id="ch"
		style="background-size: 5px 5px"
	>
		<div class="overflow-x-auto">
			<table class="table w-full">
				<!-- head -->
				<thead>
					<tr>
						<th />
						<th>Name</th>
						<th>Job</th>
						<th>Favorite Color</th>
					</tr>
				</thead>
				<tbody>
					<!-- row 1 -->
					<tr>
						<th>1</th>
						<td>Cy Ganderton</td>
						<td>Quality Control Specialist</td>
						<td>Blue</td>
					</tr>
					<!-- row 2 -->
					<tr class="active">
						<th>2</th>
						<td>Hart Hagerty</td>
						<td>Desktop Support Technician</td>
						<td>Purple</td>
					</tr>
					<!-- row 3 -->
					<tr>
						<th>3</th>
						<td>Brice Swyre</td>
						<td>Tax Accountant</td>
						<td>Red</td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
	<div
		class="preview border-base-300 bg-base-200 rounded-b-box rounded-tr-box flex min-h-[6rem] min-w-[18rem] max-w-4xl flex-wrap items-center justify-center gap-2 overflow-x-hidden border bg-cover bg-top p-4 hover:cursor-pointer"
		id="ch"
		style="background-size: 5px 5px"
	>
		<div class="overflow-x-auto">
			<table class="table w-full">
				<!-- head -->
				<thead>
					<tr>
						<th />
						<th>Name</th>
						<th>Job</th>
						<th>Favorite Color</th>
					</tr>
				</thead>
				<tbody>
					<!-- row 1 -->
					<tr>
						<th>1</th>
						<td>Cy Ganderton</td>
						<td>Quality Control Specialist</td>
						<td>Blue</td>
					</tr>
					<!-- row 2 -->
					<tr class="hover">
						<th>2</th>
						<td>Hart Hagerty</td>
						<td>Desktop Support Technician</td>
						<td>Purple</td>
					</tr>
					<!-- row 3 -->
					<tr>
						<th>3</th>
						<td>Brice Swyre</td>
						<td>Tax Accountant</td>
						<td>Red</td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
	<div
		class="preview border-base-300 bg-base-200 rounded-b-box rounded-tr-box flex min-h-[6rem] min-w-[18rem] max-w-4xl flex-wrap items-center justify-center gap-2 overflow-x-hidden border bg-cover bg-top p-4 hover:cursor-pointer"
		id="ch"
		style="background-size: 5px 5px"
	>
		<div class="overflow-x-auto">
			<table class="table table-zebra w-full">
				<!-- head -->
				<thead>
					<tr>
						<th />
						<th>Name</th>
						<th>Job</th>
						<th>Favorite Color</th>
					</tr>
				</thead>
				<tbody>
					<!-- row 1 -->
					<tr>
						<th>1</th>
						<td>Cy Ganderton</td>
						<td>Quality Control Specialist</td>
						<td>Blue</td>
					</tr>
					<!-- row 2 -->
					<tr>
						<th>2</th>
						<td>Hart Hagerty</td>
						<td>Desktop Support Technician</td>
						<td>Purple</td>
					</tr>
					<!-- row 3 -->
					<tr>
						<th>3</th>
						<td>Brice Swyre</td>
						<td>Tax Accountant</td>
						<td>Red</td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
	<div
		class="preview border-base-300 bg-base-200 rounded-b-box rounded-tr-box flex min-h-[6rem] min-w-[18rem] max-w-4xl flex-wrap items-center justify-center gap-2 overflow-x-hidden border bg-cover bg-top p-4 hover:cursor-pointer"
		id="ch"
		style="background-size: 5px 5px"
	>
		<div class="overflow-x-auto w-full">
			<table class="table w-full">
				<!-- head -->
				<thead>
					<tr>
						<th>
							<label>
								<input type="checkbox" class="checkbox" />
							</label>
						</th>
						<th>Name</th>
						<th>Job</th>
						<th>Favorite Color</th>
						<th />
					</tr>
				</thead>
				<tbody>
					<!-- row 1 -->
					<tr>
						<th>
							<label>
								<input type="checkbox" class="checkbox" />
							</label>
						</th>
						<td>
							<div class="flex items-center space-x-3">
								<div class="avatar">
									<div class="mask mask-squircle w-12 h-12">
										<img
											src="https://daisyui.com/tailwind-css-component-profile-2@56w.png"
											alt="Avatar Tailwind CSS Component"
										/>
									</div>
								</div>
								<div>
									<div class="font-bold">Hart Hagerty</div>
									<div class="text-sm opacity-50">United States</div>
								</div>
							</div>
						</td>
						<td>
							Zemlak, Daniel and Leannon
							<br />
							<span class="badge badge-ghost badge-sm">Desktop Support Technician</span>
						</td>
						<td>Purple</td>
						<th>
							<button class="btn btn-ghost btn-xs">details</button>
						</th>
					</tr>
					<!-- row 2 -->
					<tr>
						<th>
							<label>
								<input type="checkbox" class="checkbox" />
							</label>
						</th>
						<td>
							<div class="flex items-center space-x-3">
								<div class="avatar">
									<div class="mask mask-squircle w-12 h-12">
										<img
											src="https://daisyui.com/tailwind-css-component-profile-3@56w.png"
											alt="Avatar Tailwind CSS Component"
										/>
									</div>
								</div>
								<div>
									<div class="font-bold">Brice Swyre</div>
									<div class="text-sm opacity-50">China</div>
								</div>
							</div>
						</td>
						<td>
							Carroll Group
							<br />
							<span class="badge badge-ghost badge-sm">Tax Accountant</span>
						</td>
						<td>Red</td>
						<th>
							<button class="btn btn-ghost btn-xs">details</button>
						</th>
					</tr>
					<!-- row 3 -->
					<tr>
						<th>
							<label>
								<input type="checkbox" class="checkbox" />
							</label>
						</th>
						<td>
							<div class="flex items-center space-x-3">
								<div class="avatar">
									<div class="mask mask-squircle w-12 h-12">
										<img
											src="https://daisyui.com/tailwind-css-component-profile-4@56w.png"
											alt="Avatar Tailwind CSS Component"
										/>
									</div>
								</div>
								<div>
									<div class="font-bold">Marjy Ferencz</div>
									<div class="text-sm opacity-50">Russia</div>
								</div>
							</div>
						</td>
						<td>
							Rowe-Schoen
							<br />
							<span class="badge badge-ghost badge-sm">Office Assistant I</span>
						</td>
						<td>Crimson</td>
						<th>
							<button class="btn btn-ghost btn-xs">details</button>
						</th>
					</tr>
					<!-- row 4 -->
					<tr>
						<th>
							<label>
								<input type="checkbox" class="checkbox" />
							</label>
						</th>
						<td>
							<div class="flex items-center space-x-3">
								<div class="avatar">
									<div class="mask mask-squircle w-12 h-12">
										<img
											src="https://daisyui.com/tailwind-css-component-profile-5@56w.png"
											alt="Avatar Tailwind CSS Component"
										/>
									</div>
								</div>
								<div>
									<div class="font-bold">Yancy Tear</div>
									<div class="text-sm opacity-50">Brazil</div>
								</div>
							</div>
						</td>
						<td>
							Wyman-Ledner
							<br />
							<span class="badge badge-ghost badge-sm">Community Outreach Specialist</span>
						</td>
						<td>Indigo</td>
						<th>
							<button class="btn btn-ghost btn-xs">details</button>
						</th>
					</tr>
				</tbody>
				<!-- foot -->
				<tfoot>
					<tr>
						<th />
						<th>Name</th>
						<th>Job</th>
						<th>Favorite Color</th>
						<th />
					</tr>
				</tfoot>
			</table>
		</div>
	</div>
	<div
		class="preview border-base-300 bg-base-200 rounded-b-box rounded-tr-box flex min-h-[6rem] min-w-[18rem] max-w-4xl flex-wrap items-center justify-center gap-2 overflow-x-hidden border bg-cover bg-top p-4 hover:cursor-pointer"
		id="ch"
		style="background-size: 5px 5px"
	>
		<div class="overflow-x-auto">
			<table class="table table-compact w-full">
				<thead>
					<tr>
						<th />
						<th>Name</th>
						<th>Job</th>
						<th>company</th>
						<th>location</th>
						<th>Last Login</th>
						<th>Favorite Color</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<th>1</th>
						<td>Cy Ganderton</td>
						<td>Quality Control Specialist</td>
						<td>Littel, Schaden and Vandervort</td>
						<td>Canada</td>
						<td>12/16/2020</td>
						<td>Blue</td>
					</tr>
					<tr>
						<th>2</th>
						<td>Hart Hagerty</td>
						<td>Desktop Support Technician</td>
						<td>Zemlak, Daniel and Leannon</td>
						<td>United States</td>
						<td>12/5/2020</td>
						<td>Purple</td>
					</tr>
					<tr>
						<th>3</th>
						<td>Brice Swyre</td>
						<td>Tax Accountant</td>
						<td>Carroll Group</td>
						<td>China</td>
						<td>8/15/2020</td>
						<td>Red</td>
					</tr>
					<tr>
						<th>4</th>
						<td>Marjy Ferencz</td>
						<td>Office Assistant I</td>
						<td>Rowe-Schoen</td>
						<td>Russia</td>
						<td>3/25/2021</td>
						<td>Crimson</td>
					</tr>
					<tr>
						<th>5</th>
						<td>Yancy Tear</td>
						<td>Community Outreach Specialist</td>
						<td>Wyman-Ledner</td>
						<td>Brazil</td>
						<td>5/22/2020</td>
						<td>Indigo</td>
					</tr>
					<tr>
						<th>6</th>
						<td>Irma Vasilik</td>
						<td>Editor</td>
						<td>Wiza, Bins and Emard</td>
						<td>Venezuela</td>
						<td>12/8/2020</td>
						<td>Purple</td>
					</tr>
					<tr>
						<th>7</th>
						<td>Meghann Durtnal</td>
						<td>Staff Accountant IV</td>
						<td>Schuster-Schimmel</td>
						<td>Philippines</td>
						<td>2/17/2021</td>
						<td>Yellow</td>
					</tr>
					<tr>
						<th>8</th>
						<td>Sammy Seston</td>
						<td>Accountant I</td>
						<td>O'Hara, Welch and Keebler</td>
						<td>Indonesia</td>
						<td>5/23/2020</td>
						<td>Crimson</td>
					</tr>
					<tr>
						<th>9</th>
						<td>Lesya Tinham</td>
						<td>Safety Technician IV</td>
						<td>Turner-Kuhlman</td>
						<td>Philippines</td>
						<td>2/21/2021</td>
						<td>Maroon</td>
					</tr>
					<tr>
						<th>10</th>
						<td>Zaneta Tewkesbury</td>
						<td>VP Marketing</td>
						<td>Sauer LLC</td>
						<td>Chad</td>
						<td>6/23/2020</td>
						<td>Green</td>
					</tr>
					<tr>
						<th>11</th>
						<td>Andy Tipple</td>
						<td>Librarian</td>
						<td>Hilpert Group</td>
						<td>Poland</td>
						<td>7/9/2020</td>
						<td>Indigo</td>
					</tr>
					<tr>
						<th>12</th>
						<td>Sophi Biles</td>
						<td>Recruiting Manager</td>
						<td>Gutmann Inc</td>
						<td>Indonesia</td>
						<td>2/12/2021</td>
						<td>Maroon</td>
					</tr>
					<tr>
						<th>13</th>
						<td>Florida Garces</td>
						<td>Web Developer IV</td>
						<td>Gaylord, Pacocha and Baumbach</td>
						<td>Poland</td>
						<td>5/31/2020</td>
						<td>Purple</td>
					</tr>
					<tr>
						<th>14</th>
						<td>Maribeth Popping</td>
						<td>Analyst Programmer</td>
						<td>Deckow-Pouros</td>
						<td>Portugal</td>
						<td>4/27/2021</td>
						<td>Aquamarine</td>
					</tr>
					<tr>
						<th>15</th>
						<td>Moritz Dryburgh</td>
						<td>Dental Hygienist</td>
						<td>Schiller, Cole and Hackett</td>
						<td>Sri Lanka</td>
						<td>8/8/2020</td>
						<td>Crimson</td>
					</tr>
					<tr>
						<th>16</th>
						<td>Reid Semiras</td>
						<td>Teacher</td>
						<td>Sporer, Sipes and Rogahn</td>
						<td>Poland</td>
						<td>7/30/2020</td>
						<td>Green</td>
					</tr>
					<tr>
						<th>17</th>
						<td>Alec Lethby</td>
						<td>Teacher</td>
						<td>Reichel, Glover and Hamill</td>
						<td>China</td>
						<td>2/28/2021</td>
						<td>Khaki</td>
					</tr>
					<tr>
						<th>18</th>
						<td>Aland Wilber</td>
						<td>Quality Control Specialist</td>
						<td>Kshlerin, Rogahn and Swaniawski</td>
						<td>Czech Republic</td>
						<td>9/29/2020</td>
						<td>Purple</td>
					</tr>
					<tr>
						<th>19</th>
						<td>Teddie Duerden</td>
						<td>Staff Accountant III</td>
						<td>Pouros, Ullrich and Windler</td>
						<td>France</td>
						<td>10/27/2020</td>
						<td>Aquamarine</td>
					</tr>
					<tr>
						<th>20</th>
						<td>Lorelei Blackstone</td>
						<td>Data Coordiator</td>
						<td>Witting, Kutch and Greenfelder</td>
						<td>Kazakhstan</td>
						<td>6/3/2020</td>
						<td>Red</td>
					</tr>
				</tbody>
				<tfoot>
					<tr>
						<th />
						<th>Name</th>
						<th>Job</th>
						<th>company</th>
						<th>location</th>
						<th>Last Login</th>
						<th>Favorite Color</th>
					</tr>
				</tfoot>
			</table>
		</div>
	</div>
</div>

<style>
	#ch {
		background-image: radial-gradient(hsla(var(--bc) / 0.2) 0.5px, hsla(var(--b2) / 1) 0.5px);
	}
</style>
