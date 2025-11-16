import React, { useState } from 'react';
import Button from '../components/Button';

const Contact: React.FC = () => {
	const [status, setStatus] = useState<'idle' | 'submitted'>('idle');

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		// Here you would integrate with your backend / forms provider.
		setStatus('submitted');
	};

	return (
		<div className="space-y-10">
			<header className="space-y-3 max-w-2xl">
				<p className="text-xs font-semibold uppercase tracking-wide text-lagoon-turquoise">
					Contact
				</p>
				<h1 className="text-3xl sm:text-4xl font-semibold">
					Let’s talk about your growth plans
				</h1>
				<p className="text-sm sm:text-base text-slate-300">
					Whether you&apos;re an affiliate or an advertiser, share a bit about
					your setup and we&apos;ll get back to you with next steps.
				</p>
			</header>

			<section className="grid gap-8 md:grid-cols-[1.1fr,0.9fr] items-start">
				{/* Form */}
				<form
					onSubmit={handleSubmit}
					className="rounded-4xl border border-white/10 bg-slate-950/70 shadow-soft p-6 space-y-4"
				>
					<div className="grid gap-4 sm:grid-cols-2">
						<div className="space-y-1.5">
							<label
								htmlFor="name"
								className="text-xs font-medium text-slate-200"
							>
								Name
							</label>
							<input
								id="name"
								name="name"
								required
								className="w-full rounded-2xl border border-white/10 bg-slate-950/70 px-3 py-2 text-sm text-slate-50 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-lagoon-blue focus:ring-offset-2 focus:ring-offset-slate-950"
								placeholder="Your full name"
							/>
						</div>
						<div className="space-y-1.5">
							<label
								htmlFor="email"
								className="text-xs font-medium text-slate-200"
							>
								Email
							</label>
							<input
								id="email"
								name="email"
								type="email"
								required
								className="w-full rounded-2xl border border-white/10 bg-slate-950/70 px-3 py-2 text-sm text-slate-50 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-lagoon-blue focus:ring-offset-2 focus:ring-offset-slate-950"
								placeholder="you@company.com"
							/>
						</div>
					</div>

					<div className="space-y-1.5">
						<label
							htmlFor="message"
							className="text-xs font-medium text-slate-200"
						>
							How can we help?
						</label>
						<textarea
							id="message"
							name="message"
							required
							rows={5}
							className="w-full rounded-3xl border border-white/10 bg-slate-950/70 px-3 py-2 text-sm text-slate-50 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-lagoon-blue focus:ring-offset-2 focus:ring-offset-slate-950"
							placeholder="Tell us about your traffic, offers, or goals..."
						/>
					</div>

					<div className="flex items-center justify-between gap-4 pt-2">
						<Button type="submit">
							{status === 'submitted' ? 'Message sent ✨' : 'Send message'}
						</Button>
						<p className="text-[11px] text-slate-400">
							We&apos;ll usually reply within 1–2 business days.
						</p>
					</div>
				</form>

				{/* Sidebar */}
				<aside className="space-y-6">
					<div className="rounded-3xl border border-white/10 bg-slate-950/70 p-5">
						<p className="text-xs font-semibold uppercase tracking-wide text-lagoon-turquoise mb-2">
							Contact details
						</p>
						<dl className="space-y-2 text-sm text-slate-200">
							<div>
								<dt className="text-slate-400 text-xs">Email</dt>
								<dd>hello@lagoonads.com</dd>
							</div>
							<div>
								<dt className="text-slate-400 text-xs">Time zone</dt>
								<dd>Europe / Tel Aviv (UTC+2)</dd>
							</div>
							<div>
								<dt className="text-slate-400 text-xs">Preferred channels</dt>
								<dd>Slack, Skype, Email</dd>
							</div>
						</dl>
					</div>

					<div className="rounded-3xl border border-white/10 bg-slate-950/70 p-5 space-y-3">
						<p className="text-xs font-semibold uppercase tracking-wide text-lagoon-turquoise">
							Social
						</p>
						<div className="flex flex-wrap gap-3 text-sm">
							<a
								href="#"
								className="inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-1.5 hover:border-lagoon-blue hover:text-lagoon-blue transition"
							>
								<span className="text-xs">in</span>
								<span>LinkedIn</span>
							</a>
							<a
								href="#"
								className="inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-1.5 hover:border-lagoon-blue hover:text-lagoon-blue transition"
							>
								<span className="text-xs">X</span>
								<span>Twitter</span>
							</a>
							<a
								href="#"
								className="inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-1.5 hover:border-lagoon-blue hover:text-lagoon-blue transition"
							>
								<span className="text-xs">●</span>
								<span>Telegram</span>
							</a>
						</div>
					</div>
				</aside>
			</section>
		</div>
	);
};

export default Contact;