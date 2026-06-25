import Image from "next/image";
import authorImage from "@/public/images/authors/Ghost of Tsushima_20251215115123.jpg";

export default function Intro() {
	return (
		<section className="flex flex-col-reverse items-start gap-x-10 gap-y-4 pb-24 md:flex-row md:items-center">
			<div className="mt-2 flex-1 md:mt-0">
				<h1 className="title no-underline">Hey, I&#39;m Esrafil.</h1>
				<p className="mt-3 font-light text-muted-foreground">
					I&#39;m a front-end developer who turns designs into responsive,
					accessible websites. I focus on writing clean, maintainable code with
					modern frameworks like React and Next.js.
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
