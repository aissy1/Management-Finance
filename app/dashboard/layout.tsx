import SideNav from "@/app/ui/dashboard/sidenav";
import { NotificationProvider } from "../ui/message";
export const experimental_ppr = true;

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen bg-primary flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>
      <NotificationProvider>
        <div className="flex-grow p-6 md:overflow-y-auto md:p-12">
          {children}
        </div>
      </NotificationProvider>
    </div>
  );
}
