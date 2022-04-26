import { ChangeEvent, SyntheticEvent, useState } from "react";
import { NewEvent } from "../../types/interfaces";

const Form = (): JSX.Element => {
  const payload: NewEvent = {
    eventName: "",
    title: {
      en: "",
      es: "",
      ca: "",
      pt: "",
    },
    subtitle: {
      en: "",
      es: "",
      ca: "",
      pt: "",
    },
    description: {
      en: "",
      es: "",
      ca: "",
      pt: "",
    },
    capacity: 0,
  };

  const [data, SetData] = useState(payload);

  const changeData = (event: ChangeEvent<HTMLInputElement>) => {
    SetData({ ...data, [event.target.name]: event.target.value });
  };
  const resetForm = () => {
    SetData(payload);
  };
  const [toggleState, setToggleState] = useState(0);

  const toggleTab = (index: any) => {
    setToggleState(index);
  };

  const submitForm = (event: SyntheticEvent) => {
    event.preventDefault();
    resetForm();
    console.log(data);
  };

  return (
    <div className="container">
      <form autoComplete="off" onSubmit={submitForm}>
        <label htmlFor="text">EVENT NAME</label>
        <input
          type="text"
          name="eventName"
          id="eventName"
          value={data.eventName}
          onChange={changeData}
        />
        <div className="lang-tabs">
          <button
            className={toggleState === 0 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(0)}
          >
            EN
          </button>
          <button
            className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(1)}
          >
            ES
          </button>
          <button
            className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(2)}
          >
            CA
          </button>
          <button
            className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(3)}
          >
            PT
          </button>
        </div>

        <div className="content-tabs">
          <div
            className={toggleState === 0 ? "content active-content" : "content"}
          >
            <label htmlFor="">TITLE</label>
            <input
              type="text"
              name="title"
              id="title"
              value={data.title.en}
              onChange={changeData}
            />
            <label htmlFor="">SUBTITLE</label>
            <input
              type="text"
              name="subtitle"
              id="subtitle"
              value={data.subtitle.en}
              onChange={changeData}
            />
            <label htmlFor="">DESCRIPTION</label>
            <input
              type="text"
              name="description"
              id="description"
              value={data.description.en}
              onChange={changeData}
            />
          </div>
          <div
            className={toggleState === 1 ? "content active-content" : "content"}
          >
            <label htmlFor="">TITULO</label>
            <input
              type="text"
              name="title"
              id="title"
              value={data.title.es}
              onChange={changeData}
            />
            <label htmlFor="">SUBTITULO</label>
            <input
              type="text"
              name="subtitle"
              id="subtitle"
              value={data.subtitle.es}
              onChange={changeData}
            />
            <label htmlFor="">DESCRIPCIÓN</label>
            <input
              type="text"
              name="description"
              id="description"
              value={data.description.es}
              onChange={changeData}
            />
          </div>
          <div
            className={toggleState === 2 ? "content active-content" : "content"}
          >
            <label htmlFor="">TÍTOL</label>
            <input
              type="text"
              name="title"
              id="title"
              value={data.title.ca}
              onChange={changeData}
            />
            <label htmlFor="">SUBTITULO</label>
            <input
              type="text"
              name="subtitle"
              id="subtitle"
              value={data.subtitle.ca}
              onChange={changeData}
            />
            <label htmlFor="">DESCRIPCIÓ</label>
            <input
              type="text"
              name="description"
              id="description"
              value={data.description.ca}
              onChange={changeData}
            />
          </div>
          <div
            className={toggleState === 3 ? "content active-content" : "content"}
          >
            <label htmlFor="">TITULO</label>
            <input
              type="text"
              name="title"
              id="title"
              value={data.title.pt}
              onChange={changeData}
            />
            <label htmlFor="">RUBRICA</label>
            <input
              type="text"
              name="subtitle"
              id="subtitle"
              value={data.subtitle.pt}
              onChange={changeData}
            />
            <label htmlFor="">DESCRIÇÃO</label>
            <input
              type="text"
              name="description"
              id="description"
              value={data.description.pt}
              onChange={changeData}
            />
          </div>
        </div>
        <label htmlFor="text">CAPACITY</label>
        <input
          type="text"
          name="capacity"
          id="capacity"
          value={data.capacity}
          onChange={changeData}
        />
        <div>
          <button className="form-button" type="submit" value="Submit">
            CREATE
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
