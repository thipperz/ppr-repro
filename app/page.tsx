import Link from 'next/link'

export default function HomePage() {
    return (
        <main className="flex min-h-[60vh] flex-col items-center justify-center gap-8 text-center">
            <div className="space-y-2">
                <h1 className="text-3xl font-semibold tracking-tight text-foreground">
                    Search repro
                </h1>
                <p className="text-muted-foreground">
                    Minimal reproduction for the search page bug when a query is present.
                </p>
            </div>
            <p className="text-md text-muted-foreground">
                Try <Link href="/search?q=test" className="underline hover:text-foreground">/search?q=test</Link> to see results.
            </p>
            <p className="text-md text-muted-foreground">
                Then, reload the page to confirm there is no bug.
            </p>
        </main>
    )
}
