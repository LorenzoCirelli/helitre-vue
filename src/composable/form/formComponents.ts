import type { Component } from "vue";
import {
  colorInput,
  dateInput,
  datetimeLocalInput,
  emailInput,
  hiddenInput,
  imageInput,
  monthInput,
  numberInput,
  passwordInput,
  resetInput,
  searchInput,
  telInput,
  textInput,
  timeInput,
  urlInput,
  weekInput,
  checkBoxInput,
  selectInput,
} from "../../components/form/fields/fields";

export const componentsMap: Map<string, Component> = new Map([
  ["text", textInput],
  ["number", numberInput],
  ["date", dateInput],
  ["color", colorInput],
  ["datetimeLocal", datetimeLocalInput],
  ["email", emailInput],
  ["hidden", hiddenInput],
  ["image", imageInput],
  ["month", monthInput],
  ["password", passwordInput],
  ["reset", resetInput],
  ["search", searchInput],
  ["tel", telInput],
  ["time", timeInput],
  ["url", urlInput],
  ["week", weekInput],
  ["select", selectInput],
  ["checkbox", checkBoxInput],
]);
