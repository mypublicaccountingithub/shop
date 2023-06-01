import { Provider as ReduxProvider } from "react-redux";
import { ConfigProvider } from "antd";
import store from "../redux/store";
import antdTheme from "../lib/antd-theme";
import { QueryClientProvider } from "react-query";
import { ReactQueryClient } from "../lib/react-query-client";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";

const persistor = persistStore(store);

function Providers({ children }) {
  return (
    <ConfigProvider theme={antdTheme}>
      <ReduxProvider store={store}>
        <PersistGate persistor={persistor}>
          <QueryClientProvider client={ReactQueryClient}>
            {children}
          </QueryClientProvider>
        </PersistGate>
      </ReduxProvider>
    </ConfigProvider>
  );
}

export default Providers;
