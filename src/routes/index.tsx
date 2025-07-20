import { createFileRoute, redirect } from "@tanstack/react-router";
import { isAuthenticated } from "@/utils/auth";

export const Route = createFileRoute("/")({
  beforeLoad: async () => {
    if (!isAuthenticated()) {
      throw redirect({to: "/login"})
    } else {
      throw redirect({to: "/dashboard"})
    }
  },
});

