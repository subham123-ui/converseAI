"use client";

import { DataTable } from "@/components/data-table";
import { ErrorState } from "@/components/error-state";
import { LoadingState } from "@/components/loading-state";
import { useTRPC } from "@/trpc/client";
import { useSuspenseQuery } from "@tanstack/react-query";
import { columns } from "../components/coulmns";
import { EmptyState } from "@/components/empty-state";

export const MeetingsView = () => {
  const trpc = useTRPC();
  const { data } = useSuspenseQuery(trpc.meetings.getMany.queryOptions({}));

  return (
    <div className="flex-1 pb-4 px-4 md:px-8 flex flex-col gap-y-4">
      <DataTable columns={columns} data={data.items} />
      {data.items.length === 0 && (
        <div className="flex-1 flex items-center justify-center">
          <EmptyState
            title="Create your first meeting"
            description="Create a meeting to get started. Each meeting will be managed by an agent."
          />
        </div>
      )}
    </div>
  );
};

export const MeetingsViewLoading = () => {
  return <LoadingState title="Loading meetings" description="Please wait..." />;
};

export const MeetingsViewError = () => {
  return (
    <ErrorState
      title="Error Loading Meetings"
      description="Please try again later."
    />
  );
};
