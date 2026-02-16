
/** @type {import('next').NextConfig} */
const nextConfig = {
    //cacheComponents: true,
    reactStrictMode: true,
    pageExtensions: ['tsx', 'ts', 'jsx', 'js'],
    reactCompiler: true
}

export default nextConfig

import { initOpenNextCloudflareForDev } from '@opennextjs/cloudflare'
initOpenNextCloudflareForDev()
