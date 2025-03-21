import { Text } from "@/components/common/typography/body";
import { H1 } from "@/components/common/typography/heading";

export default function Home() {
  return (
    <div>
      <Text size="28" weight="medium" className="mb-4">
        Hello! I&#39;m Oscar.
      </Text>
      <H1 className="max-w-[1056px] mb-16">
        Designing digital product with emphasis on visual design
      </H1>
      <Text size="22" className="w-[518px]">
        A multidisciplinary designer harnessing the power of design to achieve
        online goals.
      </Text>
    </div>
  );
}
