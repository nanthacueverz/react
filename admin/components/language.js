import React, { useState } from "react";
import ReactFlagsSelect from "react-flags-select";

export default function Language() {
  const [select, setSelect] = useState("SE");
  const onSelect = (code) => setSelect(code);
  console.log("SELECT", select);
  return (
    <div className="App">
      <ReactFlagsSelect
        className="menu-flags"
        selected={select}
        onSelect={onSelect}
        countries={["fi", "GB", "IE", "IT", "NL", "SE"]}
        customLabels={{"fi": "FI","GB": "GB","IE": "IE","IT": "IT","NL": "NL","SE": "SE"}}
      />
    </div>
  );
}
