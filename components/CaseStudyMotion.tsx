'use client';

import { useEffect, useRef } from 'react';
import {
	animate,
	motion,
	useInView,
	useMotionValue,
	useReducedMotion,
	useTransform,
} from 'framer-motion';
import motionStyles from './CaseStudyMotion.module.css';

export function CaseStudyReveal({
	children,
	delay = 0,
	className = '',
}: {
	children: React.ReactNode;
	delay?: number;
	className?: string;
}) {
	const shouldReduceMotion = useReducedMotion();
	const visible = { opacity: 1, y: 0, filter: 'blur(0px)' };

	if (shouldReduceMotion) {
		return <div className={`${motionStyles.reveal} ${className}`}>{children}</div>;
	}

	return (
		<motion.div
			initial={{ opacity: 0, y: 28, filter: 'blur(8px)' }}
			animate={visible}
			whileInView={visible}
			viewport={{ once: true, amount: 0.16 }}
			transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
			className={`${motionStyles.reveal} ${className}`}
		>
			{children}
		</motion.div>
	);
}

export function AnimatedMetric({ value }: { value: string }) {
	const ref = useRef<HTMLSpanElement>(null);
	const isInView = useInView(ref, { once: true, amount: 0.7 });
	const shouldReduceMotion = useReducedMotion();
	const token = value.match(/\d[\d,]*(?:\.\d+)?/)?.[0] ?? '';
	const target = Number(token.replace(/,/g, ''));
	const decimalPlaces = token.includes('.') ? token.split('.')[1].length : 0;
	const count = useMotionValue(Number.isFinite(target) ? target : 0);
	const formatted = useTransform(count, (current) => {
		if (!token || !Number.isFinite(target)) return value;
		const number = new Intl.NumberFormat('en-US', {
			minimumFractionDigits: decimalPlaces,
			maximumFractionDigits: decimalPlaces,
		}).format(Math.max(0, current));
		return value.replace(token, number);
	});

	useEffect(() => {
		if (!token || !Number.isFinite(target) || !isInView || shouldReduceMotion) return;

		count.set(0);
		const controls = animate(count, target, {
			duration: 1.35,
			ease: [0.22, 1, 0.36, 1],
		});

		return () => controls.stop();
	}, [count, isInView, shouldReduceMotion, target, token, value]);

	if (!token || !Number.isFinite(target)) return <span>{value}</span>;

	return (
		<motion.span ref={ref} aria-label={value}>
			{formatted}
		</motion.span>
	);
}