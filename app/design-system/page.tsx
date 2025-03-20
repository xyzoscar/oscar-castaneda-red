import { H1, H2, H3, H4, H5, H6 } from "@/components/typography/heading";
import { Text } from "@/components/typography/body";

export default function DesignSystemPage() {
  return (
    <div className="p-6">
      <div className="mb-6">
        <H1>Heading 1</H1>
        <H2>Heading 2</H2>
        <H3>Heading 3</H3>
        <H4>Heading 4</H4>
        <H5>Heading 5</H5>
        <H6>Heading 6</H6>
      </div>
      <div>
        <Text size="28" weight="semibold">
          The quick brown fox
        </Text>
        <Text size="28" weight="medium">
          The quick brown fox
        </Text>
        <Text size="28" weight="regular">
          The quick brown fox
        </Text>
        <Text size="20" weight="semibold">
          The quick brown fox
        </Text>
        <Text size="20" weight="medium">
          The quick brown fox
        </Text>
        <Text size="20" weight="regular">
          The quick brown fox
        </Text>
        <Text size="18" weight="semibold">
          The quick brown fox
        </Text>
        <Text size="18" weight="medium">
          The quick brown fox
        </Text>
        <Text size="18" weight="regular">
          The quick brown fox
        </Text>
        <Text size="16" weight="semibold">
          The quick brown fox
        </Text>
        <Text size="16" weight="medium">
          The quick brown fox
        </Text>
        <Text size="16" weight="regular">
          The quick brown fox
        </Text>
        <Text size="14" weight="semibold">
          The quick brown fox
        </Text>
        <Text size="14" weight="medium">
          The quick brown fox
        </Text>
        <Text size="14" weight="regular">
          The quick brown fox
        </Text>
        <Text size="12" weight="semibold">
          The quick brown fox
        </Text>
        <Text size="12" weight="medium">
          The quick brown fox
        </Text>
        <Text size="12" weight="regular">
          The quick brown fox
        </Text>
      </div>
    </div>
  );
}
