import React from "react"
import { useEffect } from "react"
import useTemplateContext from "../hooks/useTemplateContext"

const Template = () => {
  const { activeTemplate, data } = useTemplateContext()
    const active = data[activeTemplate]
    return (
      <div id="large">
        <div className="group">
            <img src={`images/large/${active?.image}`} alt="Large Image" width={430} height={360} />
            <div className="details">
            <p><strong>Title</strong> {active?.title}</p>
            <p><strong>Description</strong> {active?.description}</p>
            <p><strong>Cost</strong> ${active?.cost}</p>
            <p><strong>ID #</strong> {active?.id}</p>
            <p><strong>Thumbnail File</strong> {active?.thumbnail}</p>
            <p><strong>Large Image File</strong> {active?.image}</p>
            </div>
        </div>
     </div>
    )
}

export default Template