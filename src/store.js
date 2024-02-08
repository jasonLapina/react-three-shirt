import { proxy } from "valtio";
const state = proxy({
  intro: true,
  selectedColor: "#ccc",
  seletedDecal: "three2",
});

export { state };
