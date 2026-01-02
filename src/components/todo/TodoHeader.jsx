import { Heading } from "../ui/Heading";
import { Paragraph } from "../ui/Paragraph";
import { HEADER_TEXT } from "../../constants/data";

export const TodoHeader = () => (
  <header className="mb-8">
    <Heading level={1} className="text-2xl mb-1">
      {HEADER_TEXT.title}
    </Heading>
    <Paragraph className="text-sm">{HEADER_TEXT.subtitle}</Paragraph>
  </header>
);
