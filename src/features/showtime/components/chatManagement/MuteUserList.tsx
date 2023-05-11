import styled from '@emotion/styled-base';
import { Typography, List, ListItem, ListItemText, Box, ListItemSecondaryAction, Button } from '@material-ui/core';
import { memo } from 'react';

interface Props {
  items: Array<SendBird.User>;
  height: string;
  onClickUnMute: (user: SendBird.User) => void;
}

export const MuteUserList = memo(
  ({ height, items = [], onClickUnMute }: Props) => {
    const onClick = (user: SendBird.User) => {
      return () => {
        onClickUnMute(user);
      };
    };

    return (
      <>
        <Typography sx={{ mb: '10px' }} variant="h6" component="div">
          Mute ({(items || []).length ?? 0})
        </Typography>
        <Box>
          <ListStyled height={height}>
            {(items || []).map((item) => (
              <ListItem key={item.userId}>
                <ListItemText primary={item.nickname} />
                <ListItemSecondaryAction>
                  <Button variant="outlined" size="small" onClick={onClick(item)}>
                    Mute 해제
                  </Button>
                </ListItemSecondaryAction>
              </ListItem>
            ))}
          </ListStyled>
        </Box>
      </>
    );
  },
  ({ items: prevItems, height: prevHeight }, { items: nextItems, height: nextHeight }) =>
    Object.is(prevItems, nextItems) && prevHeight === nextHeight,
);

const ListStyled = styled(List)<{ height: string }>`
  border: 1px solid #ccc;
  height: ${({ height }) => height ?? 'auto'};
  overflow-y: scroll;
`;
