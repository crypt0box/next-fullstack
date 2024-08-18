import MainNav from "@/components/main-nav";
import SiteFooter from "@/components/ui/site-footer";
import { dashboardConfig } from "@/config/dashboard";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <header>
        <div>
          <MainNav items={dashboardConfig.mainNav} />
        </div>
      </header>
      <SiteFooter />
    </div>
  );
}
