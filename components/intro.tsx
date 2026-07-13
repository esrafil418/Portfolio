import Image from "next/image";
import authorImage from "@/public/images/authors/1.jpg";

export default function Intro() {
	return (
		<section className="flex flex-col-reverse items-start gap-x-10 gap-y-4 pb-24 md:flex-row md:items-center">
			<div className="mt-2 flex-1 md:mt-0">
				<h1 className="title no-underline">Hey, I&apos;m Esrafil.</h1>
				<p className="mt-3 font-light text-muted-foreground">
					I&apos;m a Junior Front-End Developer who turns designs into responsive, accessible websites. I work comfortably across the modern front-end ecosystem — React, TypeScript, Tailwind, and component libraries like shadcn/ui and MUI — and I'm actively expanding into the back-end with Node.js and Prisma.
				</p>
			</div>
			<div className="relative">
				<Image
					className="flex-1 rounded-lg grayscale"
					src={authorImage}
					alt="Esrafil"
					width={175}
					height={175}
					priority
				/>
			</div>
		</section>
	);
}
