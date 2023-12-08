import Navbar from "./Components/Navbar";
import Restaurant from "./Pages/Restaurants";

function App() {
  return (
    <div className="">
      <Navbar />
      <h1 className="text-6xl py-8 px-4">Restaurants</h1>

      <p className="w-1/2 py-8 px-4">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa
        asperiores accusamus nemo molestiae. Iusto minus beatae maiores minima
        necessitatibus unde.
      </p>

      <Restaurant />
    </div>
  );
}

export default App;
