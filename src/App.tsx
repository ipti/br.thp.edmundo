import { QueryClientProvider } from "react-query";
import RoutesApp from "./router/router";
import queryClient from "./service/reactquery";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RoutesApp />
    </QueryClientProvider>
  );
}

export default App;
