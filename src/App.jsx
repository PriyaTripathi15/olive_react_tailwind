import React from 'react'
import logo from './image.png'

const trustedFaces = [
	'https://i.pravatar.cc/80?img=12',
	'https://i.pravatar.cc/80?img=32',
	'https://i.pravatar.cc/80?img=47',
	'https://i.pravatar.cc/80?img=56'
]

const Nav = () => (
	<header className="mx-auto flex w-full max-w-[1100px] items-center justify-between px-4 py-4 md:px-5">
		<img src={logo} alt="Olive" className="h-15 w-13" />

		<nav className="hidden items-center gap-9 text-[15px] font-medium text-neutral-700 lg:flex">
		<a className="cursor-pointer border border-transparent px-2 py-1 rounded-md transition-all duration-200 hover:border-neutral-300 hover:bg-neutral-50">
  Solutions
</a>

<a className="cursor-pointer border border-transparent px-2 py-1 rounded-md transition-all duration-200 hover:border-neutral-300 hover:bg-neutral-50">
  Features
</a>

<a className="cursor-pointer border border-transparent px-2 py-1 rounded-md transition-all duration-200 hover:border-neutral-300 hover:bg-neutral-50">
  Pricing
</a>

<a className="cursor-pointer border border-transparent px-2 py-1 rounded-md transition-all duration-200 hover:border-neutral-300 hover:bg-neutral-50">
  Blog
</a>

<a className="cursor-pointer border border-transparent px-2 py-1 rounded-md transition-all duration-200 hover:border-neutral-300 hover:bg-neutral-50">
  Restaurants
</a>

<a className="cursor-pointer border border-transparent px-2 py-1 rounded-md transition-all duration-200 hover:border-neutral-300 hover:bg-neutral-50">
  Food
</a>
		</nav>

		<div className="flex items-center gap-4">
			<a className="hidden text-[15px] font-medium text-neutral-700 sm:inline">Sign in</a>
			<button className="rounded-full bg-lime-950 px-6 py-2.5 text-[15px] font-semibold text-white shadow-[0_6px_12px_rgba(19,53,8,0.18)]">Get Olive →</button>
		</div>
	</header>
)

const Trust = () => (
	<div className="mx-auto flex w-fit items-center gap-3 rounded-full px-2 py-1 text-[13px] text-neutral-500">
		<div className="flex -space-x-2">
			{trustedFaces.map((face, i) => (
				<img
					key={i}
					src={face}
					alt={`Trusted family ${i + 1}`}
					className="h-8 w-8 rounded-full border-2 border-[#f6f8f6] object-cover"
				/>
			))}
			<span className="grid h-8 w-8 place-items-center rounded-full border-2 border-[#f6f8f6] bg-neutral-200 text-[11px] font-medium text-neutral-500">
				3k+
			</span>
		</div>
		<p className="text-[13px] text-neutral-500">Trusted by thousands of healthy families</p>
	</div>
)

const Phone = () => (
	<div className="relative mx-auto mt-9 w-[300px] sm:w-[330px]">
		<div className="absolute left-[-86px] top-[150px] hidden h-20 w-16 rounded-2xl bg-stone-100/85 shadow-inner md:block" />
		<div className="absolute left-[-32px] top-[196px] hidden h-24 w-20 rounded-2xl bg-stone-100/70 shadow-inner md:block" />
		<div className="absolute right-[-86px] top-[150px] hidden h-20 w-16 rounded-2xl bg-stone-100/85 shadow-inner md:block" />
		<div className="absolute right-[-32px] top-[196px] hidden h-24 w-20 rounded-2xl bg-stone-100/70 shadow-inner md:block" />

		<div className="relative h-[610px] rounded-[42px] border-[6px] border-neutral-300 bg-white shadow-[0_20px_60px_rgba(0,0,0,0.1)]">
			<div className="absolute left-1/2 top-3 h-6 w-28 -translate-x-1/2 rounded-full bg-black" />
			<div className="p-5 pt-14">
				<div className="rounded-[22px] border border-stone-100 bg-gradient-to-b from-amber-100 to-stone-50 p-4 shadow-sm">
					<div className="h-40 rounded-2xl bg-[radial-gradient(circle_at_30%_20%,#f8f0be_0%,#ede3cf_45%,#e4dfd5_100%)]" />
					<h3 className="mt-4 text-[19px] font-bold leading-tight text-neutral-900">Fig and Olive Crackers, Fig and Olive</h3>
					<p className="mt-1 text-xs text-neutral-500">Lastly Olive</p>
				</div>

				<div className="mt-4 rounded-2xl border border-stone-100 bg-white p-4 shadow-sm">
					<div className="mb-2 flex items-center justify-between text-[11px] text-neutral-500">
						<span>Olive Says</span>
						<span>1.4G/100</span>
					</div>
					<p className="text-[12px] leading-5 text-neutral-700">
						This product's oils were mainly from figs that are passed through machinery and cleaned chemically, especially with added preservatives.
					</p>
				</div>
			</div>
		</div>
	</div>
)

export default function App() {
	return (
		<div className="mx-auto min-h-screen max-w-[1366px] rounded-2xl border border-[#d5ddd7] bg-green-50 text-neutral-900">
			<Nav />

			<section className="px-5 pb-12 pt-5 text-center md:px-8">
				<Trust />

				<h1 className="mx-auto mt-11 max-w-[760px] text-[66px] font-extrabold leading-[0.98] tracking-[-0.035em] text-[#223f15] md:text-[74px]">
					The Safest Way to
					<br />
					Shop for Groceries
				</h1>

				<p className="mx-auto mt-8 max-w-[560px] text-[16px] font-medium leading-8 text-neutral-500">
					Use the Olive Food Scanner App to instantly eliminate harmful ingredients from your family's diet and get expert-backed food insights.
				</p>

				<div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
					<button className="rounded-full bg-lime-950 px-6 py-3 text-[14px] font-semibold text-white shadow-[0_7px_14px_rgba(19,53,8,0.16)]">
						 Download for iOS
					</button>
					<a className="cursor-pointer text-[16px] font-bold text-neutral-800 transition-colors duration-200 hover:text-neutral-950">
						Join the Olive Community ->
					</a>
				</div>

				<Phone />
			</section>
		</div>
	)
}