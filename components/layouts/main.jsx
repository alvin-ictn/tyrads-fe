import Sidebar from "@/components/sidebar";

export default function Layout({children}) {
  return (
    <>
      <Sidebar />
      <main className="w-full pl-[136px]">{children}</main>
    </>
  );
}
