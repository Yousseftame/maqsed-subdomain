import { doc, getDoc } from "firebase/firestore";
import { getDb } from "@/lib/firebase/firebase";

const COLLECTION = "company";
const DOC_ID = "main";

type SocialNetwork = "instagram" | "twitter" | "snapchat";

export type SubSiteSocials = {
  instagram: string;
  twitter: string;
  snapchat: string;
};

function isEnabled(flags: Record<string, unknown> | undefined, network: SocialNetwork): boolean {
  if (!flags || typeof flags[network] !== "boolean") return true;
  return flags[network] === true;
}

function visibleUrl(
  data: Record<string, unknown> | undefined,
  flags: Record<string, unknown> | undefined,
  network: SocialNetwork
): string {
  if (!isEnabled(flags, network)) return "";
  const url = String(data?.[network] || "").trim();
  return url.startsWith("http") ? url : "";
}

export const companySocialsService = {
  async getSocials(): Promise<SubSiteSocials> {
    const empty: SubSiteSocials = { instagram: "", twitter: "", snapchat: "" };
    const snap = await getDoc(doc(getDb(), COLLECTION, DOC_ID));
    if (!snap.exists()) return empty;

    const data = snap.data() as Record<string, unknown>;
    const flags =
      data.socialEnabled && typeof data.socialEnabled === "object"
        ? (data.socialEnabled as Record<string, unknown>)
        : undefined;

    return {
      instagram: visibleUrl(data, flags, "instagram"),
      twitter: visibleUrl(data, flags, "twitter"),
      snapchat: visibleUrl(data, flags, "snapchat"),
    };
  },
};
