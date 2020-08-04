import React from "react";
import { render } from "react-dom";
import * as styles from "./styles/style.css";
import App from "./app";

render(<App style={styles} />, document.getElementById("root"));
