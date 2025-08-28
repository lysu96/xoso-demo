import replace from "replace-in-files";

const options = {
  files: "src/**/*.{js,jsx,ts,tsx}",
  from: /from\s+['"]\.\//g,
  to: "from '@/",
};

replace(options)
  .then((results) => console.log("Done:", results))
  .catch((error) => console.error("Error:", error));
