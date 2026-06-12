import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastProvider } from "./components/ui/Toast";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

export default function App() {
	return (
		<ToastProvider>
			<BrowserRouter>
				<Routes>
					<Route index element={<Home />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
			</BrowserRouter>
		</ToastProvider>
	);
}
