function insertInputValues(userEvent, getByTestId) {
  // insert the values
  userEvent.type(getByTestId("input-element-firstname"), "Jonh");
  userEvent.type(getByTestId("input-element-lastname"), "Doe");
  userEvent.type(getByTestId("input-element-email"), "a@a.com");
  userEvent.type(getByTestId("input-element-phone"), "07810788628");
  userEvent.selectOptions(getByTestId("select-pizza"), "Peperoni");
}

export default {
  insertInputValues,
};
