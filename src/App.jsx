import React, { useState, useEffect } from 'react'
import logo from './image.png'

const trustedFaces = [
	'https://i.pravatar.cc/80?img=12',
	'https://i.pravatar.cc/80?img=32',
	'https://i.pravatar.cc/80?img=47',
	'https://i.pravatar.cc/80?img=56'
]

const sliderImages = [
	'https://picsum.photos/420/300?random=101',
	'https://picsum.photos/420/300?random=102',
	'https://picsum.photos/420/300?random=103'
]

const phonePhotos = {
	center:
		'https://images.unsplash.com/photo-1621939514649-280e2dca8b1d?auto=format&fit=crop&w=900&q=80',
	left:
		'https://images.unsplash.com/photo-1615485500704-8e990f9900f9?auto=format&fit=crop&w=420&q=80',
	right:
		'https://images.unsplash.com/photo-1607305387299-a3d9611cd469?auto=format&fit=crop&w=420&q=80',
	card:
		'https://images.unsplash.com/photo-1585238342028-4b1a0f6f1b76?auto=format&fit=crop&w=420&q=80',
	review:
		'https://images.unsplash.com/photo-1523473827532-3f2e5cfdb0de?auto=format&fit=crop&w=160&q=80'
}

const PLACEHOLDER = 'https://source.unsplash.com/420x300/?food'

const Phone = () => {
	const [idx, setIdx] = useState(0)

	useEffect(() => {
		const t = setInterval(() => setIdx((i) => (i + 1) % sliderImages.length), 3000)
		return () => clearInterval(t)
	}, [])

	return (
		<div className="relative mx-auto mt-10 w-[318px] sm:w-[360px]">
			<div className="relative overflow-hidden rounded-[44px] border-[6px] border-[#d0d0d0] bg-white shadow-[0_24px_60px_rgba(0,0,0,0.08)]">
				<div className="absolute left-1/2 top-3 h-6 w-28 -translate-x-1/2 rounded-full bg-black" />

				<div className="p-4 pt-14">
					<div className="relative h-[182px] overflow-hidden rounded-[28px] bg-[#f7f4ee]">
						<div className="absolute left-3 top-[50px] h-[96px] w-[72px] overflow-hidden rounded-[18px] bg-white/65 shadow-[0_10px_24px_rgba(0,0,0,0.06)]">
							<img
								src={sliderImages[(idx + sliderImages.length - 1) % sliderImages.length]}
								alt="prev"
								loading="lazy"
								onError={(e) => (e.currentTarget.src = PLACEHOLDER)}
								className="h-full w-full object-cover opacity-45"
							/>
						</div>

						<div className="absolute left-1/2 top-5 h-[116px] w-[156px] -translate-x-1/2 overflow-hidden rounded-[20px] bg-white shadow-[0_14px_26px_rgba(0,0,0,0.12)]">
							<img
								src={sliderImages[idx]}
								alt="main"
								loading="lazy"
								onError={(e) => (e.currentTarget.src = PLACEHOLDER)}
								className="h-full w-full object-cover transition-all duration-700"
							/>
							<div className="absolute inset-x-4 bottom-3 h-6 rounded-full bg-black/75" />
						</div>

						<div className="absolute right-3 top-[50px] h-[96px] w-[72px] overflow-hidden rounded-[18px] bg-white/65 shadow-[0_10px_24px_rgba(0,0,0,0.06)]">
							<img
								src={sliderImages[(idx + 1) % sliderImages.length]}
								alt="next"
								loading="lazy"
								onError={(e) => (e.currentTarget.src = PLACEHOLDER)}
								className="h-full w-full object-cover opacity-45"
							/>
						</div>

						{/* bottom slider bar - mirror of the top bar */}
						<div className="absolute left-1/2 bottom-3 h-6 w-28 -translate-x-1/2 rounded-full bg-black" />
					</div>

					<div className="mt-4 flex items-start gap-3">
						<div className="h-[92px] w-[92px] shrink-0 overflow-hidden rounded-[14px] border border-[#ead7b5] bg-white shadow-sm">
							<img
								src={phonePhotos.card}
								alt="dummy snack"
								loading="lazy"
								onError={(e) => (e.currentTarget.src = PLACEHOLDER)}
								className="h-full w-full object-cover"
							/>
						</div>

						<div className="min-w-0 flex-1 pt-1">
							<h3 className="text-[19px] font-extrabold leading-[1.04] tracking-[-0.03em] text-neutral-900">
								Larabar Chocolate Chip
								<br />
								Cookie Dough Fruit & Nu...
							</h3>

							<div className="mt-2 flex items-center gap-2 text-[12px] text-neutral-500">
								<span className="font-medium text-neutral-700">Larabar</span>
								<span className="rounded-full bg-[#eef4ff] px-2 py-0.5 font-semibold text-[#4a79c9]">
									General Mills
								</span>
							</div>

							<div className="mt-3 flex items-end justify-between gap-3">
								<div className="flex items-center gap-2">
									<span className="h-3 w-3 rounded-full bg-[#4fb34b]" />

									<div>
										<div className="text-[18px] font-extrabold leading-none text-neutral-900">
											92/100
										</div>
										<div className="text-[13px] leading-none text-neutral-500">
											Excellent
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
							<img
								src={phonePhotos.review}
								alt="dummy avatar"
								loading="lazy"
								onError={(e) => (e.currentTarget.src = PLACEHOLDER)}
								className="mt-0.5 h-8 w-8 rounded-full object-cover"
							/>

							<div>
								<div className="text-[15px] font-extrabold text-neutral-900">
									Oliver Says:
								</div>

								<p className="mt-2 text-[12px] leading-6 text-neutral-700">
									This product scored well because it doesn't contain
									processed sugars, harmful additives, or seed oils.
								</p>
							</div>
						</div>
					</div>

					<div className="mt-4 text-[17px] font-extrabold text-neutral-900">
						Breakdown
					</div>
				</div>
			</div>
		</div>
	)
}

