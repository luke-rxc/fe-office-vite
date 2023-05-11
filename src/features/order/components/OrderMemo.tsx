import { Box } from '@material-ui/core';
import { Section, MessageInput, Messages } from '.';
import { SectionType } from '../constants';
import { ReturnTypeUseOrderMemoService } from '../services';

interface Props {
  isManager: boolean;
  orderMainMemos: ReturnTypeUseOrderMemoService['orderMainMemos'];
  orderSubMemos: ReturnTypeUseOrderMemoService['orderSubMemos'];
  onRegistOrderMemo: ReturnTypeUseOrderMemoService['handleRegistOrderMemo'];
}

/**
 * 주문 메모 component
 */
export const OrderMemo = ({
  isManager,
  orderMainMemos,
  orderSubMemos,
  onRegistOrderMemo: handleRegistOrderMemo,
}: Props) => {
  if (!isManager) {
    return (
      <Section title="파트너 메모" type={SectionType.SUB}>
        <MessageInput onSave={handleRegistOrderMemo} />
        <Box sx={{ height: '10px' }} />
        <Messages items={orderMainMemos} height="130px" />
      </Section>
    );
  }

  return (
    <>
      <Section title="관리자 메모" type={SectionType.SUB}>
        <MessageInput onSave={handleRegistOrderMemo} />
        <Box sx={{ height: '10px' }} />
        <Messages items={orderMainMemos} height="130px" />
      </Section>
      <Section title="파트너 메모" type={SectionType.SUB}>
        <Messages items={orderSubMemos} height="130px" />
      </Section>
    </>
  );
};
