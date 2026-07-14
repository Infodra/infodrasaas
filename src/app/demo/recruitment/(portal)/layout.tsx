import { RecruitmentShell } from "../components/RecruitmentShell";

export default function RecruitmentPortalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <RecruitmentShell>{children}</RecruitmentShell>;
}
