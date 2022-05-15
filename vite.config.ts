import reactRefresh from '@vitejs/plugin-react-refresh'
import { defineConfig, loadEnv } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'

import { baseUrlPath } from './src/constants'

export default ({ mode }: { mode: string }) => {
  const env = loadEnv(mode, process.cwd(), '')

  return defineConfig({
    base: baseUrlPath + '/',
    plugins: [reactRefresh(), tsconfigPaths()],
    resolve: {
      alias: {
        '@mui/styled-engine': '@mui/styled-engine-sc',
      },
    },
    define: {
      __APP_ENV__: env.APP_ENV,
    },
  })
}
