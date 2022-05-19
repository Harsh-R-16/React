import { useState } from "react";

export default function Folder({ data }) {
  const [expand, setExpand] = useState(false);

  return (
    <div>
      <p onClick={() => setExpand(!expand)}>{data.name}</p>
      {expand && (
        <div style={{ margin: "10px" }}>
          {data.items.map((item) => (
            <>{item.isFolder ? <Folder data={item} /> : <p>{item.name}</p>}</>
          ))}
        </div>
      )}
    </div>
  );
}
