import TextSearchResults from '@/components/custom/text-search-results'
import Link from 'next/link'
import { Suspense } from 'react'

async function SearchPageComponent(props: {
    searchParams: Promise<{
        q?: string
    }>
}) {
    const searchParams = await props.searchParams
    const query = searchParams?.q || ''

    return (
        <div className="space-y-6">
            <nav className="text-sm text-muted-foreground">
                <Link href="/" className="hover:text-foreground">
                    ← Home
                </Link>
            </nav>
            {query && query !== '' ? (
                <>
                    <p className="text-sm text-muted-foreground">
                        Results for query
                    </p>
                    <h1 className="text-xl font-semibold text-foreground">
                        “{query}”
                    </h1>
                    <Suspense
                        fallback={
                            <div className="rounded-lg border border-border bg-muted/50 px-4 py-8 text-center text-muted-foreground">
                                Loading results...
                            </div>
                        }
                    >
                        <TextSearchResults query={query} />
                    </Suspense>
                </>
            ) : (
                <div className="rounded-lg border border-border bg-muted/30 px-4 py-12 text-center text-muted-foreground">
                    <p className="mb-4">Nothing to see here.</p>
                    <p className="text-sm">
                        Add a <code className="rounded bg-muted px-1.5 py-0.5">q</code> query (e.g. <Link href="/search?q=test" className="underline hover:text-foreground">/search?q=test</Link>).
                    </p>
                </div>
            )}
        </div>
    )
}

export default async function SearchPage(props: {
    searchParams: Promise<{
        q?: string
    }>
}) {
    return (
        <Suspense
            fallback={
                <div className="flex items-center justify-center py-12 text-muted-foreground">
                    Loading...
                </div>
            }
        >
            <SearchPageComponent {...props} />
        </Suspense>
    )
}
