import React, { useState } from "react";
import PageFormField from "../components/Feild";
import { Box, Form, FormField, TextInput, Button } from "grommet";
import { useDispatch } from "react-redux";

function Add({ closeAdd }) {
  const [value, setValue] = useState({});
  const dispatch = useDispatch();

  const handleSubmit = async () => {
    await dispatch.user.addData(value);
    dispatch.user.getStudTeachList();
    closeAdd();
  };
  return (
    <Box pad={"medium"} background="light-3">
      <Form
        value={value}
        onChange={(nextValue) => setValue(nextValue)}
        onSubmit={() => handleSubmit()}
      >
        <PageFormField label="Name">
          <FormField name="name" required>
            <Box background="white">
              <TextInput
                id="text-input-id"
                name="name"
                placeholder="Please enter the name"
              />
            </Box>
          </FormField>
        </PageFormField>
        <PageFormField label="Role">
          <FormField name="role" required>
            <Box background="white">
              <TextInput
                id="text-input-id"
                name="role"
                placeholder="Please enter the role"
              />
            </Box>
          </FormField>
        </PageFormField>
        <Box align="end">
          <Box direction="row" gap="medium">
            <Button type="submit" primary label="Submit" />
            <Button onClick={() => closeAdd()} secondary label="Cancel" />
          </Box>
        </Box>
      </Form>
    </Box>
  );
}

export default Add;
