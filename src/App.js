import { BrowserRouter } from "react-router-dom";

//pages
import Pages from "./pages/Pages";
import CategoryFilter from "./components/CategoryFilter/CategoryFilter";

//globalStyles
import { GlobalStyles } from "./GlobalStyles";
import SearchInput from "./components/SearchInput/SearchInput";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <SearchInput />
      <CategoryFilter />
      <Pages />
    </BrowserRouter>
  );
}

export default App;
