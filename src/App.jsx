import AppRoutes from "./AppRoutes";

function App() {
  function criarMenus() {
    return [{ titulo: "Sub01" }, { titulo: "Sub02" }];
  }

  return (
    <div>
      <AppRoutes />
    </div>
  );
}

export default App;