const Nav = () => (
	<header className="flex w-full items-center justify-between px-4 py-4 md:px-5">
		<img src={logo} alt="Olive" loading="lazy" onError={(e) => (e.currentTarget.src = PLACEHOLDER)} className="h-20 w-auto mr-auto" />

		<nav className="hidden items-center gap-9 text-[14px] font-medium text-neutral-700 lg:flex">
			<a className="cursor-pointer rounded-md px-3 py-1 transition-colors duration-200 hover:bg-[#e9ebe7]">
				Solutions
			</a>
			<a className="cursor-pointer rounded-md px-3 py-1 transition-colors duration-200 hover:bg-[#e9ebe7]">
				Features
			</a>
			<a className="cursor-pointer rounded-md px-3 py-1 transition-colors duration-200 hover:bg-[#e9ebe7]">
				Pricing
			</a>
			<a className="cursor-pointer rounded-md px-3 py-1 transition-colors duration-200 hover:bg-[#e9ebe7]">
				Blog
			</a>
			<a className="cursor-pointer rounded-md px-3 py-1 transition-colors duration-200 hover:bg-[#e9ebe7]">
				Restaurants
			</a>
			<a className="cursor-pointer rounded-md px-3 py-1 transition-colors duration-200 hover:bg-[#e9ebe7] ">
				Food
			</a>
		</nav>

		<div className="flex items-center gap-4 ml-8">
			<a className="hidden text-[15px] font-medium text-neutral-700 sm:inline">
				Sign in
			</a>

			<button className="rounded-full bg-lime-950 px-4 py-2 text-[15px] font-semibold text-white flex items-center gap-2 hover:bg-lime-900">
	<span>Get Olive</span>

	<svg
		className="h-4 w-4"
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		strokeWidth="2.5"
		strokeLinecap="round"
		strokeLinejoin="round"
	>
		<path d="M5 12h14" />
		<path d="M13 5l7 7-7 7" />
	</svg>
</button>
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
					alt={`Trusted ${i}`}
					loading="lazy"
					onError={(e) => (e.currentTarget.src = PLACEHOLDER)}
					className="h-8 w-8 rounded-full border-1 border-[#f6f8f6] object-cover transition-all duration-200 hover:scale-110 hover:z-10 hover:ring-2 hover:ring-[#c8d3bf]"
				/>
			))}

			<span className="grid h-8 w-8 place-items-center rounded-full border-1 border-[#f6f8f6] bg-neutral-200 text-[11px] font-medium text-neutral-500 transition-all duration-200 hover:scale-110 hover:z-10 hover:ring-2 hover:ring-[#c8d3bf] cursor-pointer">
				3k+
			</span>
		</div>

		<p>Trusted by thousands of healthy families</p>
	</div>
)

export default function App() {
	return (
		<div className="min-h-screen bg-[#f5f5f5] p-8">
			<div className="mx-auto max-w-[1200px] rounded-2xl border border-[#d5ddd7] bg-green-50 text-neutral-900">
				<Nav />

				<section className="px-5 pb-12 pt-5 text-center md:px-8">
					<Trust />

					<h1 className="mx-auto mt-11 max-w-[6500px] text-[40px] font-bold leading-[0.98] tracking-[-0.035em] text-[#0e2703] md:text-[65px]">
						The Safest Way to
						<br />
						Shop for Groceries
					</h1>

				<p className="mx-auto mt-8 max-w-[560px] text-[16px] font-medium  leading-6 text-neutral-500">
	Use the Olive Food Scanner App to Instantly Eliminate
	<br />
	Harmful Ingredients from Your Family's Diet and Get
	<br />
	Expert-Backed Food Insights
</p>
					<div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
						<button className="rounded-full bg-lime-950 px-6 py-3 text-[14px] font-semibold text-white flex items-center gap-2">
	<svg
		className="h-5 w-5"
		viewBox="0 0 24 24"
		fill="currentColor"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path d="M16.365 1.43c0 1.02-.385 2.01-1.07 2.745-.72.777-1.912 1.618-3.02 1.35-.12-.64-.27-1.29.03-1.91.3-.64.99-1.32 1.69-1.68.71-.37 1.5-.51 2.33-.5h.04zM18.17 12.15c-.03-2.24 1.83-3.31 1.91-3.36-1.04-1.52-2.66-1.73-3.23-1.75-1.37-.14-2.68.8-3.37.8-.7 0-1.77-.78-2.91-.76-1.5.02-2.88.87-3.65 2.2-1.56 2.7-.4 6.68 1.12 8.88.74 1.07 1.62 2.28 2.78 2.24 1.12-.05 1.54-.72 2.89-.72 1.36 0 1.74.72 2.91.69 1.2-.02 1.96-1.08 2.7-2.16.85-1.24 1.2-2.44 1.22-2.5-.03-.01-2.34-.9-2.37-3.56z" />
	</svg>

	<span>Download for iOS</span>
</button>

						<a className="cursor-pointer text-[16px] font-bold text-neutral-800 hover:text-neutral-950">
							Join the Olive Community →
						</a>
					</div>

					<Phone />
				</section>
			</div>
		</div>
	)
}