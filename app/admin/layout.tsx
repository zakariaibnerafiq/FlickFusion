import TopNavbar from "@components/TopNavbar";
import Sidebar from "@components/Sidebar";
export default function AdminLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="h-screen flex flex-col">
            <TopNavbar />
            <div className="flex h-full px-10 gap-10">
                <Sidebar />
                {children}
            </div>
        </div>
    );
}