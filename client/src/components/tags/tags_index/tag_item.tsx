import { observer } from "mobx-react-lite";

const TagItem = (props: any) => {
  const card_style = {
    background: "#032a40",
    padding: "15px",
    margin: "20px",
    borderRadius: "10px",
  };
  return (
    <a href={`/tags/${props.tag.id}`}>
      <div style={card_style}>
        <h4>{props.tag.name}</h4>
      </div>
    </a>
  );
};

export default observer(TagItem);
