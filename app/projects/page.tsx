import Projects from "@/components/projects";
import TopicFilter from "@/components/topic-filter";
import { getProjects } from "@/lib/projects";

export default async function ProjectsPage({
	searchParams,
}: {
	searchParams: { topic?: string };
}) {
	const allProjects = await getProjects();

	// Get unique topics from all projects
	const allTopics = Array.from(
		new Set(allProjects.flatMap((project) => project.topics || [])),
	).sort();

	// Filter projects based on selected topic
	const filteredProjects = searchParams.topic
		? allProjects.filter((project) =>
				project.topics?.includes(searchParams.topic as string),
			)
		: allProjects;

	return (
		<section className="pb-24 pt-40">
			<div className="container max-w-3xl">
				<h1 className="title mb-12">Projects</h1>

				<TopicFilter topics={allTopics} selectedTopic={searchParams.topic} />

				<Projects projects={filteredProjects} />
			</div>
		</section>
	);
}
