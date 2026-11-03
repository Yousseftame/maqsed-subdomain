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


const ABOUT_COLLECTION = "about";
const ABOUT_DOC_ID = "main";
export const DEFAULT_ABOUT_PDF = "/بروفايل مقصد V2.pdf";

export const companyProfileService = {
  async getProfilePdf(): Promise<string> {
    try {
      const snap = await getDoc(doc(getDb(), ABOUT_COLLECTION, ABOUT_DOC_ID));
      if (!snap.exists()) return DEFAULT_ABOUT_PDF;
      const data = snap.data() as Record<string, unknown>;
      const pdf = String(data?.profilePdf || "").trim();
      return pdf || DEFAULT_ABOUT_PDF;
    } catch (err) {
      console.error("Failed to fetch company profile PDF:", err);
      return DEFAULT_ABOUT_PDF;
    }
  },
};
