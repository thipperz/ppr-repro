import RenderResults from '@/app/render-results'
import { Suspense } from 'react'

export default function HomePage() {
    return (
        <main className="flex min-h-[60vh] flex-col items-center justify-center gap-8 text-center">
            <div className="space-y-2">
                <h1 className="text-3xl font-semibold tracking-tight text-foreground">
                    Repro
                </h1>
            
            </div>
                    <div className="space-y-6">

                    <Suspense
                        fallback={
                            <div className="rounded-lg border border-border bg-muted/50 px-4 py-8 text-center text-muted-foreground">
                                Loading results...
                            </div>
                        }
                    >
                        <RenderResults /> 
                    </Suspense>
        </div>
    

        </main>
    )
}
