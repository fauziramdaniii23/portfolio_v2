import { Sidebar } from "@/components/dashboard/Sidebar"

type Props = {
    children : React.ReactNode
}

export default function Layout({children} : Props) {
    return (
        <div className="flex h-screen bg-background">
            <Sidebar />
            {children}
        </div>
    )
}
