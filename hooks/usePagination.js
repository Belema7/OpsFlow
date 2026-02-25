"use client";

import { useMemo } from "react";
import { DEFAULT_PAGE_SIZE } from "@/utils/constants";

export function usePagination(total, currentPage, limit = DEFAULT_PAGE_SIZE) {
    return useMemo(() => {
        const totalPages = Math.ceil(total / limit);
        return {
            totalPages,
            hasNext: currentPage < totalPages,
            hasPrev: currentPage > 1,
        };
    }, [total, currentPage, limit]);
}
