/* eslint-disable react/no-unescaped-entities */
import Head from 'next/head'
import styled from 'styled-components'
import withApollo from '../apollo'
import { useGlobalContext } from '../libs/context/provider'

const Wrapper = styled.div`
	h1 {
		font-size: 5rem;
	}
`

function Home() {
	const { sidebarState } = useGlobalContext()

	return (
		<>
			<Head>
				{/* Tell the browser to never restore the scroll position on load */}
				{/* <script
					dangerouslySetInnerHTML={{
						__html: `history.scrollRestoration = "manual"`,
					}}
				/> */}
				<title>Playback | Interactive videos</title>
				<meta name="description" content="playback_interactive_videos." />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/android-chrome-512x512.png" />
			</Head>
			<Wrapper active={sidebarState.openSidebar}>
				<h1>
					{' '}
					Continuous Integration (CI) Build Caching To improve build
					performance, Next.js saves a cache to .next/cache that is shared
					between builds. To take advantage of this cache in Continuous
					Integration (CI) environments, your CI workflow will need to be
					configured to correctly persist the cache between builds. If your CI
					is not configured to persist .next/cache between builds, you may see a
					No Cache Detected error. Here are some example cache configurations
					for common CI providers: Vercel Next.js caching is automatically
					configured for you. There's no action required on your part.
					CircleCIfont-size: 1.7rem; Continuous Integration (CI) Build Caching
					To improve build performance, Next.js saves a cache to .next/cache
					that is shared between builds. To take advantage of this cache in
					Continuous Integration (CI) environments, your CI workflow will need
					to be configured to correctly persist the cache between builds. If
					your CI is not configured to persist .next/cache between builds, you
					may see a No Cache Detected error. Here are some example cache
					configurations for common CI providers: Vercel Next.js caching is
					automatically configured for you. There's no action required on your
					part. CircleCI Continuous Integration (CI) Build Caching To improve
					build performance, Next.js saves a cache to .next/cache that is shared
					between builds. To take advantage of this cache in Continuous
					Integration (CI) environments, your CI workflow will need to be
					configed to correctly persist the cache between builds. If your CI is
					not configured to persist .next/cache between builds, you may see a No
					Cache Detected error. Here are some example cache configurations for
					common CI providers: Vercel Next.js caching is automatically
					configured for you. There's no action required on your part. CircleCI
					Continuous Integration (CI) Build Caching To improve build
					performance, Next.js saves a cache to .next/cache that is shared
					between builds. To take advantage of this cache in Continuous
					Integration (CI) environments, your CI workflow will need to be
					configured to correctly persist the cache between builds. If your CI
					is not configured to persist .next/cache between builds, you may see a
					No Cache Detected error. Here are some example cache configurations
					for common CI providers: Vercel Next.js caching is automatically
					configured for you. There's no action required on your part. CircleCI
					Continuous Integration (CI) Build Caching To improve build
					performance, Next.js saves a cache to .next/cache that is shared
					between builds. To take advantage of this cache in Continuous
					Integration (CI) environments, your CI workflow will need to be
					configured to correctly persist the cache between builds. If your CI
					is not configured to persist .next/cache between builds, you may see a
					No Cache Detected error. Here are some example cache configurations
					for common CI providers: Vercel Next.js caching is automatically
					configured for you. There's no action required on your part. CircleCI
					Continuous Integration (CI) Build Caching To improve build
					performance, Next.js saves a cache to .next/cache that is shared
					between builds. To take advantage of this cache in Continuous
					Integration (CI) environments, your CI workflow will need to be
					configured to correctly persist the cache between builds. If your CI
					is not configured to persist .next/cache between builds, you may see a
					No Cache Detected error. Here are some example cache configurations
					for common CI providers: Vercel Next.js caching is automatically
					configured for you.Continuous Integration (CI) Build Caching To
					improve build performance, Next.js saves a cache to .next/cache that
					is shared between builds. To take advantage of this cache in
					Continuous Integration (CI) environments, your CI workflow will need
					to be configured to correctly persist the cache between builds. If
					your CI is not configured to persist .next/cache between builds, you
					may see a No Cache Detected error. Here are some example cache
					configurations for common CI providers: Vercel Next.js caching is
					automatically configured for you. There's no action required on your
					part. CircleCIContinuous Integration (CI) Build Caching To improve
					build performance, Next.js saves a cache to .next/cache that is shared
					between builds. To take advantage of this cache in Continuous
					Integration (CI) environments, your CI workflow will need to be
					configured to correctly persist the cache between builds. If your CI
					is not configured to persist .next/cache between builds, you may see a
					No Cache Detected error. Here are some example cache configurations
					for common CI providers: Vercel Next.js caching is automatically
					configured for you. There's no action required on your part.
					CircleCIContinuous Integration (CI) Build Caching To improve build
					performance, Next.js saves a cache to .next/cache that is shared
					between builds. To take advantage of this cache in Continuous
					Integration (CI) environments, your CI workflow will need to be
					configured to correctly persist the cache between builds. If your CI
					is not configured to persist .next/cache between builds, you may see a
					No Cache Detected error. Here are some example cache configurations
					for common CI providers: Vercel Next.js caching is automatically
					configured for you. There's no action required on your part.
					CircleCIContinuous Integration (CI) Build Caching To improve build
					performance, Next.js saves a cache to .next/cache that is shared
					between builds. To take advantage of this cache in Continuous
					Integration (CI) environments, your CI workflow will need to be
					configured to correctly persist the cache between builds. If your CI
					is not configured to persist .next/cache between builds, you may see a
					No Cache Detected error. Here are some example cache configurations
					for common CI providers: Vercel Next.js caching is automatically
					configured for you. There's no action required on your part.
					CircleCIContinuous Integration (CI) Build Caching To improve build
					performance, Next.js saves a cache to .next/cache that is shared
					between builds. To take advantage of this cache in Continuous
					Integration (CI) environments, your CI workflow will need to be
					configured to correctly persist the cache between builds. If your CI
					is not configured to persist .next/cache between builds, you may see a
					No Cache Detected error. Here are some example cache configurations
					for common CI providers: Vercel Next.js caching is automatically
					configured for you. There's no action required on your part.
					CircleCIContinuous Integration (CI) Build Caching To improve build
					performance, Next.js saves a cache to .next/cache that is shared
					between builds. To take advantage of this cache in Continuous
					Integration (CI) environments, your CI workflow will need to be
					configured to correctly persist the cache between builds. If your CI
					is not configured to persist .next/cache between builds, you may see a
					No Cache Detected error. Here are some example cache configurations
					for common CI providers: Vercel Next.js caching is automatically
					configured for you. There's no action required on your part.
					CircleCIvv There's no action required on your part. CircleCI
				</h1>
			</Wrapper>
		</>
	)
}
export default withApollo(Home)
