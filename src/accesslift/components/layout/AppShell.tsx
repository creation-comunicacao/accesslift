import type { ReactNode } from "react";
import { WhatsAppButton } from "../buttons/CtaButtons";
import { getBreadcrumbItems } from "../navigation/navigation";
import { Breadcrumbs } from "../breadcrumbs/Breadcrumbs";
import { Footer } from "./Footer";
import { Header } from "./Header";

type AppShellProps = {
  children: ReactNode;
  currentPath: string;
};

export function AppShell({ children, currentPath }: AppShellProps) {
  const breadcrumbs = getBreadcrumbItems(currentPath);

  return (
    <div className="min-h-screen bg-[#f6f8fb] font-sans text-slate-950 antialiased">
      <Header currentPath={currentPath} />
      <main>
        <div className="mx-auto max-w-7xl px-4 pt-5 md:px-6">
          <Breadcrumbs items={breadcrumbs} />
        </div>
        {children}
      </main>
      <Footer />
      <div className="fixed bottom-4 right-4 z-40 hidden sm:block lg:hidden">
        <WhatsAppButton compact className="soft-shadow" />
      </div>
    </div>
  );
}
