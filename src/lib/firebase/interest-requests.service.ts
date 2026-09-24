import {
  collection,
  doc,
  serverTimestamp,
  setDoc,
} from "firebase/firestore";
import { db } from "@/lib/firebase/firebase";

export type InterestRequestStatus =
  | "new"
  | "contacted"
  | "completed"
  | "cancelled";

export interface InterestRequest {
  id: string;
  fullName: string;
  phone: string;
  email: string;
  message: string;
  /** Where the lead came from */
  source: "sub_website";
  status: InterestRequestStatus;
  createdAt: unknown;
  updatedAt: unknown;
}

export type InterestRequestInput = {
  fullName: string;
  phone: string;
  email?: string;
  message?: string;
};

const INTEREST_COLLECTION = "interest_requests";

export const interestRequestsService = {
  async addInterestRequest(data: InterestRequestInput): Promise<void> {
    const docRef = doc(collection(db, INTEREST_COLLECTION));
    const now = serverTimestamp();

    await setDoc(docRef, {
      fullName: data.fullName.trim(),
      phone: data.phone.trim(),
      email: (data.email ?? "").trim(),
      message: (data.message ?? "").trim(),
      source: "sub_website" as const,
      status: "new" as const,
      createdAt: now,
      updatedAt: now,
    });
  },
};
