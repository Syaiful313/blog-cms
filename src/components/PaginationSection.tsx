"use client";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { useSearchParams, useRouter } from "next/navigation";
import { FC } from "react";

interface PaginationProps {
  total: number;
  limit: number;
}

const PaginationSection: FC<PaginationProps> = ({ total, limit }) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentPage = parseInt(String(searchParams.get("page"))) || 1;
  const hendleNextPage = () => {
    if (currentPage < Math.ceil(total / limit)) {
      router.push(`?page=${currentPage + 1}`);
    }
  };
  const handlePreviousPage = () => {
    if (currentPage > 1) {
      router.push(`?page=${currentPage - 1}`);
    }
  };
  return (
    <Pagination className="my-12">
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious onClick={handlePreviousPage} />
        </PaginationItem>

        <PaginationItem>
          <PaginationLink>{currentPage}</PaginationLink>
        </PaginationItem>

        <PaginationItem>
          <PaginationNext onClick={hendleNextPage} />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export default PaginationSection;
