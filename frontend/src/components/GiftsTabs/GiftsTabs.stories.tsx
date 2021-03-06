import React from "react";

import { GiftsTabs } from ".";
import { Layout } from "../Layout";

const story = {
  component: GiftsTabs,
  title: "GiftsTabs",
};
export default story;

const Template: any = (args: any) => (
  <Layout>
    <GiftsTabs {...args} />
  </Layout>
);

export const Default = Template.bind({});
Default.args = {};
