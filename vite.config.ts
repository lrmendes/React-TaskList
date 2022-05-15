import reactRefresh from '@vitejs/plugin-react-refresh'
import { defineConfig, loadEnv } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'

import { baseUrlPath } from './src/constants'

export default ({ mode }: { mode: string }) => {
  const env = loadEnv(mode, process.cwd(), '')

  const app_env = Object.entries(env).reduce(
    (acc, [key, value]) => {
      return key.toLowerCase().startsWith('vite_') ? { ...acc, [key]: value } : acc
    },
    { MODE: mode },
  )

  return defineConfig({
    base: baseUrlPath + '/',
    plugins: [reactRefresh(), tsconfigPaths()],
    resolve: {
      alias: {
        '@mui/styled-engine': '@mui/styled-engine-sc',
      },
    },
    define: {
      process: {
        env: app_env,
      },
    },
  })
}
