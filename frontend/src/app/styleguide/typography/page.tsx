import Paragraph from "@/typo/Paragraph/Paragraph";
import Headline from "@/typo/Headline/Headline";

export default function page() {
  return (
    <div>
      <div>
        <Paragraph level={1}>Paragraph level=1</Paragraph>
      </div>
      <div>
        <Paragraph level={2}>Paragraph level=2</Paragraph>
      </div>
      <div>
        <Paragraph level={3}>Paragraph level=3</Paragraph>
      </div>
      <div>
        <Paragraph level={4}>Paragraph level=4</Paragraph>
      </div>
      <div>
        <Headline level={1}>Headline level=1</Headline>
      </div>
      <div>
        <Headline level={2}>Headline level=2</Headline>
      </div>
      <div>
        <Headline level={3}>Headline level=3</Headline>
      </div>
      <div>
        <Headline level={4}>Headline level=4</Headline>
      </div>
      <div>
        <Headline level={5}>Headline level=5</Headline>
      </div>
      <div>
        <Headline level={6}>Headline level=6</Headline>
      </div>
    </div>
  );
}
