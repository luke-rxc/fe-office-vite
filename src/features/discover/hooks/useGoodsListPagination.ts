import { PaginationProps } from '@components/table/Table';
import { useState } from 'react';
import { GOODS_DEFAULT_LIMIT, GOODS_DEFAULT_PAGE } from '../constants';

interface Props extends Partial<PaginationProps> {
  onChangePagination: (page: number, size: number) => void;
}

interface ReturnPagination extends PaginationProps {
  initPagination: () => void;
  onUpdatePage: (changePage: number) => void;
}

/**
 * 상품 리스트 pagination hook
 */
export const useGoodsListPagination = ({ total, onChangePagination }: Props): ReturnPagination => {
  const [page, setPage] = useState<number>(GOODS_DEFAULT_PAGE);
  const [limit, setLimit] = useState<number>(GOODS_DEFAULT_LIMIT);

  const handleChangePagination = (changePage: number, changeLimit: number) => {
    page !== changePage && setPage(changePage);
    limit !== changeLimit && setLimit(changeLimit);
    onChangePagination(changePage, changeLimit);
  };

  const initPagination = () => {
    setPage(GOODS_DEFAULT_PAGE);
    setLimit(GOODS_DEFAULT_LIMIT);
  };

  const handleUpdatePage = (changePage: number) => {
    page !== changePage && setPage(changePage);
  };

  return {
    limit,
    page,
    total,
    onChange: handleChangePagination,
    onUpdatePage: handleUpdatePage,
    initPagination,
  };
};
