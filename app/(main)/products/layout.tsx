
export default async function MainLayout({ children }: { children: React.ReactNode }) {
    
    return (
        <div className="flex flex-col bg-base-200 min-[60vh]">
            <main>
                {children}
            </main>
        </div>
    );
}
