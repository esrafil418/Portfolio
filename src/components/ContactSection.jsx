import { Mail, MapPin, MessagesSquare, Send } from "lucide-react";
import { useState } from "react";
import { cn } from "../lib/utils";
import { useToast } from "./ui/Toast";

export default function ContactSection() {
	const { toast } = useToast();
	const [isSubmitting, setIsSubmiting] = useState(false);

	const handleSubmit = (e) => {
		e.preventDefault();

		setIsSubmiting(true);

		e.currentTarget.reset();

		setTimeout(() => {
			toast({
				title: "Message sent",
				description: "Thanks for reaching out. I’ll get back to you soon.",
			});
			setIsSubmiting(false);
		}, 1500);
	};
	return (
		<section id="contact" className="py-24 px-4 relative bg-secondary/30">
			<div className="container mx-auto max-w-5xl">
				<h2 className="text-3xl md:text-4xl font-bold text-center">
					Get in <span className="text-primary">Touch</span>
				</h2>
				<p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
					Have a project in mind or want to collaborate? Feel free to reach out.
					I'm always open to discussing new opportunities.
				</p>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-12">
					<div className="space-y-8">
						<h3 className="text-2xl font-semibold mb-6">Contact Information</h3>

						<div className="space-y-6 justify-center">
							<div className="flex items-center space-x-4">
								<div className="p-3 rounded-full bg-primary/10">
									<Mail className="h-6 w-6 text-primary" />
								</div>
								<div>
									<h4 className="font-medium w-2">Email</h4>
									<a
										target="_blank"
										href="mailto:esrafil.s.r.man@gmail.com"
										className="text-muted-foreground hover:text-primary transition-colors"
										rel="noopener"
									>
										esrafil.s.r.man@gmail.com
									</a>
								</div>
							</div>

							<div className="flex items-center space-x-4">
								<div className="p-3 rounded-full bg-primary/10">
									<MessagesSquare className="h-6 w-6 text-primary" />
								</div>
								<div>
									<h4 className="font-medium w-2">Telegram</h4>
									<a
										target="_blank"
										href="t.me/S_R_man"
										className="text-muted-foreground hover:text-primary transition-colors"
										rel="noopener"
									>
										@S_R_man
									</a>
								</div>
							</div>

							<div className="flex items-center space-x-4">
								<div className="p-3 rounded-full bg-primary/10">
									<MapPin className="h-6 w-6 text-primary" />
								</div>
								<div>
									<h4 className="font-medium w-2">Location</h4>
									<a
										target="_blank"
										href="https://fa.wikipedia.org/wiki/%D8%AA%D9%87%D8%B1%D8%A7%D9%86"
										className="text-muted-foreground hover:text-primary transition-colors"
										rel="noopener"
									>
										Tehran
									</a>
								</div>
							</div>

							<div className="flex items-center space-x-4">
								<div className="p-3 rounded-full bg-primary/10">
									<MapPin className="h-6 w-6 text-primary" />
								</div>
								<div>
									<h4 className="font-medium w-2">Linkdin</h4>
									<a
										target="_blank"
										href="https://www.linkedin.com/in/esrafil-dev-2249b019a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
										className="text-muted-foreground hover:text-primary transition-colors"
										rel="noopener"
									>
										Link
									</a>
								</div>
							</div>
						</div>
					</div>

					<div className="bg-card p-8 rounded-lg shadow-xs">
						<h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
						<form onSubmit={handleSubmit} className="space-y-6">
							<div>
								<label
									htmlFor="name"
									className="block text-sm font-medium mb-2"
								>
									Your Name
								</label>
								<input
									type="text"
									id="name"
									name="name"
									required
									className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
									placeholder="Esrafil Aslani..."
								/>
							</div>

							<div>
								<label
									htmlFor="email"
									className="block text-sm font-medium mb-2"
								>
									Your Email
								</label>
								<input
									type="email"
									id="email"
									name="email"
									required
									className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
									placeholder="example@gmail.com..."
								/>
							</div>

							<div>
								<label
									htmlFor="message"
									className="block text-sm font-medium mb-2"
								>
									Your Message
								</label>
								<textarea
									id="message"
									name="message"
									required
									className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none"
									placeholder="Hello, I'd Like to talk about..."
								/>
							</div>
							<button
								type="submit"
								disabled={isSubmitting}
								className={cn(
									"cosmic-button w-full flex items-center justify-center gap-2 cursor-pointer",
								)}
							>
								{isSubmitting ? "Sending..." : "Send Message"}
								<Send size={16} />
							</button>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
}
