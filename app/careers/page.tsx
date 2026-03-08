'use client'

import { useEffect } from "react";
import { redirect } from "next/navigation";

export default function Careers() {
  useEffect(() => {
    window.location.href =
      "https://jobs.rostr.cc/job/1479755-artist-management-coordinator-good-people-only";
  }, []);

  return null;
}
