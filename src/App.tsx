import { TemplateContextProvider } from "./contexts/template.context";
import AppRouter from "./Router";

export default function Home () {
  return <TemplateContextProvider><AppRouter /></TemplateContextProvider> 
}