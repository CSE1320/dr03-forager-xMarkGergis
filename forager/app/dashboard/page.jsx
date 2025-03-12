import NavBar from "../../components/NavBar"; // Adjust the path if necessary
import Filter from "../../components/Filter";

export default function DashboardPage() {
  return (
    <div className="p-6">
      <NavBar />

      <div className="mt-4">
        <h1 className="text-2xl font-bold">Dashboard Page</h1>
      </div>

      <Filter />
    </div>
  );
}
