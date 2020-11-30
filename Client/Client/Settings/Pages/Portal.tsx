import { Divider, Grid, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { AppContextType, ColorType } from "../../../../Utils/Types";

interface PortalSettings {
  app_name: string;
  login: { background: string; welcomeText: string };
  color: ColorType;
}

const AppSettingsPortal: React.FC<{ context: AppContextType }> = ({
  context,
}) => {
  // Vars
  const [portalSettings, setPortalSettings] = useState<PortalSettings>();

  // Lifecycle
  useEffect(() => {
    context
      .getAppSettings("standaloneConfig-Support")
      .then((response: PortalSettings) => {
        setPortalSettings(response);
      });
  }, []);
  // UI
  return portalSettings ? (
    <context.UI.Animations.AnimationContainer>
      <Grid container>
        <Grid item xs={12}>
          <context.UI.Animations.AnimationItem>
            <context.UI.Design.Card title="Portal settings" withBigMargin>
              <Typography variant="body1">
                This app comes with it's own interface for clients to access and
                manage their tickets.
              </Typography>
              <Divider />
              <context.UI.Inputs.TextInput
                value={portalSettings.app_name}
                label="App name"
                onChange={(value) =>
                  setPortalSettings({ ...portalSettings, app_name: value })
                }
              />
              <context.UI.Inputs.Color
                value={portalSettings.color}
                label="Color"
                onChange={(value) =>
                  setPortalSettings({ ...portalSettings, color: value })
                }
              />
            </context.UI.Design.Card>
          </context.UI.Animations.AnimationItem>
        </Grid>
        <Grid item xs={6}>
          <context.UI.Animations.AnimationItem>
            <context.UI.Design.Card withBigMargin title="Login">
              <context.UI.Inputs.TextInput
                value={portalSettings.login.background}
                label="Background image"
                onChange={(value) =>
                  setPortalSettings({
                    ...portalSettings,
                    login: { ...portalSettings.login, background: value },
                  })
                }
              />
              <context.UI.Inputs.TextInput
                value={portalSettings.login.welcomeText}
                label="Welcome text"
                onChange={(value) =>
                  setPortalSettings({
                    ...portalSettings,
                    login: { ...portalSettings.login, welcomeText: value },
                  })
                }
              />
            </context.UI.Design.Card>
          </context.UI.Animations.AnimationItem>
        </Grid>
      </Grid>
    </context.UI.Animations.AnimationContainer>
  ) : (
    <context.UI.Loading />
  );
};

export default AppSettingsPortal;
