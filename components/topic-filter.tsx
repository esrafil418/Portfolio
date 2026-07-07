"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { cn } from "@/lib/utils";

interface TopicFilterProps {
	topics: string[];
	selectedTopic?: string;
}

export default function TopicFilter({
	topics,
	selectedTopic,
}: TopicFilterProps) {
	const router = useRouter();
	const searchParams = useSearchParams();

	const handleTopicClick = (topic: string) => {
		const params = new URLSearchParams(searchParams);

		if (topic === "All") {
			params.delete("topic");
		} else {
			params.set("topic", topic);
		}

		router.push(`/projects?${params.toString()}`);
	};

	return (
		<div className="mb-8 flex flex-wrap gap-2">
			{["All", ...topics].map((topic) => (
				<button
					type="button"
					key={topic}
					onClick={() => handleTopicClick(topic)}
					className={cn(
						"rounded-full px-4 py-2 text-sm font-medium transition-colors",
						selectedTopic === topic || (topic === "All" && !selectedTopic)
							? "bg-primary text-primary-foreground"
							: "bg-muted text-muted-foreground hover:bg-muted/80",
					)}
				>
					{topic}
				</button>
			))}
		</div>
	);
}
