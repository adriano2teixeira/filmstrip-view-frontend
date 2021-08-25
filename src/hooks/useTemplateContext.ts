import { useContext } from "react"
import { TemplateContext } from "../contexts/template.context"

const useTemplateContext = () => {
    const ctx = useContext(TemplateContext)
    return ctx
}

export default useTemplateContext