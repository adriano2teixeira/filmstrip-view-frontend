import React, { createContext, useState, useEffect } from "react";
import api from "../services/api";

export interface iTemplate {
  id: string;
  title: string;
  cost: string;
  thumbnail: string;
  description: string;
  image: string;
}

interface iTemplateContext {
  activeTemplate: number; // the active template's id
  data: iTemplate[];
  isLoading?: boolean;
  ActiveGroup: number;
  next?: any;
  Groups: Array<iTemplate[]>;
  previous?: any
}

export const TemplateContext = createContext<iTemplateContext>({
  data: [],
  Groups: [],
  ActiveGroup: 0,
  activeTemplate: 0,
});

export const TemplateContextProvider: React.FC = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState<iTemplate[]>([]);
  const [ActiveGroup, setActiveGroup] = useState(0);
  const [activeTemplate, setActiveTemplate] = useState(0);
  const [Groups, setGroups] = useState([]);

  useEffect(() => {
    (async function () {
      try {
        const { data } = await api.get("/templates");
        setData(data);
        const chunks: any = [];
        data.forEach((item: any) => {
          if (!chunks.length || chunks[chunks.length - 1].length == 4)
            chunks.push([]);

          chunks[chunks.length - 1].push(item);
        });
        setGroups(chunks);
      } catch (error) {
        alert(error.message);
      } finally {
        setIsLoading(false);
      }
    })();

    return () => {};
  }, []);

  const next = () => {
    if (activeTemplate < data.length) {
      const nActiveTemplate = activeTemplate + 1;
      for (let index = 0; index < Groups.length; index++) {
        let n_group: Array<any> = Groups[index];
        for(let i = 0; i < n_group.length; i++) {
          if(n_group[i] === data[nActiveTemplate]) {
            setActiveGroup(index)
          }
        }
      }
      setActiveTemplate(nActiveTemplate);
    }
  };
  const previous = () => {
    if (activeTemplate !== 0) {
      const nActiveTemplate = activeTemplate - 1;
      for (let index = 0; index < Groups.length; index++) {
        let n_group: Array<any> = Groups[index];
        for(let i = 0; i < n_group.length; i++) {
          if(n_group[i] === data[nActiveTemplate]) {
            setActiveGroup(index)
          }
        }
      }
      setActiveTemplate(nActiveTemplate);
    }
  };

  const ctx_value = {
    data,
    isLoading,
    activeTemplate,
    ActiveGroup,
    next,
    Groups,
    previous
  };
  return (
    <TemplateContext.Provider value={ctx_value}>
      {children}
    </TemplateContext.Provider>
  );
};
