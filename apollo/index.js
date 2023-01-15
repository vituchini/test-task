import {
	ApolloClient,
	ApolloLink,
	concat,
	HttpLink,
	InMemoryCache,
} from '@apollo/client'
import Cookies from 'cookies'
import { getDataFromTree } from '@apollo/client/react/ssr'
import { useMemo } from 'react'
import cookies from '../libs/utils/cookie'

let apolloClient

export const authMiddleware = (token = null) => {
	return new ApolloLink((operation, forward) => {
		operation.setContext(({ headers = {} }) => ({
			headers: {
				...headers,
				'X-PQ-Locale': 'en',
				'x-PQ-App': process.env.NEXT_PUBLIC_X_PQ_APP,
				'X-PQ-Authorisation': token || '',
			},
		}))

		return forward(operation)
	})
}

export const httpLink = new HttpLink({
	uri: process.env.NEXT_PUBLIC_API_URI, // Add your Slash endpoint here
})

function createApolloClient(token = null) {
	return new ApolloClient({
		ssrMode: typeof window === 'undefined',
		link: concat(authMiddleware(token), httpLink),
		cache: new InMemoryCache(),
	})
}

export function initializeApollo(initialState = null, token = null) {
	const _apolloClient = apolloClient ?? createApolloClient(token)

	// If your page has Next.js data fetching methods that use Apollo Client, the initial state
	// gets hydrated here
	if (initialState) {
		// Get existing cache, loaded during client side data fetching
		const existingCache = _apolloClient.extract()
		// Restore the cache using the data passed from getStaticProps/getServerSideProps
		// combined with the existing cached data
		_apolloClient.cache.restore({ ...existingCache, ...initialState })
	}
	// For SSG and SSR always create a new Apollo Client
	if (typeof window === 'undefined') return _apolloClient
	// Create the Apollo Client once in the client
	if (!apolloClient) apolloClient = _apolloClient
	return _apolloClient
}

export default function withApollo(PageComponent, { ssr = true } = {}) {
	function WithApollo(pageProps) {
		return <PageComponent {...pageProps} />
	}

	if (process.env.NODE_ENV !== 'production') {
		const displayName =
			PageComponent.displayName || PageComponent.name || 'Component'

		WithApollo.displayName = `withApollo(${displayName})`
	}

	if (ssr || PageComponent.getInitialProps) {
		WithApollo.getInitialProps = async (ctx) => {
			const { AppTree, req, res } = ctx
			let cookie
			if (req && res) {
				cookie = new Cookies(req, res) // Server-side
			} else {
				cookie = cookies // client-side
			}

			const adminAuthToken = cookie.get('adminAuthToken') || null
			const apolloClient = initializeApollo({}, adminAuthToken)
			ctx.apolloClient = apolloClient
			let pageProps = {}
			if (PageComponent.getInitialProps) {
				pageProps = await PageComponent.getInitialProps(ctx)
			}

			if (typeof window === 'undefined') {
				if (ctx.res && ctx.res.finished) {
					return pageProps
				}

				if (ssr) {
					try {
						await getDataFromTree(
							<AppTree
								pageProps={{
									...pageProps,
									apolloClient,
								}}
							/>
						)
					} catch (error) {
						//
					}
				}
			}

			const apolloState = apolloClient.cache.extract()

			return {
				...pageProps,
				apolloState,
				adminAuthToken,
			}
		}
	}
	return WithApollo
}

export const APOLLO_STATE_PROP_NAME = 'apolloState'

export function useApollo(pageProps) {
	const state = pageProps[APOLLO_STATE_PROP_NAME]
	const { adminAuthToken } = pageProps
	const store = useMemo(
		() => initializeApollo(state, adminAuthToken),
		[state, adminAuthToken]
	)
	return store
}
