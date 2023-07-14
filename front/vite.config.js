import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'



const fileNames = ['src'];
const filePaths = fileNames.reduce((acc, cur) => ({
  ...acc, [cur]: `/${cur === "src" ? cur : "src/" + cur}`
}));

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      src: "/src",
      components: "/src/components"
    },
  },
})
