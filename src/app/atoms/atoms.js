import { atom } from "recoil";

const jobState = atom({
  key: "Job",
  default: [],
});
export const singleJobState = atom({
  key: "singleJob",
  default: null,
});

export default jobState;
