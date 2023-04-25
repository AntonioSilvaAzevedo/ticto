import { ThemeProvider } from "styled-components";
import { defaultTheme } from "../styles/themes/default";
import { GlobalStyle } from "../styles/global";
import { TransactionsProvider } from "../contexts/TransactionsContext";
import { Transactions } from "./Transactions";

export default function Home() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <TransactionsProvider>
        <Transactions />
      </TransactionsProvider>
    </ThemeProvider>
  );
}
