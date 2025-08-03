import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { type ConfigEnv, defineConfig, loadEnv } from "vite";

// https://vite.dev/config/
export default ({ mode }: ConfigEnv) => {
	Object.assign(process.env, loadEnv(mode, process.cwd()));

	return defineConfig({
		plugins: [react(), tailwindcss()],
		server: {
			allowedHosts: true,
		},
		base: process.env.VITE_BASE_URL || "http://localhost:5173/",
	});
};
