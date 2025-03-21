import Link from "next/link";

import { Text } from "../typography/body";

export function Logo() {
  return (
    <Link href="/">
      <Text
        size="22"
        weight="semibold"
        className="text-theme-neutral-100 dark:text-white"
      >
        oscar<span className="text-theme-neutral-40">castaneda</span>
      </Text>
    </Link>
  );
}
