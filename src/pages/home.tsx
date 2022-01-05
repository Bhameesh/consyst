import React, { useState } from "react";
import PageFormField from "../components/Feild";
import { Box, Form, FormField, TextInput, Button } from "grommet";
import { history } from "../utils/store";
import { useDispatch } from "react-redux";
import { getJsonCookies } from "../helpers/utility";

function Home() {
  const [value, setValue] = useState({});
  const [error, setError] = useState(false);
  const dispatch = useDispatch();

  const handleSubmit = async () => {
    setError(false);
    await dispatch.user.loginPage(value);
    let res = getJsonCookies();
    if (res) history.push(`/content`);
    else setError(true);
  };
  return (
    <Box pad={"medium"} background="light-3">
      <Form
        value={value}
        onChange={(nextValue) => setValue(nextValue)}
        onSubmit={() => handleSubmit()}
      >
        <PageFormField label="User Name">
          <FormField name="user_name" required>
            <Box background="white">
              <TextInput
                id="text-input-id"
                name="user_name"
                placeholder="Please enter the user name"
              />
            </Box>
          </FormField>
        </PageFormField>
        <PageFormField label="Password">
          <FormField name="password" htmlFor="password" required>
            <Box background="white">
              <TextInput
                name="password"
                id="password"
                type="password"
                placeholder="Please enter the password"
              />
            </Box>
          </FormField>
        </PageFormField>
        <Box align="end">
          <Box direction="row" gap="medium">
            <Button type="submit" primary label="Submit" />
          </Box>
        </Box>
      </Form>
      {error?"Invalid User ":""}
    </Box>
  );
}

export default Home;
