import React from 'react'
import logo from './image.png'

const trustedFaces = [
	'https://i.pravatar.cc/80?img=12',
	'https://i.pravatar.cc/80?img=32',
	'https://i.pravatar.cc/80?img=47',
	'https://i.pravatar.cc/80?img=56'
]

const phonePhotos = {
	center: 'https://images.unsplash.com/photo-1621939514649-280e2dca8b1d?auto=format&fit=crop&w=900&q=80',
	left: 'https://images.unsplash.com/photo-1615485500704-8e990f9900f9?auto=format&fit=crop&w=420&q=80',
	right: 'https://images.unsplash.com/photo-1607305387299-a3d9611cd469?auto=format&fit=crop&w=420&q=80',
	card: 'https://images.unsplash.com/photo-1585238342028-4b1a0f6f1b76?auto=format&fit=crop&w=420&q=80',
	review: 'https://images.unsplash.com/photo-1523473827532-3f2e5cfdb0de?auto=format&fit=crop&w=160&q=80'
}

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
	<div className="relative mx-auto mt-10 w-[318px] sm:w-[360px]">
		<div className="relative overflow-hidden rounded-[44px] border-[6px] border-[#d0d0d0] bg-white shadow-[0_24px_60px_rgba(0,0,0,0.08)]">
			<div className="absolute left-1/2 top-3 h-6 w-28 -translate-x-1/2 rounded-full bg-black" />
			<div className="p-4 pt-14">
				<div className="relative h-[182px] overflow-hidden rounded-[28px] bg-[#f7f4ee]">
					<div className="absolute left-3 top-[50px] h-[96px] w-[72px] overflow-hidden rounded-[18px] bg-white/65 shadow-[0_10px_24px_rgba(0,0,0,0.06)]">
						<img src={phonePhotos.left} alt="dummy product" className="h-full w-full object-cover opacity-50" />
					</div>
					<div className="absolute left-1/2 top-5 h-[116px] w-[156px] -translate-x-1/2 overflow-hidden rounded-[20px] bg-white shadow-[0_14px_26px_rgba(0,0,0,0.12)]">
						<img src={phonePhotos.center} alt="dummy product" className="h-full w-full object-cover" />
						<div className="absolute inset-x-4 bottom-3 h-6 rounded-full bg-black/75" />
					</div>
					<div className="absolute right-3 top-[50px] h-[96px] w-[72px] overflow-hidden rounded-[18px] bg-white/65 shadow-[0_10px_24px_rgba(0,0,0,0.06)]">
						<img src={phonePhotos.right} alt="dummy product" className="h-full w-full object-cover opacity-50" />
					</div>
				</div>

				<div className="mt-4 flex items-start gap-3">
					<div className="h-[92px] w-[92px] shrink-0 overflow-hidden rounded-[14px] border border-[#ead7b5] bg-white shadow-sm">
						<img src={phonePhotos.card} alt="dummy snack" className="h-full w-full object-cover" />
					</div>

					<div className="min-w-0 flex-1 pt-1">
						<h3 className="text-[19px] font-extrabold leading-[1.04] tracking-[-0.03em] text-neutral-900">
							Larabar Chocolate Chip
							<br />
							Cookie Dough Fruit & Nu...
						</h3>
						<div className="mt-2 flex items-center gap-2 text-[12px] text-neutral-500">
							<span className="font-medium text-neutral-700">Larabar</span>
							<span className="rounded-full bg-[#eef4ff] px-2 py-0.5 text-[#4a79c9] font-semibold">General Mills</span>
						</div>
						<div className="mt-3 flex items-end justify-between gap-3">
							<div>
								<div className="flex items-center gap-2">
									<span className="h-3 w-3 rounded-full bg-[#4fb34b]" />
									<div>
										<div className="text-[18px] font-extrabold leading-none text-neutral-900">92/100</div>
										<div className="text-[13px] leading-none text-neutral-500">Excellent</div>
									</div>
								</div>
							</div>
							<div className="flex items-center gap-4 pr-1 text-neutral-500">
								<span className="text-[22px] leading-none">♡</span>
								<span className="text-[22px] leading-none">↗</span>
							</div>
						</div>
					</div>
				</div>

				<div className="mt-4 rounded-[18px] border border-[#f0f0ee] bg-white p-4 shadow-[0_10px_24px_rgba(0,0,0,0.05)]">
					<div className="flex items-start gap-3">
						<img src={phonePhotos.review} alt="dummy avatar" className="mt-0.5 h-8 w-8 rounded-full object-cover" />
						<div>
							<div className="text-[15px] font-extrabold text-neutral-900">Oliver Says:</div>
							<p className="mt-2 text-[12px] leading-6 text-neutral-700">
								"This product, which includes ingredients like cashews and dates, scored well mainly because it doesn't contain processed sugars, harmful additives, or seed oils, making it a healthier choice for your family, especially as an occasional treat. The slight deduction for processing indicates it's not entirely raw, but it's still a good option that aligns with your goals of avoiding overly processed foods."
							</p>
						</div>
					</div>
				</div>

				<div className="mt-4 text-[17px] font-extrabold text-neutral-900">Breakdown</div>
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

				<h1 className="mx-auto mt-11 max-w-[760px] text-[66px] font-bo leading-[0.98] tracking-[-0.035em] text-[#223f15] md:text-[74px]">
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
						Join the Olive Community →
					</a>
				</div>

				<Phone />
			</section>
		</div>
	)
}