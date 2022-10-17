import { ReactNode } from "react";

type LayoutProps = {
    children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
    return (
        <main className="min-h-screen bg-zinc-900 flex items-center justify-center">
            <section className="bg-zinc-800 min-w-[480px] px-8 py-4 rounded">
                { children }
            </section>
        </main>
    )
}

export default Layout;