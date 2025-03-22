import { Text } from "@/components/common/typography/body";
import { H1 } from "@/components/common/typography/heading";

export default function Home() {
  return (
    <div>
      <Text size="28" weight="medium" className="mb-4">
        Hello! I&#39;m Oscar.
      </Text>
      <H1 className="mb-16 max-w-5xl">
        Designing digital product with emphasis on{" "}
        <span className="text-theme-neutral-40">visual design</span>
      </H1>
      <Text size="22">
        A multidisciplinary designer harnessing the power of design to achieve
        online goals.
      </Text>
    </div>
  );
}
