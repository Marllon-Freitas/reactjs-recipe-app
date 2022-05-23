import { BrowserRouter } from "react-router-dom";

//pages
import Pages from "./pages/Pages";
import CategoryFilter from "./components/CategoryFilter/CategoryFilter";

//globalStyles
import { GlobalStyles } from "./GlobalStyles";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <CategoryFilter />
      <Pages />
    </BrowserRouter>
  );
}

export default App;
