import "./App.css";
import Form from "./components/Form";

const App = () => {
  return (
    <>
      <div className="max-w-md mx-auto py-8">
        <h1 className="text-3xl font-bold mb-4">Task Management Application</h1>

        <Form />
      </div>
    </>
  );
};

export default App;
