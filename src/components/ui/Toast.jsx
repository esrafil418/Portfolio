import * as ToastPrimitive from "@radix-ui/react-toast";
import { X } from "lucide-react";
import {
	createContext,
	useCallback,
	useContext,
	useMemo,
	useState,
} from "react";
import { cn } from "../../lib/utils";

const ToastContext = createContext(null);
const MAX_TOASTS = 3;

function createToastId() {
	if (
		typeof crypto !== "undefined" &&
		typeof crypto.randomUUID === "function"
	) {
		return crypto.randomUUID();
	}

	return `${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

export function ToastProvider({ children }) {
	const [toasts, setToasts] = useState([]);

	const dismiss = useCallback((id) => {
		setToasts((current) => current.filter((toast) => toast.id !== id));
	}, []);

	const toast = useCallback((options) => {
		const id = createToastId();

		setToasts((current) => [
			{ id, ...options },
			...current.slice(0, MAX_TOASTS - 1),
		]);

		return id;
	}, []);

	const value = useMemo(() => ({ toast, dismiss }), [dismiss, toast]);

	return (
		<ToastContext.Provider value={value}>
			<ToastPrimitive.Provider swipeDirection="right">
				{children}

				{toasts.map(
					({ id, title, description, action, variant = "default" }) => (
						<ToastPrimitive.Root
							key={id}
							className={cn(
								"group pointer-events-auto relative flex w-full items-start justify-between gap-3 overflow-hidden rounded-2xl border p-5 pr-10 shadow-lg transition-all data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=cancel]:translate-x-0 data-[swipe=cancel]:transition-[transform,opacity] data-[state=closed]:animate-toast-hide data-[state=open]:animate-toast-show",
								variant === "destructive"
									? "border-red-500/30 bg-red-500/10 text-red-700 dark:text-red-200"
									: "border-border bg-card text-foreground",
							)}
							duration={4500}
							defaultOpen
							onOpenChange={(open) => {
								if (!open) {
									dismiss(id);
								}
							}}
						>
							<div className="grid gap-1 text-left">
								{title ? (
									<ToastPrimitive.Title className="text-sm font-semibold">
										{title}
									</ToastPrimitive.Title>
								) : null}

								{description ? (
									<ToastPrimitive.Description className="text-sm text-muted-foreground">
										{description}
									</ToastPrimitive.Description>
								) : null}
							</div>

							{action ? (
								<ToastPrimitive.Action asChild>{action}</ToastPrimitive.Action>
							) : null}

							<ToastPrimitive.Close className="absolute right-3 top-3 rounded-md p-1 text-muted-foreground transition-colors hover:text-foreground focus:outline-none focus:ring-2 focus:ring-primary">
								<X className="h-4 w-4" />
							</ToastPrimitive.Close>
						</ToastPrimitive.Root>
					),
				)}

				<ToastPrimitive.Viewport
					className={cn(
						"fixed bottom-0 right-0 z-50 flex w-full max-w-sm flex-col gap-3 p-4 sm:bottom-4 sm:right-4 sm:w-[420px]",
					)}
				/>
			</ToastPrimitive.Provider>
		</ToastContext.Provider>
	);
}

export function useToast() {
	const context = useContext(ToastContext);

	if (!context) {
		throw new Error("useToast must be used within a ToastProvider");
	}

	return context;
}
