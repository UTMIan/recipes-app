import Card from "./components/card";

function App() {
  // Aviso: Mas tarde haremos un enrrutador
  return (
    <div className="">
      <main className="bg-[#180a04] h-screen grid grid-cols-3 gap-4">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </main>
    </div>
  );
}

export default App;
