// import { createRoot } from "react-dom/client"
import ReactDOM from "react-dom/client"
import { ErrorBoundary } from "react-error-boundary"
import ErrorFallback from "./ui/ErrorFallback.jsx"
import App from "./App.jsx"

ReactDOM.createRoot(document.getElementById("root")).render(
  <ErrorBoundary
    FallbackComponent={ErrorFallback}
    onReset={() => window.location.replace("/")}
  >
    <App />
  </ErrorBoundary>
)
