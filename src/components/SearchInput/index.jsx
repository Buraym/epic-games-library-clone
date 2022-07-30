import * as React from "react";
import { Search } from "@mui/icons-material";
export default function SearchInput({ type, placeholder }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",
        flexDirection: "row",
        width: type ? 180 : 230,
        height: 40,
        borderRadius: type ? 5 : 30,
        color: "white",
        backgroundColor: "#252B35",
        borderColor: "#252B35 ",
        border: "none",
        paddingLeft: 5,
      }}
    >
      <Search
        style={{ color: "white", width: 20, height: 40, marginRight: 5 }}
      />
      <input
        style={{
          height: 20,
          borderRadius: type ? 5 : 30,
          color: "white",
          backgroundColor: "#252B35",
          paddingLeft: 10,
          borderColor: "#252B35 ",
          border: "none",
          outline: "none",
          fontWeight: "bolder",
          width: type ? 120 : 170,
        }}
        placeholder={placeholder}
      />
    </div>
  );
}
