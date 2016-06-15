import React from "react";
import { storiesOf } from "@kadira/storybook";
import Button from "../button/button";

storiesOf('Button', module)
.add('button', function() {
  return (
  <section>
    <h2> Exmaple(nomal)</h2>
    <div>
      <Button type={"default"}>test</Button>
      <Button type={"success"}>test</Button>
      <Button type={"warning"}>test</Button>
      <Button type={"danger"}>test</Button>
    </div>
  </section>
  )
});

