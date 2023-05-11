import { SiteType } from '@constants/site';
import { useDialog } from '@hooks/useDialog';
import { useMutation } from '@hooks/useMutation';
import { useSiteType } from '@hooks/useSiteType';
import { DialogType } from '@models/DialogModel';
import { useQueryClient } from 'react-query';
import { postOrderManagerMemo } from '../apis';
import { OrderMemoDomainType, OrderMemoQueryKeys } from '../constants';
import { useOrderMemoQuery } from '../hooks';
import { OrderMemoRegistRequest } from '../types';

interface Props {
  orderId: string | undefined;
  orderMemoDomain: OrderMemoDomainType;
  subId?: string;
}

export type ReturnTypeUseOrderMemoService = ReturnType<typeof useOrderMemoService>;

/**
 * 주문 메모 service
 */
export const useOrderMemoService = ({ orderId, orderMemoDomain, subId }: Props) => {
  const currentSiteType = useSiteType();
  const dialog = useDialog();
  const queryClient = useQueryClient();

  const isManager = currentSiteType === SiteType.MANAGER;

  /**
   * 주문 main memo
   *
   * manager office 접속일 경우 main은 manager memo
   * partner office 접속일 경우 main은 partner memo
   */
  const { data: orderMainMemos, isLoading: isLoadingOrderMainMemos } = useOrderMemoQuery(
    { orderId, domain: orderMemoDomain, subId },
    false,
    {
      enabled: !!orderId,
    },
  );

  /**
   * 주문 sub memo
   *
   * manager office 접속일 경우 sub은 partner memo
   */
  const { data: orderSubMemos, isLoading: isLoadingOrderSubMemos } = useOrderMemoQuery(
    { orderId, domain: orderMemoDomain, subId },
    true,
    {
      enabled: !!orderId && isManager,
    },
  );

  /**
   * 주문 메모 등록
   */
  const { mutateAsync: registOrderMemo } = useMutation(
    (params: OrderMemoRegistRequest) => postOrderManagerMemo(params),
    {
      onError: (error) => {
        dialog.open({
          type: DialogType.ALERT,
          content: `주문 메모 등록중 에러가 발생하였습니다.\r\n(${error.data.message})`,
        });
      },
      onSuccess: () => {
        queryClient.invalidateQueries(OrderMemoQueryKeys.lists());

        dialog.open({
          type: DialogType.ALERT,
          content: `주문 메모가 등록되었습니다.`,
        });
      },
    },
  );

  /**
   * 주문 메모 등록 처리
   */
  const handleRegistOrderMemo = (message: string) => {
    registOrderMemo({
      orderId,
      domain: orderMemoDomain,
      message,
      subId: orderMemoDomain === OrderMemoDomainType.ORDER ? orderId : subId,
    });
  };

  return {
    orderMainMemos: orderMainMemos ?? [],
    orderSubMemos: orderSubMemos ?? [],
    isLoading: isLoadingOrderMainMemos || isLoadingOrderSubMemos,
    handleRegistOrderMemo,
  };
};
