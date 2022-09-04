import AllControls from "../components/Dashboard/AllControls/AllControls";
import Sidebar from "../components/Dashboard/Sidebar/Sidebar";

export default function DashboardPage() {
  return (
    <div className="flex max-h-screen overflow-hidden">
      <Sidebar />
      <AllControls />
    </div>
  );
}
