import { createVuetify, type ThemeDefinition } from "vuetify";
import {
  VCard,
  VRow,
  VCol,
  VBtn,
  VTextField,
  VIcon,
  VImg,
} from "vuetify/components";
import { aliases } from "vuetify/iconsets/mdi";
import * as directives from "vuetify/directives";
const defaultTheme: ThemeDefinition = {
  dark: false,
  colors: {
    primary: "#016AC0",
    "primary-light": "#E6F4FF",
    secondary: "#FF642F",
    "secondary-light": "#FFECE5",
    "on-primary": "#fff",
    "on-secondary": "#fff",
    dark: "#383838",
    light: "#92929299",
    lighter: "#d1d1d1",
    medium: "#929292",
    "background-color": "#FCFCFC",
    success: "#33AC2E",
    warning: "#ECC346",
    error: "#B00020",
    "success-light": "#F8FFF6",
    "warning-light": "#FFF7DD",
    "error-light": "#FFF4F4",
    surface: "#EFEFEF",
    info: "#FDFAE3",
  },
};

export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    components: {
      VCard,
      VRow,
      VCol,
      VBtn,
      VTextField,
      VIcon,
      VImg,
    },
    defaults: {
      VBtn: {
        class: "text-capitalize",
        elevation: 0,
      },
      VRow: {
        class: "ma-0",
      },
      VCol: {
        // cols: '12',
      },
      VTextField: {
        variant: "outlined",
        density: "compact",
        // class: 'pb-2',
      },
      VAutocomplete: {
        variant: "outlined",
        density: "compact",
      },
      VCombobox: {
        variant: "outlined",
        density: "compact",
      },
      VSelect: {
        variant: "outlined",
        density: "compact",
      },
      VCard: {
        variant: "text",
        class: "border",
      },
      VCheckbox: {
        class: "customised-checkbox selection-h-auto selection-flex-start",
        color: "primary",
      },
      VRadioGroup: {
        color: "primary",
      },
      VRadio: {
        class: "customised-radio selection-h-auto selection-flex-start",
        color: "primary",
      },
    },
    directives,
    theme: {
      defaultTheme: "defaultTheme",
      themes: {
        defaultTheme,
      },
    },
    icons: {
      aliases: {
        ...aliases,
        next: "mdi-chevron-right",
      },
    },
  });
  nuxtApp.vueApp.use(vuetify);
});
