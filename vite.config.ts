import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// yarn add @types/node
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
    server: {
        host: "0.0.0.0",
    },
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "src"),
            "@comps": path.resolve(__dirname, "src/components"),
            "@router": path.resolve(__dirname, "src/router"),
            "@utils": path.resolve(__dirname, "src/utils"),
            "@assets": path.resolve(__dirname, "src/assets"),
        }
    },
    plugins: [
        vue()
    ]
})

