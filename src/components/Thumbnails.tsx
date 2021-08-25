import useTemplateContext from "../hooks/useTemplateContext";

const Thumbnails = () => {
  const { data, activeTemplate, Groups, ActiveGroup, next, previous } =
    useTemplateContext();
  const active = data[activeTemplate];
  return (
    <div className="thumbnails">
      <div className="group">
        {Groups[ActiveGroup].map((template) => (
          <a
            href="#"
            key={template.id}
            className={active?.id === template.id ? "active" : ""}
          >
            <img
              src={`images/thumbnails/${template.thumbnail}`}
              alt={`${template.id}-m`}
              width="145"
              height="121"
            />
            <span>{template.id}</span>
          </a>
        ))}
        <span
          className={`previous ${activeTemplate === 0 && "disabled"}`}
          title="Previous"
          onClick={activeTemplate !== 0 ? previous : () => {}}
        >
          Previous
        </span>
        <a
          href="#"
          className={`next ${activeTemplate >= data.length - 1 && "disabled"}`}
          title="Next"
          onClick={activeTemplate < data.length - 1 ? next : () => {}}
        >
          Next
        </a>
      </div>
    </div>
  );
};

export default Thumbnails;
